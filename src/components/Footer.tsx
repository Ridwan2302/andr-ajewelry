const footerLinkClass = "text-muted-warm no-underline hover:text-gold transition-colors";

export default function Footer() {
  return (
    <footer className="bg-ink text-muted-warm pt-16 px-6 pb-9">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 nav:grid-cols-[1.6fr_1fr_1fr_1fr] gap-x-8 gap-y-10">
        <div className="col-span-2 nav:col-span-1">
          <div className="font-display text-[28px] text-off-white leading-none">
            Andréa
          </div>
          <div className="text-[8px] tracking-[0.42em] uppercase text-gold mt-1 mb-5">
            Jewelry
          </div>
          <p className="text-sm font-light leading-[1.8] max-w-[300px] text-muted-warm-2">
            Boutique de bijoux fondée à Abidjan. Acier inoxydable et plaqué
            or, pensés pour durer au quotidien.
          </p>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.18em] uppercase text-off-white mb-4">
            Boutique
          </div>
          <div className="flex flex-col gap-[11px] text-sm font-light">
            <a href="#collections" className={footerLinkClass}>
              Collections
            </a>
            <a href="#produits" className={footerLinkClass}>
              Produits
            </a>
            <a href="#produits" className={footerLinkClass}>
              Nouveautés
            </a>
            <a href="#contact" className={footerLinkClass}>
              Cartes cadeaux
            </a>
          </div>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.18em] uppercase text-off-white mb-4">
            La Boutique
          </div>
          <div className="flex flex-col gap-[11px] text-sm font-light">
            <a href="#apropos" className={footerLinkClass}>
              Notre histoire
            </a>
            <a href="#engagements" className={footerLinkClass}>
              Nos engagements
            </a>
            <a href="#contact" className={footerLinkClass}>
              Nous contacter
            </a>
          </div>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.18em] uppercase text-off-white mb-4">
            Contact
          </div>
          <div className="flex flex-col gap-[11px] text-sm font-light">
            <span>Cocody, Abidjan</span>
            <span>+225 27 22 00 00 00</span>
            <span className="text-gold">bonjour@andrea-jewelry.ci</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto mt-12 pt-[26px] border-t border-off-white/10 flex justify-between flex-wrap gap-2.5 text-[11px] text-muted-taupe-2 tracking-[0.08em]">
        <span>© 2026 Andréa Jewelry · Tous droits réservés</span>
        <span>Abidjan · Côte d'Ivoire</span>
      </div>
    </footer>
  );
}
