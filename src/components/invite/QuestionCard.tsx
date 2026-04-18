import { FormEvent } from "react";

import { QuizQuestion } from "@/src/types/quiz";

type Feedback = {
  status: "idle" | "error" | "success";
  message: string;
};

type QuestionCardProps = {
  question: QuizQuestion;
  answer: string;
  feedback: Feedback;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
};

export function QuestionCard({
  question,
  answer,
  feedback,
  onAnswerChange,
  onSubmit,
}: QuestionCardProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  const feedbackColor =
    feedback.status === "error" ? "text-rose-600" : "text-emerald-600";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-5 rounded-3xl border border-white/75 bg-white/90 p-6 shadow-soft backdrop-blur-sm sm:p-8"
    >
      <h2 className="text-2xl leading-snug text-berry-950">{question.question}</h2>
      {question.hint ? (
        <p className="mt-3 text-sm leading-6 text-berry-600">{question.hint}</p>
      ) : null}
      <fieldset className="mt-6">
        <legend className="mb-2 block text-sm font-semibold text-berry-700">
          Escolha uma opção
        </legend>
        <div className="grid gap-3">
          {question.options.map((option) => {
            const isChecked = answer === option.id;

            return (
              <label
                key={option.id}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 transition ${
                  isChecked
                    ? "border-berry-500 bg-berry-50"
                    : "border-rose-200 bg-rose-50/40 hover:border-berry-300"
                }`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option.id}
                  checked={isChecked}
                  onChange={(event) => onAnswerChange(event.target.value)}
                  className="mt-1 h-4 w-4 accent-berry-500"
                />
                <span className="text-sm leading-6 text-berry-900 sm:text-base">
                  {option.label}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
      {feedback.status !== "idle" ? (
        <p className={`mt-3 text-sm font-medium ${feedbackColor}`}>
          {feedback.message}
        </p>
      ) : null}
      <button
        type="submit"
        className="mt-6 rounded-full bg-berry-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-berry-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry-500"
      >
        Confirmar resposta
      </button>
    </form>
  );
}
