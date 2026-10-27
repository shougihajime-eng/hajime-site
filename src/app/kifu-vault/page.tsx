import type { Metadata } from "next";
import AppIntro from "../_parts/AppIntro";
import { kv } from "./_parts/copy";

export const metadata: Metadata = {
  title: "Kifu Vault｜はじめ先生が作った、棋譜をためて・さがして・復習するアプリ",
  description:
    "将棋の棋譜を、ためて・さがして・復習する。駒をならべると、その形が出てくる自分の対局が見つかる。教わった一手は次の一手クイズになって、忘れたころに出題。将棋講師のはじめ先生（全日本アマ名人）が作りました。買い切り1,000円・広告なし・完全オフライン。",
  alternates: { canonical: "/kifu-vault" },
  openGraph: {
    title: "Kifu Vault｜棋譜を、ためて。さがして、復習する。",
    description:
      "将棋講師のはじめ先生が作った棋譜アプリ。局面検索と次の一手クイズで、ためた棋譜が力になる。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function KifuVaultPage() {
  return <AppIntro copy={kv} released themeClass="kv-theme" />;
}
