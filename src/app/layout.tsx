import type { Metadata } from "next";
import {
  Kaisei_Decol,
  Zen_Maru_Gothic,
  Shippori_Mincho_B1,
} from "next/font/google";
import "./globals.css";

const kaiseiDecol = Kaisei_Decol({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const shipporiMincho = Shippori_Mincho_B1({
  variable: "--font-koma",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hajime-site.vercel.app"),
  twitter: { card: "summary_large_image" },
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
      className={`${kaiseiDecol.variable} ${zenMaruGothic.variable} ${shipporiMincho.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-yoru text-kinari font-sans-jp">
        {children}
      </body>
    </html>
  );
}
