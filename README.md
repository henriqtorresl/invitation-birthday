# Convite de Aniversário da Lamis

Projeto pessoal de um site-convite interativo que fiz para o aniversário da minha namorada.

A experiência foi pensada para ser:
- feminina e moderna
- divertida, com toque de humor
- emocional, com sensação de surpresa

## Como funciona

1. A pessoa entra na tela de abertura.
2. Responde um quiz em etapas sobre a Lamis.
3. Ao acertar tudo, desbloqueia o convite final.
4. Na tela final, a música é reproduzida em loop e os dados do evento aparecem.

## Funcionalidades já implementadas

- Quiz em etapas com opções fixas (single-choice)
- Feedback visual e sonoro para acerto e erro
- Snackbar de sucesso no topo da tela
- Tela de desbloqueio com transição
- Convite final com data, horário, local e dress code
- Persistência de progresso com `localStorage`
- Botão para refazer o quiz (limpa o progresso salvo)
- Áudio de fundo na tela final (arquivo de exemplo sem direitos autorais)

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts úteis

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Estrutura principal

- `app/page.tsx`: fluxo principal (abertura, quiz, desbloqueio e convite)
- `src/data/quiz-questions.ts`: perguntas e alternativas
- `src/components/invite/*`: componentes da interface do convite/quiz
- `public/audio/invite-theme.ogg`: áudio de exemplo usado na tela final

## Como personalizar rápido

- Trocar perguntas e respostas: `src/data/quiz-questions.ts`
- Trocar texto do convite final: `src/components/invite/FinalInviteCard.tsx`
- Trocar música da tela final: `public/audio/invite-theme.ogg`
- Ajustar cores/tema global: `app/globals.css`
- Alterar título e ícone do site: `app/layout.tsx` e `public/favicon-lamis.svg`

## Observações

- Alguns navegadores bloqueiam autoplay após reload direto na tela final sem interação do usuário.
- O progresso fica salvo no navegador via `localStorage`.
