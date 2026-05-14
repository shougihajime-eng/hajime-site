import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "鈴木肇｜将棋講師・全日本アマ名人・全国アマ王将",
  description:
    "鈴木肇（すずき はじめ）の公式ホームページ。元奨励会三段、第72回全日本アマチュア名人・第32期全国アマチュア王将位。横浜・東京で将棋教室を運営し、YouTube・書籍監修などでも活動中。",
  openGraph: {
    title: "鈴木肇｜将棋講師・全日本アマ名人・全国アマ王将",
    description:
      "横浜・東京で将棋教室を運営する将棋講師、鈴木肇の公式ホームページ。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-yoru text-kinari font-sans-jp">
        {children}
      </body>
    </html>
  );
}
