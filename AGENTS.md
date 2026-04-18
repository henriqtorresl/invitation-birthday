# AGENTS.md

## Visão geral do projeto

Este projeto é um site-convite interativo de aniversário, desenvolvido em Next.js, com experiência responsiva e foco em uma estética feminina, moderna, divertida e delicada.

A proposta central é:

1. O visitante acessa a página inicial.
2. Ele passa por um formulário em múltiplas etapas com perguntas sobre a aniversariante.
3. Se acertar as perguntas, desbloqueia o convite final.
4. O convite final revela as informações do aniversário de forma especial, emocional e visualmente bonita.

A aniversariante:

- é uma jovem de 22 anos
- tem personalidade engraçada
- tem um gosto pop e feminino
- gosta de Selena Gomez
- o site deve transmitir carinho, leveza, humor e um ar especial/pessoal
- é estilosa, se veste bem

---

## Papel do agente

Ao atuar neste projeto, você deve se comportar como um engenheiro de software sênior com foco em:

- frontend moderno
- experiência do usuário
- componentização
- acessibilidade
- organização de código
- manutenibilidade
- estética visual coerente

Seu objetivo não é apenas escrever código funcional, mas ajudar a construir uma experiência memorável.

---

## Objetivos principais

1. Criar um site responsivo e bonito.
2. Estruturar um fluxo de perguntas em etapas.
3. Permitir desbloqueio do convite final ao acertar as respostas.
4. Facilitar futura manutenção e inclusão de novas perguntas.
5. Garantir código limpo, legível e escalável.
6. Manter a identidade visual feminina, jovem, divertida e elegante.

---

## Stack e preferências técnicas

### Framework

- Next.js (App Router, se já estiver configurado)
- React
- TypeScript

### Estilo

Preferir uma das abordagens abaixo:

- Tailwind CSS

Dar preferência para:

- componentes pequenos e reutilizáveis
- design system simples com tokens de cor e espaçamento
- animações suaves
- foco em mobile-first

### Gerenciamento de estado

Para este projeto, priorizar simplicidade:

- `useState`
- `useReducer` se o fluxo ficar mais complexo
- evitar adicionar bibliotecas de estado desnecessárias

### Persistência

Inicialmente, não é necessário backend.
As respostas podem ficar apenas em memória no frontend.

Se for útil futuramente:

- usar `localStorage` apenas quando fizer sentido
- nunca complicar cedo demais

---

## Diretrizes de UX/UI

### Estilo visual

A interface deve seguir estas características:

- feminina
- delicada
- moderna
- divertida
- romântica na medida certa
- jovem
- charmosa

### Evitar

- visual infantilizado demais
- excesso de elementos piscando
- poluição visual
- rosa muito saturado em tudo
- excesso de texto em blocos longos

### Preferências visuais

- tons de rosa suave, lilás, off-white, pêssego, nude ou dourado claro
- cantos arredondados
- sombras leves
- tipografia elegante e amigável
- ícones e detalhes sutis, como corações, estrelas, brilhos ou flores minimalistas
- microinterações suaves
- transições delicadas entre etapas

### Inspiração de clima

A experiência deve parecer:

- pessoal
- fofa
- premium
- divertida
- feita com carinho por alguém próximo

---

## Estrutura de experiência esperada

### Fluxo ideal inicial

1. **Tela de abertura**
   - mensagem curta e charmosa
   - call to action para começar
   - clima de curiosidade/mistério

2. **Formulário em etapas**
   - uma pergunta por vez
   - progresso visual
   - feedback leve
   - navegação simples

3. **Validação**
   - verificar se a resposta está correta
   - pode haver:
     - resposta exata
     - lista de alternativas aceitas
     - comparação case-insensitive
   - erros devem ter feedback gentil e divertido, nunca ríspido

4. **Desbloqueio**
   - ao acertar todas as perguntas, exibir uma transição especial
   - reforçar sensação de conquista

5. **Convite final**
   - mensagem especial
   - data
   - horário
   - local
   - observações
   - visual mais impactante/emocional que o restante do fluxo

---

## Requisitos funcionais

### Formulário de perguntas

- deve suportar múltiplas etapas
- deve ser fácil adicionar/remover perguntas
- perguntas devem vir preferencialmente de uma estrutura de dados centralizada
- cada pergunta deve conter pelo menos:
  - `id`
  - `question`
  - `type`
  - `acceptedAnswers`
  - `placeholder` (quando aplicável)

Exemplo de estrutura esperada:

```ts
type QuizQuestion = {
  id: string;
  question: string;
  type: "text";
  acceptedAnswers: string[];
  placeholder?: string;
};
```
