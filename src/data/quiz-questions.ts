import { QuizQuestion } from "@/src/types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "favorite-singer",
    question: "Qual cantora pop a Lamis ama de verdade?",
    type: "single-choice",
    options: [
      { id: "manoel-gomes", label: "Manoel Gomes (Caneta Azul forever)" },
      { id: "selena-gomez", label: "Selena Gomez" },
      { id: "the-weeknd", label: "The Weeknd" },
    ],
    acceptedAnswers: ["selena-gomez"],
    hint: "Dica: estrela pop e atriz.",
    funErrorMessage: "Hmm... tenta de novo. Essa resposta ainda não tem cara de hit.",
  },
  {
    id: "birthday-age",
    question: "Quantos anos a Lamis está fazendo?",
    type: "single-choice",
    options: [
      { id: "18", label: "18 (com experiência de influencer)" },
      { id: "23", label: "23, no auge da beleza e do carisma" },
      { id: "30", label: "30 com energia de festival pop" },
    ],
    acceptedAnswers: ["23"],
    hint: "Spoiler: é a idade mais estilosa da temporada.",
    funErrorMessage: "Quase! Revisa esse número com carinho.",
  },
  {
    id: "personality",
    question: "Complete: a Lamis é engraçada e...",
    type: "single-choice",
    options: [
      { id: "estilosa", label: "Estilosa (look impecável sem esforço)" },
      { id: "quietinha", label: "Quietinha (só que não)" },
      { id: "sumida", label: "Sumida de festa (essa foi boa)" },
    ],
    acceptedAnswers: ["estilosa"],
    hint: "Vale algo no clima fashion e confiante.",
    funErrorMessage: "Resposta boa, mas ainda não é a energia da Lamis.",
  },
  {
    id: "dress-code",
    question: "O mood da festa é:",
    type: "single-choice",
    options: [
      { id: "pijama", label: "Pijama e cobertor (edição soninho)" },
      { id: "pop-feminino", label: "Pop feminino e elegante" },
      { id: "esporte", label: "Uniforme de academia e squeeze" },
    ],
    acceptedAnswers: ["pop-feminino"],
    hint: "Pensa em algo jovem, divertido e cheio de personalidade.",
    funErrorMessage: "Tentativa linda, mas ainda não acertou o mood oficial.",
  },
];
