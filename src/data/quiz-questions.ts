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
    funErrorMessage: "Hmm... tenta de novo. Essa resposta ainda nao tem cara de hit.",
  },
  {
    id: "birthday-age",
    question: "Quantos anos a Lamis esta fazendo?",
    type: "single-choice",
    options: [
      { id: "18", label: "18 (com experiencia de influencer)" },
      { id: "23", label: "23, no auge da beleza e do carisma" },
      { id: "30", label: "30 com energia de festival pop" },
    ],
    acceptedAnswers: ["23"],
    hint: "Spoiler: e a idade mais estilosa da temporada.",
    funErrorMessage: "Quase! Revisa esse numero com carinho.",
  },
  {
    id: "personality",
    question: "Complete: a Lamis e engracada e...",
    type: "single-choice",
    options: [
      { id: "estilosa", label: "Estilosa (look impecavel sem esforco)" },
      { id: "quietinha", label: "Quietinha (so que nao)" },
      { id: "sumida", label: "Sumida de festa (essa foi boa)" },
    ],
    acceptedAnswers: ["estilosa"],
    hint: "Vale algo no clima fashion e confiante.",
    funErrorMessage: "Resposta boa, mas ainda nao e a energia da Lamis.",
  },
  {
    id: "dress-code",
    question: "O mood da festa e:",
    type: "single-choice",
    options: [
      { id: "pijama", label: "Pijama e cobertor (edicao soninho)" },
      { id: "pop-feminino", label: "Pop feminino e elegante" },
      { id: "esporte", label: "Uniforme de academia e squeeze" },
    ],
    acceptedAnswers: ["pop-feminino"],
    hint: "Pensa em algo jovem, divertido e cheio de personalidade.",
    funErrorMessage: "Tentativa linda, mas ainda nao acertou o mood oficial.",
  },
];
