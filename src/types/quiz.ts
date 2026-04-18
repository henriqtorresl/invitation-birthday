export type QuizOption = {
  id: string;
  label: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  type: "single-choice";
  options: QuizOption[];
  acceptedAnswers: string[];
  hint?: string;
  funErrorMessage?: string;
};
