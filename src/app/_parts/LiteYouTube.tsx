"use client";

import { useState } from "react";

/* ============================================
   軽い YouTube 埋め込み
   押すまでは画像だけ。押したら youtube-nocookie.com の枠を読み込む。
   自動再生なし・音なし（ユーザーが再生ボタンを押して初めて鳴る）。
   ============================================ */
export default function LiteYouTube({
  videoId,
  title,
  className = "",
}: {
  videoId: string;
  title: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-black ${className}`}
    >
      {open ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`動画を再生：${title}`}
          className="group absolute inset-0 flex h-full w-full items-center justify-center"
        >
          {/* 外のサムネイルなので next/image ではなく普通の img を使う */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-[1.03]"
          />
          <span className="relative flex h-16 w-24 items-center justify-center rounded-2xl bg-shu text-3xl text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition group-hover:bg-shu-deep">
            ▶
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-10 text-left font-sans-jp text-sm font-bold text-white sm:text-base">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}
