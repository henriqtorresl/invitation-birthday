import { QuizQuestion } from "@/src/types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "favorite-singer",
    question: "Cantora favorita?",
    type: "single-choice",
    options: [
      { id: "selena-gomez", label: "Selena Gomez" },
      { id: "j-skini", label: "J. skini" },
      { id: "vitao", label: "Vitão" },
    ],
    acceptedAnswers: ["selena-gomez"],
    hint: "Uma diva pop que a Lamis ama.",
    funErrorMessage:
      "Quase! Essa resposta ainda não é a playlist oficial dela.",
  },
  {
    id: "favorite-parmegiana",
    question: "Minha parmegiana fav:",
    type: "single-choice",
    options: [
      { id: "giraffas", label: "Parmegiana do Giraffas" },
      { id: "cantucci", label: "Cantucci" },
      { id: "taruma", label: "Tarumã" },
    ],
    acceptedAnswers: ["giraffas"],
    hint: "Dica gastronômica: essa tem lugar especial no coração.",
    funErrorMessage:
      "Boa tentativa, mas essa ainda não ganhou o topo da lista.",
  },
  {
    id: "makeup-item",
    question: "Item de maquiagem que não vivo sem:",
    type: "single-choice",
    options: [
      { id: "blush", label: "Blush" },
      { id: "lapis-de-olho", label: "Lápis de olho" },
      { id: "gloss", label: "Gloss" },
    ],
    acceptedAnswers: ["gloss"],
    hint: "Esse item sempre aparece para fechar o look.",
    funErrorMessage:
      "Não foi dessa vez, mas o nécessaire agradece a tentativa.",
  },
];
