import type { Metadata } from "next";
import AppIntro from "../../_parts/AppIntro";
import { HAJIMETE_RELEASED } from "../../_parts/release";
import { en } from "../_parts/copy";

export const metadata: Metadata = {
  title: "Learn Shogi for Beginners – Hajime's First Shogi (Japanese Chess App)",
  description:
    "The easiest way to learn shogi (Japanese chess) from zero: 12 hands-on lessons, 25 mate-in-1 puzzles, then your first real game. Made by Hajime Suzuki, Japan's amateur shogi champion (Amateur Meijin 2018) and shogi teacher. One-time purchase, no ads, works offline. iPhone, iPad and Android.",
  alternates: {
    canonical: "/hajimete-shogi/en",
    languages: { ja: "/hajimete-shogi", en: "/hajimete-shogi/en", "x-default": "/hajimete-shogi/en" },
  },
  openGraph: {
    title: "Hajime's First Shogi | Shogi from zero, made easy.",
    description:
      "Learn the rules of shogi (Japanese chess) and actually play a game. Made by Hajime Suzuki, Japan's amateur shogi champion and shogi teacher.",
    type: "website",
    locale: "en_US",
  },
};

export default function HajimeteShogiEnPage() {
  return <AppIntro copy={en} released={HAJIMETE_RELEASED} />;
}
