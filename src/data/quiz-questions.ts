import { QuizQuestion } from "@/src/types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "favorite-singer",
    question: "Qual cantora pop ela ama de verdade?",
    type: "text",
    acceptedAnswers: ["Selena Gomez", "Selena"],
    placeholder: "Digite o nome da cantora",
    hint: "Dica: estrela pop e atriz.",
    funErrorMessage: "Hmm... tenta de novo. Essa resposta ainda nao tem cara de hit.",
  },
  {
    id: "birthday-age",
    question: "Quantos anos ela esta fazendo?",
    type: "text",
    acceptedAnswers: ["22", "vinte e dois", "vinte dois"],
    placeholder: "Ex.: 22",
    hint: "Spoiler: e a idade mais estilosa da temporada.",
    funErrorMessage: "Quase! Revisa esse numero com carinho.",
  },
  {
    id: "personality",
    question: "Complete: ela e engracada e...",
    type: "text",
    acceptedAnswers: ["estilosa", "charmosa", "divertida"],
    placeholder: "Uma palavra que combine com ela",
    hint: "Vale algo no clima fashion e confiante.",
    funErrorMessage: "Resposta boa, mas ainda nao e a energia dela.",
  },
  {
    id: "dress-code",
    question: "O mood da festa e:",
    type: "text",
    acceptedAnswers: ["pop", "feminino", "pop feminino", "fashion pop"],
    placeholder: "Descreva em poucas palavras",
    hint: "Pensa em algo jovem, divertido e cheio de personalidade.",
    funErrorMessage: "Tentativa linda, mas ainda nao acertou o mood oficial.",
  },
];
