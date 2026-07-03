import { values } from "../data/values";
import { useInView } from "../hooks/useInView";

export default function Engagements() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      id="engagements"
      ref={ref}
      className="max-w-[1280px] mx-auto px-6 py-[84px]"
    >
      <div className={`reveal text-center mb-14 ${inView ? "is-visible" : ""}`}>
        <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3.5">
          Nos engagements
        </div>
        <h2 className="font-display text-[clamp(36px,9vw,62px)] font-medium text-ink leading-[1.05]">
          Pourquoi choisir nos bijoux
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-11">
        {values.map((v, i) => (
          <div
            key={v.num}
            className={`reveal text-center ${inView ? "is-visible" : ""}`}
            style={{ transitionDelay: inView ? `${i * 120}ms` : "0ms" }}
          >
            <div className="font-display text-[38px] text-gold mb-4">{v.num}</div>
            <h3 className="font-display text-2xl text-ink mb-3 font-medium">
              {v.title}
            </h3>
            <p className="text-sm font-light leading-[1.8] text-muted-taupe-2">
              {v.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
