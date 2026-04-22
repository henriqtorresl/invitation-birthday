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
    funErrorMessage: "Quase! Essa resposta ainda não é a playlist oficial dela.",
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
    acceptedAnswers: ["cantucci"],
    hint: "Dica gastronômica: essa tem lugar especial no coração.",
    funErrorMessage: "Boa tentativa, mas essa ainda não ganhou o topo da lista.",
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
    funErrorMessage: "Não foi dessa vez, mas o nécessaire agradece a tentativa.",
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
