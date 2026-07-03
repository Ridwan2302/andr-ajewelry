const HERO_IMG =
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative h-[calc(100svh-68px)] min-h-[560px] flex items-end overflow-hidden"
    >
      <img
        src={HERO_IMG}
        alt="Bijoux Andréa"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/68 from-0% via-ink/14 via-45% to-ink/30 to-100%" />

      <div className="relative max-w-[1280px] w-full mx-auto px-6 pb-14 z-[2]">
        <div className="text-[11px] tracking-[0.3em] uppercase text-warm-light-2 mb-5 font-light">
          Boutique de bijoux en ligne · Abidjan
        </div>
        <h1 className="font-display text-[clamp(46px,12vw,104px)] leading-[0.98] text-off-white font-medium max-w-[900px] tracking-[-0.01em]">
          L'éclat qui vous ressemble
        </h1>
        <p className="text-warm-light text-base font-light max-w-[460px] mt-[22px] leading-[1.7]">
          Achetez nos bijoux en or 18 carats et commandez en un clic sur
          WhatsApp. Livraison partout à Abidjan.
        </p>
        <div className="flex gap-3 mt-[34px] flex-wrap">
          <a
            href="#produits"
            className="bg-cream text-ink py-4 px-[30px] no-underline text-[11px] tracking-[0.16em] uppercase"
          >
            Acheter maintenant
          </a>
          <a
            href="#collections"
            className="border border-off-white/60 text-off-white py-4 px-[30px] no-underline text-[11px] tracking-[0.16em] uppercase"
          >
            Voir les collections
          </a>
        </div>
      </div>
    </section>
  );
}
