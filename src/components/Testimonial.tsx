import { useInView } from "../hooks/useInView";

export default function Testimonial() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`reveal max-w-[1080px] mx-auto px-6 py-[84px] text-center ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="font-display text-[32px] text-gold mb-[22px]">“</div>
      <p className="font-display text-[clamp(24px,6vw,40px)] leading-[1.4] text-ink font-normal italic">
        Ma bague est superbe et n'a pas terni malgré la chaleur d'Abidjan. Un
        accueil chaleureux, un service rapide — je ne commande plus ailleurs.
      </p>
      <div className="mt-7 text-[11px] tracking-[0.16em] uppercase text-muted-taupe">
        Awa D. · Abidjan
      </div>
    </section>
  );
}
