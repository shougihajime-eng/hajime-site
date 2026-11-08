import type { MetadataRoute } from "next";

// グーグル・ヤフーに「このページがあります」と知らせる一覧（2026-11-09）
const BASE = "https://hajime-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/hajimete-shogi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/hajimete-shogi/en`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/kifu-vault`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
