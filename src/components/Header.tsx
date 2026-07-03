interface HeaderProps {
  onToggleMenu: () => void;
}

const navLinkClass =
  "text-xs tracking-[0.16em] uppercase text-ink-2 no-underline hover:text-gold transition-colors";

export default function Header({ onToggleMenu }: HeaderProps) {
  return (
    <header className="sticky top-0 z-[100] bg-cream/90 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-[1280px] mx-auto px-5 h-[68px] flex items-center justify-between">
        <nav className="hidden nav:flex gap-[30px] flex-1 items-center">
          <a href="#collections" className={navLinkClass}>
            Collections
          </a>
          <a href="#produits" className={navLinkClass}>
            Produits
          </a>
          <a href="#apropos" className={navLinkClass}>
            La Maison
          </a>
        </nav>

        <a href="#accueil" className="no-underline text-center shrink-0">
          <div className="font-display text-[26px] tracking-[0.04em] text-ink leading-none font-medium">
            Andréa
          </div>
          <div className="text-[8px] tracking-[0.42em] uppercase text-gold mt-[3px]">
            Jewelry
          </div>
        </a>

        <div className="flex gap-6 flex-1 justify-end items-center">
          <a href="#savoirfaire" className={`hidden nav:inline ${navLinkClass}`}>
            Savoir-faire
          </a>
          <a href="#contact" className={`hidden nav:inline ${navLinkClass}`}>
            Contact
          </a>
          <button
            onClick={onToggleMenu}
            aria-label="Menu"
            className="bg-none border-none cursor-pointer flex flex-col gap-[5px] p-1.5"
          >
            <span className="w-6 h-[1.5px] bg-ink block" />
            <span className="w-6 h-[1.5px] bg-ink block" />
            <span className="w-4 h-[1.5px] bg-ink block self-end" />
          </button>
        </div>
      </div>
    </header>
  );
}
