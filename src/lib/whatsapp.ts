const WHATSAPP_NUMBER = "2250500032314";

export function productWhatsappLink(name: string, price: string): string {
  const pageUrl = `${window.location.origin}${window.location.pathname}#produits`;
  const message =
    `Bonjour Andréa Jewelry, je souhaite commander la pièce « ${name} » (${price}). ` +
    `Merci de me confirmer la disponibilité et les modalités de livraison à Abidjan. ` +
    `Lien du produit : ${pageUrl}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
