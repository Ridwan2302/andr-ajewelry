import { useInView } from "../hooks/useInView";

const FEATURE_IMG =
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80";

export default function FeatureBanner() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative min-h-[460px] flex items-center overflow-hidden"
    >
      <img
        src={FEATURE_IMG}
        alt="Collection signature"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/50" />
      <div
        className={`reveal relative max-w-[1280px] mx-auto px-6 w-full text-center z-[2] ${
          inView ? "is-visible" : ""
        }`}
      >
        <div className="text-[11px] tracking-[0.3em] uppercase text-warm-light-2 mb-[18px]">
          Le bon choix
        </div>
        <h2 className="font-display text-[clamp(32px,8vw,64px)] font-medium text-off-white leading-[1.05] max-w-[760px] mx-auto">
          L'élégance sans le prix de l'or
        </h2>
        <p className="text-warm-light text-base font-light max-w-[500px] mx-auto mt-5 mb-8 leading-[1.7]">
          Acier inoxydable et plaqué or : la brillance des bijoux fins, la
          résistance en plus. Parfait pour un usage quotidien à Abidjan.
        </p>
        <a
          href="#produits"
          className="bg-cream text-ink py-4 px-[34px] no-underline text-[11px] tracking-[0.16em] uppercase inline-block"
        >
          Découvrir la boutique
        </a>
      </div>
    </section>
  );
}
