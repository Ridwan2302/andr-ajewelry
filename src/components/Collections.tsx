import { collections } from "../data/collections";

export default function Collections() {
  return (
    <section id="collections" className="max-w-[1280px] mx-auto px-5 pt-[84px] pb-10">
      <div className="text-center mb-12">
        <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3.5">
          Explorer
        </div>
        <h2 className="font-display text-[clamp(36px,9vw,62px)] font-medium text-ink leading-[1.05]">
          Nos collections
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3.5">
        {collections.map((c) => (
          <a
            key={c.name}
            href="#produits"
            className="no-underline block relative aspect-[3/4] overflow-hidden bg-tile group"
          >
            <img
              src={c.img}
              alt={c.name}
              className="w-full h-full object-cover block transition-transform duration-400 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/62 from-0% to-transparent to-55%" />
            <div className="absolute bottom-0 left-0 p-5">
              <div className="font-display text-2xl text-off-white leading-none">
                {c.name}
              </div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-warm-light-2 mt-[7px]">
                {c.count}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
