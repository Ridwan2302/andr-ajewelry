import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <section id="contact" className="bg-cream-alt py-20 px-6">
      <div className="max-w-[640px] mx-auto text-center">
        <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
          Restons en contact
        </div>
        <h2 className="font-display text-[clamp(30px,7vw,54px)] font-medium text-ink leading-[1.05]">
          Rejoignez le cercle Andréa
        </h2>
        <p className="text-[15px] font-light text-muted-taupe-2 my-[18px] leading-[1.7]">
          Recevez nos nouveautés en avant-première et une invitation à nos
          ventes privées.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex gap-2.5 max-w-[480px] mx-auto flex-wrap"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Votre adresse e-mail"
            className="flex-1 min-w-[200px] bg-cream border border-ink/20 py-[15px] px-[18px] text-sm text-ink outline-none"
          />
          <button
            type="submit"
            className="bg-ink text-cream border-none py-[15px] px-7 text-[11px] tracking-[0.16em] uppercase cursor-pointer"
          >
            S'inscrire
          </button>
        </form>
        {status === "success" && (
          <p className="mt-4 text-sm text-ink">
            Merci ! Vous êtes bien inscrite au cercle Andréa.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-ink">
            Merci d'indiquer une adresse e-mail valide.
          </p>
        )}
      </div>
    </section>
  );
}
