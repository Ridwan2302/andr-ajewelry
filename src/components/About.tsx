const ATELIER_IMG =
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80";

export default function About() {
  return (
    <section id="apropos" className="bg-ink text-warm-light mt-[60px]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 nav:grid-cols-2 items-stretch">
        <div className="px-7 py-18 flex flex-col justify-center order-2">
          <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">
            La Maison Andréa
          </div>
          <h2 className="font-display text-[clamp(32px,8vw,56px)] font-medium leading-[1.08] text-off-white">
            Un savoir-faire né d'une passion
          </h2>
          <p className="text-[15px] font-light leading-[1.9] text-muted-warm mt-6">
            Fondée à Abidjan, Andréa Jewelry réunit des artisans joailliers
            qui perpétuent des gestes transmis de génération en génération.
            Chaque bijou est dessiné, fondu et poli à la main dans notre
            atelier de Cocody.
          </p>
          <p className="text-[15px] font-light leading-[1.9] text-muted-warm mt-4">
            Nous sélectionnons des ors et des pierres d'exception pour créer
            des pièces intemporelles, qui accompagnent les plus beaux moments
            d'une vie.
          </p>
          <a
            href="#savoirfaire"
            className="self-start mt-8 text-off-white no-underline text-[11px] tracking-[0.16em] uppercase border-b border-gold pb-1.5"
          >
            Notre atelier
          </a>
        </div>
        <div className="relative overflow-hidden min-h-[320px] order-1">
          <img
            src={ATELIER_IMG}
            alt="Atelier Andréa"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
