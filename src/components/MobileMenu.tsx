interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#collections", label: "Collections" },
  { href: "#produits", label: "Produits" },
  { href: "#apropos", label: "La Boutique" },
  { href: "#engagements", label: "Nos engagements" },
  { href: "#contact", label: "Contact" },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[200] bg-ink/50 backdrop-blur-sm animate-fade-up"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-0 right-0 h-full w-[min(420px,86vw)] bg-cream px-9 py-10 flex flex-col"
      >
        <div className="flex justify-between items-center mb-11">
          <span className="font-display text-2xl text-ink">Menu</span>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="bg-none border-none cursor-pointer text-[32px] text-ink leading-none font-extralight"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col gap-0.5">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`font-display text-[28px] text-ink no-underline py-3 ${
                i < links.length - 1 ? "border-b border-ink/[0.08]" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto text-xs tracking-[0.1em] text-muted-taupe-2 leading-[2]">
          <div>Boutique · Cocody, Abidjan</div>
          <div>+225 27 22 00 00 00</div>
          <div className="text-gold mt-2">bonjour@andrea-jewelry.ci</div>
        </div>
      </div>
    </div>
  );
}
