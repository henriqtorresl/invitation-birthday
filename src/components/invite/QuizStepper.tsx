import { QuestionCard } from "@/src/components/invite/QuestionCard";
import { ProgressBar } from "@/src/components/invite/ProgressBar";
import { QuizQuestion } from "@/src/types/quiz";

type Feedback = {
  status: "idle" | "error" | "success";
  message: string;
};

type QuizStepperProps = {
  question: QuizQuestion;
  currentStep: number;
  totalSteps: number;
  answer: string;
  feedback: Feedback;
  onAnswerChange: (value: string) => void;
  onSubmitAnswer: () => void;
  onBack: () => void;
};

export function QuizStepper({
  question,
  currentStep,
  totalSteps,
  answer,
  feedback,
  onAnswerChange,
  onSubmitAnswer,
  onBack,
}: QuizStepperProps) {
  const showBackButton = currentStep > 1;

  return (
    <section className="w-full rounded-4xl border border-white/70 bg-gradient-to-b from-white/75 to-white/90 p-6 shadow-soft backdrop-blur-sm sm:p-10">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <QuestionCard
        question={question}
        answer={answer}
        feedback={feedback}
        onAnswerChange={onAnswerChange}
        onSubmit={onSubmitAnswer}
      />
      {showBackButton ? (
        <button
          type="button"
          onClick={onBack}
          className="mt-4 px-2 text-sm font-semibold text-berry-600 transition hover:text-berry-800"
        >
          Voltar pergunta anterior
        </button>
      ) : null}
    </section>
  );
}
