export function UnlockTransition() {
  return (
    <section className="w-full rounded-4xl border border-white/80 bg-white/90 px-6 py-12 text-center shadow-soft backdrop-blur-sm sm:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-berry-500">
        Desbloqueando...
      </p>
      <h2 className="mt-4 text-4xl text-berry-950 sm:text-5xl">
        Acertou tudo, lenda
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-berry-700 sm:text-lg">
        Preparando o convite mais fofo, divertido e especial para você.
      </p>
      <div className="mx-auto mt-8 flex w-40 items-center justify-center gap-3">
        <span className="h-3 w-3 animate-bounce rounded-full bg-berry-500 [animation-delay:-0.3s]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-rose-400 [animation-delay:-0.15s]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-sunset-peach" />
      </div>
    </section>
  );
}
