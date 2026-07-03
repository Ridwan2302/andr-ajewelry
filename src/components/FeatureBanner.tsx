const FEATURE_IMG =
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80";

export default function FeatureBanner() {
  return (
    <section className="relative min-h-[460px] flex items-center overflow-hidden">
      <img
        src={FEATURE_IMG}
        alt="Collection signature"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/50" />
      <div className="relative max-w-[1280px] mx-auto px-6 w-full text-center z-[2]">
        <div className="text-[11px] tracking-[0.3em] uppercase text-warm-light-2 mb-[18px]">
          Sur-mesure
        </div>
        <h2 className="font-display text-[clamp(32px,8vw,64px)] font-medium text-off-white leading-[1.05] max-w-[760px] mx-auto">
          Créez la pièce de vos rêves
        </h2>
        <p className="text-warm-light text-base font-light max-w-[500px] mx-auto mt-5 mb-8 leading-[1.7]">
          Bagues de fiançailles, alliances, créations uniques : nos joailliers
          donnent vie à vos envies.
        </p>
        <a
          href="#contact"
          className="bg-cream text-ink py-4 px-[34px] no-underline text-[11px] tracking-[0.16em] uppercase inline-block"
        >
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
}
