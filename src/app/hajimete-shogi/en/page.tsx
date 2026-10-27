import type { Metadata } from "next";
import AppIntro from "../../_parts/AppIntro";
import { HAJIMETE_RELEASED } from "../../_parts/release";
import { en } from "../_parts/copy";

export const metadata: Metadata = {
  title: "Hajime's First Shogi | Learn shogi rules from zero",
  description:
    "Shogi from zero, made easy. Learn the rules of Japanese chess and actually play a game. Made by Hajime-sensei, a shogi school teacher and All-Japan Amateur Meijin. One-time purchase, no ads, works offline. iPhone, iPad and Android.",
  alternates: {
    canonical: "/hajimete-shogi/en",
    languages: { ja: "/hajimete-shogi", en: "/hajimete-shogi/en" },
  },
  openGraph: {
    title: "Hajime's First Shogi | Shogi from zero, made easy.",
    description:
      "Learn the rules of shogi and actually play a game. Made by Hajime-sensei, a shogi school teacher.",
    type: "website",
    locale: "en_US",
  },
};

export default function HajimeteShogiEnPage() {
  return <AppIntro copy={en} released={HAJIMETE_RELEASED} />;
}
