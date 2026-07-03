import { products } from "../data/products";
import { productWhatsappLink } from "../lib/whatsapp";

export default function Products() {
  return (
    <section id="produits" className="max-w-[1280px] mx-auto px-5 pt-[60px] pb-10">
      <div className="flex justify-between items-end mb-11 flex-wrap gap-4">
        <div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3.5">
            Sélection du moment
          </div>
          <h2 className="font-display text-[clamp(36px,9vw,62px)] font-medium text-ink leading-[1.05]">
            Pièces vedettes
          </h2>
        </div>
        <a
          href="#contact"
          className="text-[11px] tracking-[0.14em] uppercase text-ink no-underline border-b border-gold pb-1.5"
        >
          Voir toute la boutique
        </a>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-x-4 gap-y-[30px]">
        {products.map((p) => (
          <a
            key={p.name}
            href={productWhatsappLink(p.name, p.price)}
            target="_blank"
            rel="noopener"
            className="no-underline text-inherit block cursor-pointer group"
          >
            <div className="relative aspect-square overflow-hidden bg-tile mb-3.5">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover block transition-transform duration-400 ease-out group-hover:scale-[1.03]"
              />
              {p.tag && (
                <span className="absolute top-3 left-3 bg-cream text-ink text-[9px] tracking-[0.14em] uppercase py-1.5 px-2.5">
                  {p.tag}
                </span>
              )}
            </div>
            <div className="flex justify-between items-baseline gap-2.5">
              <div>
                <div className="font-display text-xl text-ink leading-[1.1]">
                  {p.name}
                </div>
                <div className="text-[10px] tracking-[0.12em] uppercase text-muted-taupe mt-[5px]">
                  {p.material}
                </div>
              </div>
            </div>
            <div className="text-sm text-ink whitespace-nowrap font-normal mt-1.5">
              {p.price}
            </div>
            <div className="inline-flex items-center gap-2 mt-3 text-ink text-[11px] tracking-[0.16em] uppercase border-b border-gold pb-[5px]">
              <span className="w-[7px] h-[7px] bg-gold inline-block" /> Commander
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
