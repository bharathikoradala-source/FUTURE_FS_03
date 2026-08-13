import { createFileRoute } from "@tanstack/react-router";
import { BoutiquePage } from "../components/BoutiquePage";
import heroImg from '../assets/images/hero/hero.png';

export const Route = createFileRoute("/")({
  component: BoutiquePage,
  head: () => ({
    meta: [
      { title: "ÉLANÉ | Women's Fashion" },
      { name: "description", content: "A house of quiet luxury: curated women's fashion, bridal couture, and personal styling." },
      { property: "og:title", content: "ÉLANÉ | Women's Fashion" },
      { property: "og:description", content: "A house of quiet luxury: curated women's fashion, bridal couture, and personal styling." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});
