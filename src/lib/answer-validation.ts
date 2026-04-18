const sanitizeAnswer = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

export const isAnswerAccepted = (
  answer: string,
  acceptedAnswers: string[],
): boolean => {
  const normalizedAnswer = sanitizeAnswer(answer);

  return acceptedAnswers.some(
    (candidate) => sanitizeAnswer(candidate) === normalizedAnswer,
  );
};
