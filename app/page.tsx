"use client";

import { useEffect, useRef, useState } from "react";

import { FinalInviteCard } from "@/src/components/invite/FinalInviteCard";
import { OpeningScreen } from "@/src/components/invite/OpeningScreen";
import { QuizStepper } from "@/src/components/invite/QuizStepper";
import { SuccessSnackbar } from "@/src/components/invite/SuccessSnackbar";
import { UnlockTransition } from "@/src/components/invite/UnlockTransition";
import { quizQuestions } from "@/src/data/quiz-questions";
import { isAnswerAccepted } from "@/src/lib/answer-validation";

type FlowStage = "opening" | "quiz" | "unlocking" | "final";

type Feedback = {
  status: "idle" | "error" | "success";
  message: string;
};

const defaultFeedback: Feedback = {
  status: "idle",
  message: "",
};

export default function Home() {
  const [stage, setStage] = useState<FlowStage>("opening");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Feedback>(defaultFeedback);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const inviteMusicRef = useRef<HTMLAudioElement | null>(null);

  const currentQuestion = quizQuestions[currentStep];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] ?? "" : "";
  const totalSteps = quizQuestions.length;

  useEffect(() => {
    if (stage !== "unlocking") {
      return;
    }

    const timeout = setTimeout(() => {
      setStage("final");
    }, 2300);

    return () => clearTimeout(timeout);
  }, [stage]);

  useEffect(() => {
    const inviteMusic = new Audio("/audio/invite-theme.ogg");
    inviteMusic.loop = true;
    inviteMusic.volume = 0.45;
    inviteMusicRef.current = inviteMusic;

    return () => {
      inviteMusic.pause();
      inviteMusic.currentTime = 0;
      inviteMusicRef.current = null;
    };
  }, []);

  useEffect(() => {
    const inviteMusic = inviteMusicRef.current;

    if (!inviteMusic) {
      return;
    }

    if (stage === "final") {
      void inviteMusic.play().catch(() => {
        // Browser autoplay policy may block playback without prior user gesture.
      });
      return;
    }

    inviteMusic.pause();
    inviteMusic.currentTime = 0;
  }, [stage]);

  useEffect(() => {
    if (!snackbarVisible) {
      return;
    }

    const timeout = setTimeout(() => {
      setSnackbarVisible(false);
    }, 1400);

    return () => clearTimeout(timeout);
  }, [snackbarVisible]);

  const showSuccessSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarVisible(true);
  };

  const startQuiz = () => {
    setStage("quiz");
    setCurrentStep(0);
    setFeedback(defaultFeedback);
    setSnackbarVisible(false);
  };

  const handleAnswerChange = (value: string) => {
    if (!currentQuestion) {
      return;
    }

    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: value,
    }));

    if (feedback.status !== "idle") {
      setFeedback(defaultFeedback);
    }
  };

  const handleSubmitAnswer = () => {
    if (!currentQuestion) {
      return;
    }

    if (!currentAnswer) {
      setFeedback({
        status: "error",
        message: "Escolhe uma opcao para continuar.",
      });
      return;
    }

    const isCorrect = isAnswerAccepted(
      currentAnswer,
      currentQuestion.acceptedAnswers,
    );

    if (!isCorrect) {
      setFeedback({
        status: "error",
        message:
          currentQuestion.funErrorMessage ??
          "Nao foi dessa vez. Tenta mais uma com confianca.",
      });
      return;
    }

    const isLastQuestion = currentStep === totalSteps - 1;

    if (isLastQuestion) {
      setFeedback({
        status: "success",
        message: "Perfeito. Desbloqueando seu convite...",
      });
      setStage("unlocking");
      return;
    }

    setFeedback(defaultFeedback);
    setSnackbarVisible(false);
    setCurrentStep((previous) => previous + 1);
    showSuccessSnackbar("Acertou! Proxima pergunta liberada.");
  };

  const handleBack = () => {
    if (currentStep === 0) {
      return;
    }

    setCurrentStep((previous) => previous - 1);
    setFeedback(defaultFeedback);
    setSnackbarVisible(false);
  };

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-4xl items-start px-4 py-10 sm:px-6 sm:py-14">
      <div className="absolute -left-16 top-10 h-52 w-52 rounded-full bg-rose-100/60 blur-3xl" />
      <div className="absolute -right-8 bottom-10 h-44 w-44 rounded-full bg-peach-100/80 blur-3xl" />

      <section className="relative z-10 w-full">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-berry-600">
          aniversario especial
        </p>

        {stage === "opening" ? <OpeningScreen onStart={startQuiz} /> : null}

        {stage === "quiz" && currentQuestion ? (
          <QuizStepper
            question={currentQuestion}
            currentStep={currentStep + 1}
            totalSteps={totalSteps}
            answer={currentAnswer}
            feedback={feedback}
            onAnswerChange={handleAnswerChange}
            onSubmitAnswer={handleSubmitAnswer}
            onBack={handleBack}
          />
        ) : null}

        {stage === "unlocking" ? <UnlockTransition /> : null}

        {stage === "final" ? <FinalInviteCard /> : null}
      </section>

      <SuccessSnackbar
        isVisible={snackbarVisible}
        message={snackbarMessage}
      />
    </main>
  );
}
