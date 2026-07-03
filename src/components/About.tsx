const BOUTIQUE_IMG =
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80";

export default function About() {
  return (
    <section id="apropos" className="bg-ink text-warm-light mt-[60px]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 nav:grid-cols-2 items-stretch">
        <div className="px-7 py-18 flex flex-col justify-center order-2">
          <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">
            Notre boutique
          </div>
          <h2 className="font-display text-[clamp(32px,8vw,56px)] font-medium leading-[1.08] text-off-white">
            Des bijoux pensés pour durer
          </h2>
          <p className="text-[15px] font-light leading-[1.9] text-muted-warm mt-6">
            Fondée à Abidjan, Andréa Jewelry sélectionne avec soin des bijoux
            en acier inoxydable et en plaqué or : des pièces qui gardent leur
            éclat au quotidien, résistantes à l'eau et à la transpiration.
          </p>
          <p className="text-[15px] font-light leading-[1.9] text-muted-warm mt-4">
            Nous croyons qu'on peut avoir du style sans se ruiner. Chaque
            modèle est choisi pour sa finition, sa solidité et son prix
            juste.
          </p>
          <a
            href="#engagements"
            className="self-start mt-8 text-off-white no-underline text-[11px] tracking-[0.16em] uppercase border-b border-gold pb-1.5"
          >
            Nos engagements
          </a>
        </div>
        <div className="relative overflow-hidden min-h-[320px] order-1">
          <img
            src={BOUTIQUE_IMG}
            alt="Boutique Andréa"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
