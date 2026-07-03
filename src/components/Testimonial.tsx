export default function Testimonial() {
  return (
    <section className="max-w-[1080px] mx-auto px-6 py-[84px] text-center">
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
