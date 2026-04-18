type FinalInviteCardProps = {
  onRestart: () => void;
};

export function FinalInviteCard({ onRestart }: FinalInviteCardProps) {
  return (
    <section className="w-full overflow-hidden rounded-4xl border border-white/80 bg-gradient-to-br from-white via-rose-50 to-peach-100 p-6 shadow-soft sm:p-10">
      <p className="inline-flex rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-berry-500">
        Convite oficial
      </p>

      <h1 className="mt-5 text-4xl leading-tight text-berry-950 sm:text-5xl">
        Vem celebrar os meus 22 anos comigo
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-berry-700 sm:text-lg">
        Quero voce comigo em uma noite leve, divertida e cheia de musica pop,
        risadas e looks incriveis. Sua presenca vai deixar tudo ainda mais
        especial.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <InviteInfo label="Data" value="Sabado, 30 de maio de 2026" />
        <InviteInfo label="Horario" value="19h30" />
        <InviteInfo label="Local" value="Casa Aurora, Rua das Flores, 220" />
        <InviteInfo
          label="Dress code"
          value="Pop elegante com toque feminino"
        />
      </div>

      <p className="mt-6 rounded-2xl border border-rose-200 bg-white/75 p-4 text-sm leading-6 text-berry-700">
        Confirmacao ate 20 de maio de 2026. Se quiser, traz um acessorio com
        brilho para combinar com a energia da noite.
      </p>

      <button
        type="button"
        onClick={onRestart}
        className="mt-8 rounded-full border border-berry-300 bg-white px-6 py-3 text-sm font-semibold text-berry-700 transition hover:border-berry-500 hover:text-berry-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry-500"
      >
        Refazer desafio
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
