import type { MetadataRoute } from "next";

// 検索にのせてよい・一覧表の場所（2026-11-09）
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://hajime-site.vercel.app/sitemap.xml",
  };
}
