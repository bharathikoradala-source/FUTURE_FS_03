import { createFileRoute } from "@tanstack/react-router";
import { BoutiquePage } from "@/components/BoutiquePage";

export const Route = createFileRoute("/")({
  component: BoutiquePage,
  head: () => ({
    meta: [
      { title: "Elegance Boutique — Premium Women's Fashion & Bridal Couture" },
      { name: "description", content: "Discover curated ethnic, casual, party, western, and bridal collections at Elegance Boutique. Personalized styling, premium quality, and timeless design." },
      { property: "og:title", content: "Elegance Boutique — Style That Defines You" },
      { property: "og:description", content: "A house of quiet luxury: curated women's fashion, bridal couture, and personal styling." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});
