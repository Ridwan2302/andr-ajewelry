# Andréa Jewelry

Storefront for **Andréa Jewelry**, a jewelry retailer in Abidjan, Côte
d'Ivoire, selling stainless steel and gold-plated jewelry (not a
manufacturer). A single, static, mobile-first marketing page: brand hero,
browsable collections, a featured-products grid, an about section, brand
value props, a durability-focused banner, a testimonial, and a
newsletter/contact block. There is no cart or checkout — each product
deep-links to WhatsApp with a pre-filled order message.

Language: French. Currency: FCFA.

## Stack

Vite + React + TypeScript + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run lint      # oxlint
```

## Structure

- `src/components/` — one component per page section (`Header`, `Hero`,
  `Collections`, `Products`, `About`, `Engagements`, `FeatureBanner`,
  `Testimonial`, `Newsletter`, `Footer`, plus the `MobileMenu` overlay).
- `src/data/` — static content: `collections.ts`, `products.ts`, `values.ts`.
- `src/lib/whatsapp.ts` — builds the WhatsApp Click-to-Chat link for a
  product order.
- `src/index.css` — Tailwind entry point and design tokens (`@theme`) for
  the brand's colors and fonts (Cormorant Garamond + Jost).

## Images

Product/collection imagery currently points at Unsplash placeholder URLs
(see `src/data/*.ts`). Swap these for the client's real photography — same
slots, aspect ratios, and `object-fit: cover` behavior.
