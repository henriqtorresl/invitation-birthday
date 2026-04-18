export type QuizQuestion = {
  id: string;
  question: string;
  type: "text";
  acceptedAnswers: string[];
  placeholder?: string;
  hint?: string;
  funErrorMessage?: string;
};
