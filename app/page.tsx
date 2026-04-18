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

type PersistedQuizState = {
  stage: FlowStage;
  currentStep: number;
  answers: Record<string, string>;
};

const defaultFeedback: Feedback = {
  status: "idle",
  message: "",
};

const QUIZ_STORAGE_KEY = "lamis-invite-progress-v1";

export default function Home() {
  const [stage, setStage] = useState<FlowStage>("opening");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Feedback>(defaultFeedback);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [hasLoadedPersistedState, setHasLoadedPersistedState] = useState(false);
  const inviteMusicRef = useRef<HTMLAudioElement | null>(null);
  const uiAudioContextRef = useRef<AudioContext | null>(null);

  const currentQuestion = quizQuestions[currentStep];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] ?? "" : "";
  const totalSteps = quizQuestions.length;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const savedState = window.localStorage.getItem(QUIZ_STORAGE_KEY);

      if (!savedState) {
        setHasLoadedPersistedState(true);
        return;
      }

      try {
        const parsedState = JSON.parse(savedState) as Partial<PersistedQuizState>;
        const validStages: FlowStage[] = ["opening", "quiz", "unlocking", "final"];
        const safeStage = validStages.includes(parsedState.stage as FlowStage)
          ? (parsedState.stage as FlowStage)
          : "opening";
        const parsedStep =
          typeof parsedState.currentStep === "number"
            ? Math.floor(parsedState.currentStep)
            : 0;
        const maxStepIndex = Math.max(totalSteps - 1, 0);
        const safeStep = Math.min(Math.max(parsedStep, 0), maxStepIndex);
        const safeAnswers =
          parsedState.answers && typeof parsedState.answers === "object"
            ? parsedState.answers
            : {};

        setStage(safeStage);
        setCurrentStep(safeStage === "opening" ? 0 : safeStep);
        setAnswers(safeAnswers);
      } catch {
        window.localStorage.removeItem(QUIZ_STORAGE_KEY);
      } finally {
        setHasLoadedPersistedState(true);
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [totalSteps]);

  useEffect(() => {
    if (!hasLoadedPersistedState) {
      return;
    }

    const persistedState: PersistedQuizState = {
      stage,
      currentStep,
      answers,
    };

    window.localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(persistedState));
  }, [answers, currentStep, hasLoadedPersistedState, stage]);

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
    return () => {
      const uiAudioContext = uiAudioContextRef.current;

      if (!uiAudioContext) {
        return;
      }

      void uiAudioContext.close();
      uiAudioContextRef.current = null;
    };
  }, []);

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

  const getUiAudioContext = () => {
    if (typeof window === "undefined") {
      return null;
    }

    if (uiAudioContextRef.current) {
      return uiAudioContextRef.current;
    }

    const BrowserAudioContext = window.AudioContext;

    if (!BrowserAudioContext) {
      return null;
    }

    uiAudioContextRef.current = new BrowserAudioContext();
    return uiAudioContextRef.current;
  };

  const playUiTones = (
    tones: Array<{
      frequency: number;
      duration: number;
      offset: number;
      type: OscillatorType;
      gain: number;
    }>,
  ) => {
    const uiAudioContext = getUiAudioContext();

    if (!uiAudioContext) {
      return;
    }

    if (uiAudioContext.state === "suspended") {
      void uiAudioContext.resume();
    }

    const baseTime = uiAudioContext.currentTime + 0.01;

    tones.forEach((tone) => {
      const oscillator = uiAudioContext.createOscillator();
      const gainNode = uiAudioContext.createGain();
      const startTime = baseTime + tone.offset;
      const endTime = startTime + tone.duration;

      oscillator.type = tone.type;
      oscillator.frequency.setValueAtTime(tone.frequency, startTime);

      gainNode.gain.setValueAtTime(0.0001, startTime);
      gainNode.gain.exponentialRampToValueAtTime(tone.gain, startTime + 0.015);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, endTime);

      oscillator.connect(gainNode);
      gainNode.connect(uiAudioContext.destination);

      oscillator.start(startTime);
      oscillator.stop(endTime);
    });
  };

  const playSuccessSound = () => {
    playUiTones([
      { frequency: 659.25, duration: 0.11, offset: 0, type: "sine", gain: 0.08 },
      { frequency: 830.61, duration: 0.14, offset: 0.1, type: "triangle", gain: 0.1 },
    ]);
  };

  const playErrorSound = () => {
    playUiTones([
      { frequency: 320, duration: 0.13, offset: 0, type: "sawtooth", gain: 0.06 },
      { frequency: 220, duration: 0.17, offset: 0.1, type: "sawtooth", gain: 0.07 },
    ]);
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
      playErrorSound();
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
      playErrorSound();
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
      playSuccessSound();
      setFeedback({
        status: "success",
        message: "Perfeito. Desbloqueando seu convite...",
      });
      setStage("unlocking");
      return;
    }

    playSuccessSound();
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
