type FinalInviteCardProps = {
  onDownloadInvite: () => void;
  onRestartQuiz: () => void;
};

const wppMsg = "Oiee, passando aqui pra confirmar minha presença!!!";
const LAMIS_WHATSAPP_URL = `https://wa.me/5561982917777?text=${encodeURIComponent(wppMsg)}`;
const LOCATION_MAPS_URL = "https://maps.app.goo.gl/N9i1jeiYXgv6A9UZ7?g_st=iw";
const LOCATION_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Doma%20Rooftop%20Plano%20Piloto&output=embed";

export function FinalInviteCard({
  onDownloadInvite,
  onRestartQuiz,
}: FinalInviteCardProps) {
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
        <InviteInfo label="Local" value="Doma Rooftop - Plano Piloto" />
        <InviteInfo label="Confirmar até" value="28/04" />
      </div>

      <div className="mt-4 rounded-2xl border border-rose-200 bg-white/75 p-4">
        <p className="text-sm font-medium leading-6 text-berry-700">
          Para confirmar, fale com a Lamis no WhatsApp.
        </p>
        <a
          href={LAMIS_WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex rounded-full bg-berry-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-berry-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry-500"
        >
          Confirmar no WhatsApp
        </a>
      </div>

      <article className="mt-4 rounded-2xl border border-rose-200/70 bg-white/80 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry-500">
          Localização
        </p>
        <p className="mt-1 text-sm text-berry-700">
          Veja a rota e abra a localização no Google Maps.
        </p>
        <div className="mt-3 overflow-hidden rounded-2xl border border-rose-200/70 bg-white">
          <iframe
            title="Mapa de localização do evento"
            src={LOCATION_MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-56 w-full"
          />
        </div>
        <a
          href={LOCATION_MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex rounded-full border border-berry-300 bg-white px-4 py-2 text-sm font-semibold text-berry-700 transition hover:border-berry-500 hover:text-berry-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry-500"
        >
          Abrir no Google Maps
        </a>
      </article>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onDownloadInvite}
          className="rounded-full bg-berry-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-berry-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry-500"
        >
          Baixar convite
        </button>
        <button
          type="button"
          onClick={onRestartQuiz}
          className="rounded-full border border-berry-300 bg-white/85 px-5 py-2.5 text-sm font-semibold text-berry-700 transition hover:border-berry-500 hover:text-berry-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry-500"
        >
          Voltar para o início
        </button>
      </div>
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
