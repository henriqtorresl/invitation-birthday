type OpeningScreenProps = {
  onStart: () => void;
};

export function OpeningScreen({ onStart }: OpeningScreenProps) {
  return (
    <section className="w-full rounded-4xl border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur-sm sm:p-10">
      <p className="inline-flex rounded-full bg-ballet-pink px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-berry-700">
        Convite secreto
      </p>
      <h1 className="mt-4 text-4xl leading-tight text-berry-950 sm:text-5xl">
        Um recado especial te espera no final desse mini desafio
      </h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-berry-700 sm:text-lg">
        Acerte as perguntas sobre a aniversariante e desbloqueie um convite
        feito com carinho, brilho e uma pitada de humor.
      </p>
      <button
        type="button"
        onClick={onStart}
        className="mt-8 rounded-full bg-gradient-to-r from-berry-500 to-rose-400 px-7 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry-500"
      >
        Comecar desafio
      </button>
    </section>
  );
}
