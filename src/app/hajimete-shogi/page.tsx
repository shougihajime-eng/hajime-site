import type { Metadata } from "next";
import AppIntro from "../_parts/AppIntro";
import { HAJIMETE_RELEASED } from "../_parts/release";
import { ja } from "./_parts/copy";

export const metadata: Metadata = {
  title: "はじめての将棋｜はじめ先生が作った、ルールの入門アプリ",
  description:
    "将棋を、ゼロからやさしく。ルールがわかって、実際に将棋を指せるようになる入門アプリ。将棋教室のはじめ先生（全日本アマ名人）が、教える順番にこだわって作りました。買い切り1,000円・広告なし・iPhone・iPad・Android。",
  alternates: {
    canonical: "/hajimete-shogi",
    languages: { ja: "/hajimete-shogi", en: "/hajimete-shogi/en", "x-default": "/hajimete-shogi/en" },
  },
  openGraph: {
    title: "はじめての将棋｜将棋を、ゼロからやさしく。",
    description:
      "ルールがわかって、実際に将棋を指せるようになる。将棋教室のはじめ先生が作った入門アプリ。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function HajimeteShogiPage() {
  return <AppIntro copy={ja} released={HAJIMETE_RELEASED} />;
}
