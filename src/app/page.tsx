import Image from "next/image";
import Link from "next/link";
import LiteYouTube from "./_parts/LiteYouTube";
import { HAJIMETE_RELEASED } from "./_parts/release";
import { AS_OF_JA, NUMBERS } from "./_parts/numbers";

/* ============================================
   将棋駒（金色グラデ）
   ============================================ */
function Koma({
  label,
  className = "",
  variant = "gold",
}: {
  label: string;
  className?: string;
  variant?: "gold" | "dark" | "shu";
}) {
  const gradId = `kg-${label}-${variant}`;
  const fill =
    variant === "shu"
      ? "url(#" + gradId + ")"
      : variant === "dark"
        ? "url(#" + gradId + ")"
        : "url(#" + gradId + ")";
  const stroke =
    variant === "shu" ? "#c7492b" : variant === "dark" ? "#2f3f66" : "#9c6e2e";
  const textFill =
    variant === "shu" ? "#fff7ec" : variant === "dark" ? "#f6e8c6" : "#463527";
  return (
    <svg
      viewBox="0 0 100 110"
      className={className}
      role="img"
      aria-label={`将棋の駒「${label}」`}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          {variant === "shu" ? (
            <>
              <stop offset="0%" stopColor="#f07b58" />
              <stop offset="100%" stopColor="#c7492b" />
            </>
          ) : variant === "dark" ? (
            <>
              <stop offset="0%" stopColor="#6383bc" />
              <stop offset="100%" stopColor="#3d5a96" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#fff7e0" />
              <stop offset="55%" stopColor="#f6e8c6" />
              <stop offset="100%" stopColor="#e2b377" />
            </>
          )}
        </linearGradient>
      </defs>
      <path
        d="M50 5 L78 22 L88 100 L12 100 L22 22 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text
        x="50"
        y="74"
        textAnchor="middle"
        fontSize="56"
        fontWeight="800"
        fill={textFill}
        style={{ fontFamily: "var(--font-koma)" }}
      >
        {label}
      </text>
    </svg>
  );
}

/* ============================================
   背景で舞う駒たち
   ============================================ */
function FloatingKomaBg() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="koma-float-1 absolute left-[5%] top-[8%] w-16 opacity-[0.08] sm:w-24">
        <Koma label="飛" variant="gold" />
      </div>
      <div className="koma-float-2 absolute right-[8%] top-[14%] w-14 opacity-[0.07] sm:w-20">
        <Koma label="角" variant="gold" />
      </div>
      <div className="koma-float-3 absolute left-[12%] bottom-[18%] w-12 opacity-[0.06] sm:w-16">
        <Koma label="桂" variant="gold" />
      </div>
      <div className="koma-float-4 absolute right-[14%] bottom-[10%] w-14 opacity-[0.07] sm:w-20">
        <Koma label="銀" variant="gold" />
      </div>
      <div className="koma-float-2 absolute left-[40%] top-[40%] hidden w-10 opacity-[0.05] sm:block">
        <Koma label="歩" variant="gold" />
      </div>
      <div className="koma-float-1 absolute right-[35%] bottom-[35%] hidden w-12 opacity-[0.05] sm:block">
        <Koma label="香" variant="gold" />
      </div>
    </div>
  );
}

/* ============================================
   セクション見出し
   ============================================ */
function SectionTitle({ ja, en }: { ja: string; en: string }) {
  return (
    <div className="reveal mb-14 flex flex-col items-center text-center">
      <span className="text-[10px] tracking-[0.5em] text-kin/70 uppercase">
        {en}
      </span>
      <h2 className="mt-3 font-serif-jp text-4xl font-black tracking-wider sm:text-5xl">
        <span className="text-kin-grad">{ja}</span>
      </h2>
      <span className="mt-5 inline-flex items-center gap-2">
        <span className="h-px w-10 bg-kin/40" />
        <span className="h-2 w-2 rounded-full bg-shu shadow-[0_2px_6px_rgba(199,73,43,0.4)]" />
        <span className="h-px w-10 bg-kin/40" />
      </span>
    </div>
  );
}

/* ============================================
   データ
   ============================================ */
const achievements = [
  {
    year: "2018",
    title: "第72回 全日本アマチュア名人戦",
    result: "優勝",
    note: "アマ名人位獲得",
    highlight: true,
  },
  {
    year: "2015",
    title: "第32期 全国アマチュア王将位大会",
    result: "優勝",
    note: "アマ王将位獲得",
    highlight: true,
  },
  {
    year: "2022",
    title: "第35回 アマチュア竜王戦 全国大会",
    result: "ベスト4",
    note: "竜王戦6組出場権獲得",
    highlight: false,
  },
  {
    year: "2016",
    title: "第70回 全日本アマチュア名人戦",
    result: "ベスト4",
    note: "",
    highlight: false,
  },
  {
    year: "2023",
    title: "加古川青流戦（プロ公式戦）",
    result: "アマチュア代表 3回",
    note: "第5期・第8期・第13期に出場／2023年 アマチュア選抜大会 優勝",
    highlight: false,
  },
  {
    year: "—",
    title: "磯子区栄誉賞",
    result: "受賞",
    note: "アマ名人優勝の功績により",
    highlight: false,
  },
];

/* 教室のアカウント（X・YouTube）は教室のもの＝はじめ先生本人のアカウントではない。
   住所は 2026-10-27 に各教室の公式サイトから拾った物（全部 200 で開ける）。 */
const services = [
  {
    koma: "歩",
    name: "はじめ将棋教室",
    place: "横浜市南区 吉野町",
    desc: "Y.Y.World 囲碁・将棋（吉野町駅徒歩1分）の2階で開催。子ども部・大人部、毎週木曜日（不定期）。",
    href: "https://hajime-shogi.vercel.app",
    links: [
      { label: "教室サイトへ", href: "https://hajime-shogi.vercel.app" },
    ],
  },
  {
    koma: "桂",
    name: "青葉はじめ将棋教室",
    place: "横浜市青葉区",
    desc: "横浜市青葉区にて開催している将棋教室。詳細は公式サイトをご覧ください。",
    href: "http://www.aobashogiclub.net/",
    links: [
      { label: "教室サイトへ", href: "http://www.aobashogiclub.net/" },
      { label: "青葉将棋クラブのX", href: "https://x.com/aobashogiclub" },
      {
        label: "青葉将棋クラブのYouTube",
        href: "https://www.youtube.com/channel/UCAwDrM75UAddwluabae4A6g",
      },
    ],
  },
  {
    koma: "銀",
    name: "両国将棋塾",
    place: "東京都墨田区 両国",
    desc: "プロ棋士・及川拓馬七段との共同講師。両国将棋囲碁センター内。本格派の門下も歓迎。",
    href: "https://ryogokushogiigo.ikidane.com/",
    links: [
      { label: "公式サイトへ", href: "https://ryogokushogiigo.ikidane.com/" },
      { label: "両国将棋囲碁センターのX", href: "https://x.com/RShougi" },
    ],
  },
];

/* 売り場の住所は 2026-10-27 に curl で 200 とページの題名を確かめた物だけ
   （マイナビ出版の公式ページを優先。漫画は Amazon.co.jp）。 */
const books = [
  {
    title: "振り飛車を一刀両断！右四間飛車エルモ囲い",
    year: "2020",
    role: "著",
    href: "https://book.mynavi.jp/ec/products/detail/id=115562",
  },
  {
    title: "進化を続ける！右四間飛車エルモ囲い",
    year: "2022",
    role: "著",
    href: "https://book.mynavi.jp/shogi/products/detail/id=129045",
  },
  {
    title: "反撃する現代四間飛車〜はじめ先生と学ぶ新研究〜",
    year: "2024",
    role: "著",
    href: "https://book.mynavi.jp/shogi/products/detail/id=141902",
  },
  {
    title: "振り飛車Tips 少しの工夫で勝ちにつながる105の裏ワザ",
    year: "2026",
    role: "著",
    href: "https://book.mynavi.jp/shogi/products/detail/id=149301",
  },
  {
    title: "リボーンの棋士（漫画）",
    year: "2018〜",
    role: "監修",
    href: "https://www.amazon.co.jp/dp/4098600935",
  },
];

/* ============================================
   ページ本体
   ============================================ */
export default function Home() {
  return (
    <main className="bg-ban flex flex-col">
      {/* ===================================================
          HERO
          =================================================== */}
      <section className="relative overflow-hidden">
        <FloatingKomaBg />

        {/* 上部の金グラデ光 */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kin to-transparent"
        />

        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          {/* ローマ字 */}
          <p className="mb-2 text-[10px] tracking-[0.6em] text-kin/70 uppercase sm:text-xs">
            ✦  Suzuki Hajime  ✦
          </p>
          <p className="mb-10 font-serif-jp text-xs tracking-[0.3em] text-kinari/50">
            Professional Shogi Instructor
          </p>

          {/* 顔写真 */}
          <div className="hover-bob relative mb-10 h-52 w-52 sm:h-64 sm:w-64">
            <div className="pulse-kin absolute inset-0 rounded-full" />
            <div className="absolute inset-0 overflow-hidden rounded-full ring-2 ring-kin/80">
              <Image
                src="/hajime-portrait.png"
                alt="鈴木 肇"
                fill
                preload
                sizes="(min-width: 640px) 16rem, 13rem"
                className="object-cover object-top"
              />
            </div>
            {/* 王の駒（右下） */}
            <div className="koma-float-1 absolute -bottom-3 -right-3 w-16 drop-shadow-[0_6px_14px_rgba(150,90,40,0.35)] sm:w-20">
              <Koma label="王" variant="gold" />
            </div>
            {/* 朱の駒（左上） */}
            <div className="koma-float-2 absolute -left-4 -top-2 w-12 drop-shadow-[0_6px_14px_rgba(199,73,43,0.4)] sm:w-14">
              <Koma label="名" variant="shu" />
            </div>
          </div>

          {/* 名前＋朱の落款（signature） */}
          <h1 className="relative font-serif-jp text-7xl font-bold tracking-[0.15em] text-kinari sm:text-8xl md:text-9xl">
            鈴木 肇
            <span
              aria-hidden
              className="rakkan absolute -right-9 top-1 h-9 w-9 text-lg sm:-right-14 sm:top-2 sm:h-12 sm:w-12 sm:text-2xl"
            >
              肇
            </span>
          </h1>

          {/* 肩書き */}
          <div className="mt-8 flex flex-col items-center gap-2 font-serif-jp text-sm text-kinari/80 sm:text-base">
            <p className="tracking-widest">将棋講師 ／ 元奨励会三段</p>
            <p className="flex items-center gap-3 text-kin">
              <span className="text-xs">◆</span>
              <span>全日本アマ名人 ・ 全国アマ王将</span>
              <span className="text-xs">◆</span>
            </p>
          </div>

          {/* キャッチコピー */}
          <div className="mt-14 text-center">
            <p className="font-serif-jp text-3xl font-bold leading-relaxed tracking-wider text-kinari sm:text-4xl md:text-5xl">
              <span className="brush-underline">将棋って、</span>
              <br />
              <span className="text-kin-grad">楽しい。</span>
            </p>
            <p className="mt-6 text-xs tracking-[0.3em] text-kinari/50 sm:text-sm">
              ── その一言を、もっと多くの人へ。
            </p>
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              className="group relative overflow-hidden rounded-full border border-shu-deep/60 bg-shu px-9 py-4 font-sans-jp text-sm font-bold tracking-widest text-[#fff7ec] shadow-[0_10px_28px_rgba(199,73,43,0.35)] transition hover:bg-shu-deep"
            >
              <span className="relative z-10">道場へ進む ▶</span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCC0Q1NBgGJRzFFPe1IPYtwg"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full border-2 border-kin/40 bg-card px-9 py-4 font-sans-jp text-sm font-bold tracking-widest text-kin shadow-[var(--sh)] transition hover:border-kin hover:bg-kin/10"
            >
              動画を見る ▶
            </a>
            <a
              href="#apps"
              className="group rounded-full border-2 border-kin/40 bg-card px-9 py-4 font-sans-jp text-sm font-bold tracking-widest text-kin shadow-[var(--sh)] transition hover:border-kin hover:bg-kin/10"
            >
              アプリを見る ▶
            </a>
          </div>

          {/* スクロール案内 */}
          <div className="mt-20 flex flex-col items-center gap-2 text-kin/40">
            <span className="text-[10px] tracking-[0.4em]">SCROLL</span>
            <span className="h-8 w-px bg-gradient-to-b from-kin/60 to-transparent" />
          </div>
        </div>

        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-kin/60 to-transparent"
        />
      </section>

      {/* ===================================================
          近日発売の帯（はじめての将棋）＝発売したら release.ts を true に
          =================================================== */}
      <section
        id="coming-soon"
        className="relative overflow-hidden bg-[#121d39] py-8 text-white sm:py-10"
      >
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
          <div className="flex items-start gap-4 sm:items-center">
            <div className="koma-hop w-10 shrink-0 sm:w-12" aria-hidden>
              <Koma label="歩" variant="gold" />
            </div>
            <Image
              src="/hajimete-shogi/icon.png"
              alt=""
              width={72}
              height={72}
              className="spin-on-hover h-16 w-16 shrink-0 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.35)] sm:h-[72px] sm:w-[72px]"
            />
            <div>
              <span className="inline-block rounded-full bg-[#ed6749] px-3 py-1 font-sans-jp text-sm font-black tracking-wider text-white">
                {HAJIMETE_RELEASED ? "発売中" : "近日発売"}
              </span>
              <p className="mt-2 font-serif-jp text-2xl font-black tracking-wide sm:text-3xl">
                はじめての将棋
              </p>
              <p className="mt-1 font-sans-jp text-sm leading-relaxed text-white/85 sm:text-base">
                将棋を、ゼロからやさしく。ルールがわかって、実際に指せるようになる入門アプリ。
                <br className="hidden sm:block" />
                買い切り1,000円・広告なし・iPhone・iPad・Android。
              </p>
            </div>
          </div>
          <Link
            href="/hajimete-shogi"
            className="flex min-h-14 w-full items-center justify-center rounded-full bg-[#ed6749] px-8 font-sans-jp text-base font-black tracking-widest text-white shadow-[0_10px_28px_rgba(237,103,73,0.45)] transition hover:bg-[#d4502f] md:w-auto"
          >
            紹介ページを見る ▶
          </Link>
        </div>
      </section>

      {/* ===================================================
          ABOUT
          =================================================== */}
      <section id="about" className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-3xl px-6">
          <SectionTitle ja="自己紹介" en="About" />

          <div className="reveal space-y-6 font-sans-jp text-base leading-loose text-kinari/85 sm:text-lg">
            <p>
              <span className="font-serif-jp text-xl text-kin">1987年</span>
              、神奈川県横浜市生まれ。元・日本将棋連盟 奨励会三段。
            </p>
            <p>
              <span className="font-serif-jp text-xl text-kin">2015年</span>
              に第32期「全国アマチュア王将位大会」、
              <span className="font-serif-jp text-xl text-kin">2018年</span>
              に第72回「全日本アマチュア名人戦」で優勝し、アマチュア将棋界の二大タイトルを獲得。
            </p>
            <p>
              現在は将棋講師として、横浜（南区吉野町・青葉区）と東京（両国）で将棋教室を運営。子どもから大人まで、初心者から上級者まで、それぞれの目標に合わせた指導を行っています。
            </p>
            <p>
              中村太地八段と はじめ先生で作ったYouTubeチャンネル
              <span className="text-kin">「棋士中村太地将棋はじめch」</span>
              での動画発信や、書籍の執筆・監修、漫画
              <span className="text-kin">『リボーンの棋士』</span>
              の監修など、将棋の楽しさを広く伝える活動にも取り組んでいます。
            </p>

            {/* 数字（2026-10-27 時点・numbers.ts） */}
            <div className="reveal mt-10 grid gap-3 sm:grid-cols-3 sm:text-center">
              {[
                {
                  href: NUMBERS.taichiCh.url,
                  num: NUMBERS.taichiCh.subsJa,
                  l1: "YouTube 登録者",
                  l2: "中村太地八段と作ったch",
                },
                {
                  href: NUMBERS.labCh.url,
                  num: NUMBERS.labCh.subsJa,
                  l1: "YouTube 登録者",
                  l2: "はじめ先生の将棋研究所",
                },
                {
                  href: NUMBERS.x.url,
                  num: NUMBERS.x.followersJa,
                  l1: "X フォロワー",
                  l2: "@hajjme99",
                },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-rule-soft bg-card px-5 py-4 shadow-[var(--sh)] transition hover:border-kin/50 sm:flex-col sm:gap-1 sm:px-2"
                >
                  <p className="font-serif-jp text-3xl font-black whitespace-nowrap text-kin-grad sm:text-4xl">
                    {s.num}
                  </p>
                  <p className="text-xs leading-snug text-kinari/70">
                    {s.l1}
                    <br />
                    {s.l2}
                  </p>
                </a>
              ))}
            </div>
            <p className="mt-2 text-center text-[10px] tracking-wider text-kinari/50">
              数字はいずれも {AS_OF_JA}
            </p>

            {/* 信条ブロック */}
            <div className="reveal mt-12 rounded-3xl border border-rule-soft bg-card p-8 shadow-[var(--sh)] sm:p-10">
              <p className="font-serif-jp text-lg leading-loose tracking-wider sm:text-xl">
                <span className="text-kin-grad">自分が世界一、</span>
                <br />
                <span className="text-kin-grad">将棋を楽しむこと。</span>
                <br />
                <br />
                そして、その楽しさを
                <br />
                一人でも多くの方に届けること。
                <br />
                <span className="mt-2 inline-block text-sm tracking-widest text-kinari/60">
                  ── それが、私の願いです。
                </span>
              </p>

              {/* モットー */}
              <div className="mt-8 border-t border-rule-soft pt-6">
                <p className="text-[10px] tracking-[0.4em] text-kin/70">
                  大事にしていること
                </p>
                <p className="mt-3 font-serif-jp text-2xl font-black tracking-wider sm:text-3xl">
                  <span className="text-kin-grad">挑戦</span>
                  <span className="mx-2 text-shu">・</span>
                  <span className="text-kin-grad">楽しむこと</span>
                  <span className="mx-2 text-shu">・</span>
                  <span className="text-kin-grad">遊び心</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-kinari/70">
                  アマチュア代表としてプロの公式戦（加古川青流戦・竜王戦・棋王戦・叡王戦）に挑み、
                  将棋の先生としてアプリ作りにも挑戦しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          APPS（はじめての将棋・Kifu Vault）
          =================================================== */}
      <section
        id="apps"
        className="relative border-y border-rule-soft bg-yoru-deep/70 py-24 sm:py-32"
      >
        <div className="mx-auto w-full max-w-5xl px-6">
          <SectionTitle ja="アプリ" en="Apps" />

          <div className="reveal grid gap-6 md:grid-cols-2">
            {/* はじめての将棋 */}
            <article className="flex flex-col rounded-3xl border border-rule-soft bg-card p-7 shadow-[var(--sh)] transition hover:-translate-y-1 hover:border-kin/50 hover:shadow-[var(--sh-l)]">
              <div className="flex items-center gap-4">
                <Image
                  src="/hajimete-shogi/icon.png"
                  alt=""
                  width={72}
                  height={72}
                  className="spin-on-hover h-16 w-16 shrink-0 rounded-2xl shadow-[0_8px_20px_rgba(18,29,57,0.22)] sm:h-[72px] sm:w-[72px]"
                />
                <div>
                  <span className="inline-block rounded-full bg-[#ed6749] px-3 py-0.5 font-sans-jp text-xs font-black tracking-wider text-white">
                    {HAJIMETE_RELEASED ? "発売中" : "近日発売"}
                  </span>
                  <h3 className="mt-1 font-serif-jp text-2xl font-bold text-kinari sm:text-3xl">
                    はじめての将棋
                  </h3>
                </div>
              </div>
              <p className="mt-5 font-sans-jp text-base leading-relaxed text-kinari/85 sm:text-lg">
                将棋を、ゼロからやさしく。ルールがわかって、実際に将棋を指せるようになる入門アプリ。
                はじめて将棋にふれる方と、家族やお子さんに教えたい方へ。
              </p>
              <p className="mt-3 text-sm leading-relaxed text-kinari/65">
                買い切り1,000円・広告なし・iPhone・iPad・Android・こどもモード・英語の表示
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                <Link
                  href="/hajimete-shogi"
                  className="flex min-h-12 items-center rounded-full bg-shu px-7 font-sans-jp text-sm font-bold tracking-widest text-[#fff7ec] shadow-[0_10px_28px_rgba(199,73,43,0.35)] transition hover:bg-shu-deep"
                >
                  紹介ページを見る ▶
                </Link>
                <Link
                  href="/hajimete-shogi/en"
                  hrefLang="en"
                  className="flex min-h-12 items-center rounded-full border-2 border-kin/40 bg-card px-5 font-sans-jp text-sm font-bold text-kin transition hover:border-kin hover:bg-kin/10"
                >
                  English
                </Link>
              </div>
            </article>

            {/* Kifu Vault */}
            <article className="flex flex-col rounded-3xl border border-rule-soft bg-card p-7 shadow-[var(--sh)] transition hover:-translate-y-1 hover:border-kin/50 hover:shadow-[var(--sh-l)]">
              <div className="flex items-center gap-4">
                <Image
                  src="/kifuvault-icon.png"
                  alt=""
                  width={72}
                  height={72}
                  className="spin-on-hover h-16 w-16 shrink-0 rounded-2xl shadow-[0_8px_20px_rgba(27,42,30,0.25)] sm:h-[72px] sm:w-[72px]"
                />
                <div>
                  <span className="inline-block rounded-full bg-[#1b2a1e] px-3 py-0.5 font-sans-jp text-xs font-black tracking-wider text-[#f1e6c8]">
                    発売中
                  </span>
                  <h3 className="mt-1 font-serif-jp text-2xl font-bold text-kinari sm:text-3xl">
                    Kifu Vault
                  </h3>
                </div>
              </div>
              <p className="mt-5 font-sans-jp text-base leading-relaxed text-kinari/85 sm:text-lg">
                棋譜を、ためて。さがして、復習する。駒をならべると同じ形の自分の対局が見つかり、
                教わった一手は次の一手クイズになって戻ってくる、将棋講師が作った棋譜アプリ。
              </p>
              <p className="mt-3 text-sm leading-relaxed text-kinari/65">
                買い切り1,000円・広告なし・完全オフライン・iPhone・iPad・Android
              </p>
              <p className="mt-2 text-xs font-bold tracking-wider text-kin">
                {NUMBERS.kifuVaultRating.ja}
              </p>
              <LiteYouTube
                videoId="CKXDryj4OyU"
                title="Kifu Vault、Android版が出ました。"
                className="mt-5"
              />
              <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                <Link
                  href="/kifu-vault"
                  className="flex min-h-12 items-center rounded-full bg-shu px-7 font-sans-jp text-sm font-bold tracking-widest text-[#fff7ec] shadow-[0_10px_28px_rgba(199,73,43,0.35)] transition hover:bg-shu-deep"
                >
                  紹介ページを見る ▶
                </Link>
                <a
                  href="https://apps.apple.com/jp/app/id6795305452"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center rounded-full border-2 border-kin/40 bg-card px-5 font-sans-jp text-sm font-bold text-kin transition hover:border-kin hover:bg-kin/10"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=jp.hajimeshogi.kifuvault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center rounded-full border-2 border-kin/40 bg-card px-5 font-sans-jp text-sm font-bold text-kin transition hover:border-kin hover:bg-kin/10"
                >
                  Google Play
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================
          ACHIEVEMENTS
          =================================================== */}
      <section
        id="achievements"
        className="relative border-y border-rule-soft bg-yoru-deep/70 py-24 sm:py-32"
      >
        <FloatingKomaBg />
        <div className="relative mx-auto w-full max-w-4xl px-6">
          <SectionTitle ja="戦歴・受賞" en="Achievements" />

          <div className="grid gap-5 sm:grid-cols-2">
            {achievements.map((a, i) => (
              <article
                key={i}
                className={`reveal-rotate group relative flex flex-col gap-3 rounded-3xl border p-6 transition hover:-translate-y-1 ${
                  a.highlight
                    ? "border-kin-bright/50 bg-gradient-to-br from-[#fff7e0] to-[#f6e8c6] glow-kin-strong"
                    : "border-rule-soft bg-card shadow-[var(--sh)] hover:border-kin/40"
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {a.highlight && (
                  <span className="absolute -top-2 -right-2 rounded-full bg-shu px-3 py-0.5 font-sans-jp text-[10px] font-bold tracking-widest text-[#fff7ec] shadow-lg">
                    TITLE
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <span className="font-serif-jp text-3xl font-black text-kin-grad">
                    {a.year}
                  </span>
                  <span
                    className={`font-serif-jp text-sm font-bold tracking-widest ${
                      a.highlight ? "text-shu-deep" : "text-kinari/70"
                    }`}
                  >
                    {a.result}
                  </span>
                </div>
                <h3 className="font-serif-jp text-base leading-snug text-kinari sm:text-lg">
                  {a.title}
                </h3>
                {a.note && (
                  <p className="text-xs leading-relaxed text-kinari/55">
                    {a.note}
                  </p>
                )}
              </article>
            ))}
          </div>

          <p className="reveal mt-8 text-center text-xs text-kinari/40">
            ※ 出典：日本将棋連盟 公式ページ／本人確認済み
          </p>
        </div>
      </section>

      {/* ===================================================
          SERVICES（駒型カード）
          =================================================== */}
      <section id="services" className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionTitle ja="教室・サービス" en="Schools & Services" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="reveal-rotate group flex flex-col"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`${s.name}のサイトへ`}
                >
                {/* 駒型 */}
                <div className="clip-koma relative aspect-[10/11] bg-gradient-to-b from-kiji to-kiji-dark p-1 drop-shadow-[0_10px_20px_rgba(150,90,40,0.22)] transition group-hover:scale-[1.03]">
                  <div className="clip-koma flex h-full w-full flex-col items-center justify-between bg-gradient-to-b from-[#fff7e0] via-[#f6e8c6] to-[#eed6a4] px-4 py-6 text-center sm:py-8">
                    {/* 駒文字（大） */}
                    <div className="text-6xl font-extrabold leading-none text-[#463527] sm:text-7xl" style={{ fontFamily: "var(--font-koma)" }}>
                      {s.koma}
                    </div>
                    {/* 名称 */}
                    <div className="flex flex-col items-center gap-1 px-2">
                      <h3 className="font-serif-jp text-sm font-bold leading-tight text-[#463527] sm:text-base">
                        {s.name}
                      </h3>
                      <p className="text-[10px] tracking-widest text-[#463527]/70">
                        {s.place}
                      </p>
                    </div>
                  </div>
                </div>
                </a>
                {/* 駒の下に説明＋行き先のボタン */}
                <div className="mt-5 px-2 text-center">
                  <p className="text-xs leading-relaxed text-kinari/75">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {s.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center rounded-full border-2 border-kin/40 bg-card px-4 font-sans-jp text-sm font-bold text-kin transition hover:border-kin hover:bg-kin/10"
                      >
                        {l.label} →
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          MEDIA
          =================================================== */}
      <section
        id="media"
        className="relative border-y border-rule-soft bg-yoru-deep/70 py-24 sm:py-32"
      >
        <div className="mx-auto w-full max-w-5xl px-6">
          <SectionTitle ja="メディア" en="Media" />

          {/* YouTube 2つ（大きなカード） */}
          <div className="reveal grid gap-6 md:grid-cols-2">
            <a
              href={NUMBERS.taichiCh.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-rule-soft bg-gradient-to-br from-shu/10 via-card to-card p-7 shadow-[var(--sh)] transition hover:-translate-y-1 hover:border-kin/50 hover:shadow-[var(--sh-l)] sm:p-9"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-shu/15 blur-3xl"
              />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-12 items-center justify-center rounded-xl bg-shu font-bold text-[#fff7ec] shadow-[0_4px_12px_rgba(199,73,43,0.35)]">
                    ▶
                  </span>
                  <span className="text-[10px] tracking-[0.4em] text-kin/70">
                    YOUTUBE CHANNEL
                  </span>
                </div>
                <h3 className="font-serif-jp text-2xl font-bold leading-snug text-kinari sm:text-3xl">
                  棋士中村太地
                  <br />
                  将棋はじめch
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-kinari/75 sm:text-base">
                  中村太地八段と はじめ先生で作った YouTube チャンネル。楽しく、わかりやすく、本気で将棋をお届け中。
                </p>
                <p className="mt-5 font-serif-jp text-3xl font-black text-kin-grad sm:text-4xl">
                  登録者 {NUMBERS.taichiCh.subsJa}
                </p>
                <p className="text-[10px] tracking-wider text-kinari/50">{AS_OF_JA}</p>
              </div>
              <div className="relative mt-6 flex items-center justify-between">
                <span className="font-serif-jp text-lg text-kin transition group-hover:text-kin-bright">
                  チャンネルを見る →
                </span>
              </div>
            </a>

            <a
              href={NUMBERS.labCh.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-rule-soft bg-gradient-to-br from-kin/10 via-card to-card p-7 shadow-[var(--sh)] transition hover:-translate-y-1 hover:border-kin/50 hover:shadow-[var(--sh-l)] sm:p-9"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-kin/15 blur-3xl"
              />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-12 items-center justify-center rounded-xl bg-shu font-bold text-[#fff7ec] shadow-[0_4px_12px_rgba(199,73,43,0.35)]">
                    ▶
                  </span>
                  <span className="text-[10px] tracking-[0.4em] text-kin/70">
                    YOUTUBE CHANNEL
                  </span>
                </div>
                <h3 className="font-serif-jp text-2xl font-bold leading-snug text-kinari sm:text-3xl">
                  はじめ先生の
                  <br />
                  将棋研究所
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-kinari/75 sm:text-base">
                  はじめ先生のチャンネル。対局・研究・アプリの紹介を、はじめ先生の言葉で。
                </p>
                <p className="mt-5 font-serif-jp text-3xl font-black text-kin-grad sm:text-4xl">
                  登録者 {NUMBERS.labCh.subsJa}
                </p>
                <p className="text-[10px] tracking-wider text-kinari/50">{AS_OF_JA}</p>
              </div>
              <div className="relative mt-6 flex items-center justify-between">
                <span className="font-serif-jp text-lg text-kin transition group-hover:text-kin-bright">
                  チャンネルを見る →
                </span>
              </div>
            </a>
          </div>

          {/* X・Instagram */}
          <div className="reveal mt-6 grid gap-6 md:grid-cols-2">
            <a
              href={NUMBERS.x.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-3xl border border-rule-soft bg-card p-7 shadow-[var(--sh)] transition hover:-translate-y-1 hover:border-kin/50 hover:shadow-[var(--sh-l)]"
            >
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-kinari/40 bg-yoru-deep/50 font-serif-jp font-bold text-kinari">
                    𝕏
                  </span>
                  <span className="text-[10px] tracking-[0.4em] text-kin/70">
                    X (TWITTER)
                  </span>
                </div>
                <h3 className="font-serif-jp text-xl font-bold text-kinari">
                  @hajjme99
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-kinari/70">
                  日常・大会・教室情報・つぶやき。気軽にフォローを。
                </p>
                <p className="mt-4 font-serif-jp text-2xl font-black text-kin-grad sm:text-3xl">
                  フォロワー {NUMBERS.x.followersJa}
                </p>
                <p className="text-[10px] tracking-wider text-kinari/50">{AS_OF_JA}</p>
              </div>
              <span className="mt-6 font-serif-jp text-sm text-kin transition group-hover:text-kin-bright">
                フォローする →
              </span>
            </a>

            <a
              href="https://www.instagram.com/hajimesensei"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-3xl border border-rule-soft bg-card p-7 shadow-[var(--sh)] transition hover:-translate-y-1 hover:border-kin/50 hover:shadow-[var(--sh-l)]"
            >
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-kinari/40 bg-gradient-to-br from-[#f9ce34]/40 via-[#ee2a7b]/40 to-[#6228d7]/40 font-serif-jp text-sm font-bold text-kinari">
                    IG
                  </span>
                  <span className="text-[10px] tracking-[0.4em] text-kin/70">
                    INSTAGRAM
                  </span>
                </div>
                <h3 className="font-serif-jp text-xl font-bold text-kinari">
                  はじめ先生の Instagram
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-kinari/70">
                  @hajimesensei。教室や日々のひとこまを写真で。
                </p>
              </div>
              <span className="mt-6 font-serif-jp text-sm text-kin transition group-hover:text-kin-bright">
                見に行く →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================
          BOOKS（本棚風）
          =================================================== */}
      <section id="books" className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-5xl px-6">
          <SectionTitle ja="著書・監修" en="Books" />

          {/* 本棚 */}
          <div className="reveal relative">
            <div className="flex flex-wrap items-end justify-center gap-3 sm:gap-4">
              {books.map((b, i) => (
                <a
                  key={b.title}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal-rotate group flex h-64 w-12 flex-col justify-between rounded-t-md border border-shu-deep/40 bg-gradient-to-b from-shu-bright via-shu to-shu-deep px-2 py-4 shadow-[0_10px_24px_rgba(199,73,43,0.3)] transition hover:-translate-y-3 hover:from-kin-bright hover:via-[#c78a1f] hover:to-kin sm:h-72 sm:w-14"
                  style={{ animationDelay: `${i * 80}ms` }}
                  title={`${b.title}（${b.year} / ${b.role}）── 売り場へ`}
                  aria-label={`${b.title}の売り場へ`}
                >
                  <p className="tategaki-mixed mx-auto font-serif-jp text-[11px] font-bold leading-tight tracking-widest text-[#fff6ec] sm:text-xs">
                    {b.title}
                  </p>
                  <p className="text-center font-serif-jp text-[9px] text-[#fff6ec]/80 sm:text-[10px]">
                    {b.year}
                  </p>
                </a>
              ))}
            </div>
            {/* 棚板 */}
            <div className="mt-0 h-3 rounded-b-sm bg-gradient-to-b from-kiji-dark to-[#5a4020] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.6)]" />
          </div>

          {/* リスト（補足） */}
          <ul className="reveal mt-12 grid gap-3 text-sm sm:grid-cols-2">
            {books.map((b) => (
              <li
                key={"list-" + b.title}
                className="flex items-baseline gap-3 border-b border-rule-soft pb-2"
              >
                <span className="w-14 shrink-0 font-serif-jp text-kin/70">
                  {b.year}
                </span>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 font-serif-jp text-kinari/90 underline decoration-kin/40 underline-offset-4 transition hover:text-kin"
                >
                  {b.title}
                </a>
                <span className="shrink-0 text-xs text-kin/70">{b.role}</span>
              </li>
            ))}
          </ul>
          <p className="reveal mt-4 text-center text-xs text-kinari/50">
            本の題名を押すと売り場（マイナビ出版の公式ページ／漫画は Amazon.co.jp）へ飛びます。
          </p>
        </div>
      </section>

      {/* ===================================================
          CONTACT
          =================================================== */}
      <section
        id="contact"
        className="relative border-t border-rule-soft bg-yoru-deep py-24 sm:py-32"
      >
        <FloatingKomaBg />
        <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center px-6 text-center">
          <SectionTitle ja="ご連絡" en="Contact" />

          <p className="reveal mb-10 text-sm leading-loose text-kinari/80 sm:text-base">
            指導のご依頼、講演・対局・取材のご相談、
            <br />
            その他お問い合わせは下記のDMよりお気軽に。
          </p>

          <div className="reveal flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://x.com/hajjme99"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-shu-deep/60 bg-shu px-9 py-4 font-sans-jp text-sm font-bold tracking-widest text-[#fff7ec] shadow-[0_10px_28px_rgba(199,73,43,0.35)] transition hover:bg-shu-deep"
            >
              𝕏 でDMする
            </a>
            <Link
              href="https://hajime-shogi.vercel.app"
              target="_blank"
              className="rounded-full border-2 border-kin/40 bg-card px-9 py-4 font-sans-jp text-sm font-bold tracking-widest text-kin shadow-[var(--sh)] transition hover:border-kin hover:bg-kin/10"
            >
              教室サイトへ ▶
            </Link>
          </div>

          {/* 末尾の駒装飾 */}
          <div className="reveal mt-16 flex items-center gap-4 opacity-70">
            <div className="w-10">
              <Koma label="王" variant="gold" />
            </div>
            <div className="w-8">
              <Koma label="名" variant="shu" />
            </div>
            <div className="w-10">
              <Koma label="将" variant="gold" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          FOOTER
          =================================================== */}
      <footer className="border-t border-kin/30 bg-sumi py-10 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-serif-jp text-base tracking-[0.5em] text-kin-bright">
            鈴木 肇
          </p>
          <p className="mt-2 text-[10px] tracking-[0.3em] text-[#f6e8c6]/60">
            SUZUKI HAJIME · OFFICIAL SITE
          </p>
          <p className="mt-4 text-xs text-[#f6e8c6]/50">
            © {new Date().getFullYear()} Suzuki Hajime. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
