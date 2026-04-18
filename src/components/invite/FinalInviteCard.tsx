type FinalInviteCardProps = {
  onRestartQuiz: () => void;
};

export function FinalInviteCard({ onRestartQuiz }: FinalInviteCardProps) {
  return (
    <section className="w-full overflow-hidden rounded-4xl border border-white/80 bg-gradient-to-br from-white via-rose-50 to-peach-100 p-6 shadow-soft sm:p-10">
      <p className="inline-flex rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-berry-500">
        Convite oficial
      </p>

      <h1 className="mt-5 text-4xl leading-tight text-berry-950 sm:text-5xl">
        Vem celebrar os meus 23 anos comigo
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-berry-700 sm:text-lg">
        Quero você comigo em uma noite leve, divertida e cheia de música pop,
        risadas e looks incríveis. Sua presença vai deixar tudo ainda mais
        especial.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <InviteInfo label="Data" value="02/05" />
        <InviteInfo label="Horário" value="17h" />
        <InviteInfo label="Local" value="Mané - Águas Claras Shopping" />
        <InviteInfo
          label="Confirmar até"
          value="28/04"
        />
      </div>

      <p className="mt-6 rounded-2xl border border-rose-200 bg-white/75 p-4 text-sm leading-6 text-berry-700">
        A vibe é divertida, com brilho e muito carinho. Vai ser especial ter
        você comigo nesse dia.
      </p>

      <button
        type="button"
        onClick={onRestartQuiz}
        className="mt-6 rounded-full border border-berry-300 bg-white/85 px-5 py-2.5 text-sm font-semibold text-berry-700 transition hover:border-berry-500 hover:text-berry-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry-500"
      >
        Voltar para o início
      </button>
    </section>
  );
}

type InviteInfoProps = {
  label: string;
  value: string;
};

function InviteInfo({ label, value }: InviteInfoProps) {
  return (
    <article className="rounded-2xl border border-rose-200/70 bg-white/80 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry-500">
        {label}
      </p>
      <p className="mt-2 text-base font-medium text-berry-900">{value}</p>
    </article>
  );
}
