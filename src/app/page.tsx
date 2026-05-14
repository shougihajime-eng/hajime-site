import Image from "next/image";
import Link from "next/link";

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
    variant === "shu" ? "#8b1d1f" : variant === "dark" ? "#3a3328" : "#8b6914";
  const textFill =
    variant === "shu" ? "#fff5e6" : variant === "dark" ? "#d4af37" : "#1a1410";
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
              <stop offset="0%" stopColor="#e8424a" />
              <stop offset="100%" stopColor="#8b1d1f" />
            </>
          ) : variant === "dark" ? (
            <>
              <stop offset="0%" stopColor="#2a241c" />
              <stop offset="100%" stopColor="#14110d" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#f5d77a" />
              <stop offset="55%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#8b6914" />
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
        fontWeight="900"
        fill={textFill}
        style={{ fontFamily: "var(--font-serif-jp)" }}
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
        <span className="h-1.5 w-1.5 rotate-45 bg-kin" />
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
    year: "—",
    title: "加古川青流戦 アマチュア選抜大会",
    result: "本戦出場 4度",
    note: "選抜大会優勝あり",
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

const services = [
  {
    koma: "歩",
    name: "はじめ将棋教室",
    place: "横浜市南区 吉野町",
    desc: "Y.Y.World 囲碁・将棋（吉野町駅徒歩1分）の2階で開催。子ども部・大人部、毎週木曜日（不定期）。",
    href: "https://hajime-shogi.vercel.app",
    cta: "教室サイトへ",
  },
  {
    koma: "桂",
    name: "青葉はじめ将棋教室",
    place: "横浜市青葉区",
    desc: "横浜市青葉区にて開催している将棋教室。詳細は公式サイトをご覧ください。",
    href: "http://www.aobashogiclub.net/",
    cta: "教室サイトへ",
  },
  {
    koma: "銀",
    name: "両国将棋塾",
    place: "東京都墨田区 両国",
    desc: "プロ棋士・及川拓馬七段との共同講師。両国将棋囲碁センター内。本格派の門下も歓迎。",
    href: "https://ryogokushogiigo.ikidane.com/",
    cta: "公式サイトへ",
  },
  {
    koma: "飛",
    name: "将棋はじめあい",
    place: "オンライン",
    desc: "オンラインで将棋を楽しむためのサービス。AIと一緒に学ぶ新感覚の学習体験（鋭意開発中）。",
    href: "https://shogi-hajime-ai.vercel.app",
    cta: "公式サイトへ",
  },
];

const books = [
  {
    title: "振り飛車を一刀両断！右四間飛車エルモ囲い",
    year: "2020",
    role: "著",
  },
  { title: "進化を続ける！右四間飛車エルモ囲い", year: "2022", role: "著" },
  {
    title: "反撃する現代四間飛車〜はじめ先生と学ぶ新研究〜",
    year: "2024",
    role: "著",
  },
  {
    title: "振り飛車Tips 少しの工夫で勝ちにつながる105の裏ワザ",
    year: "2026",
    role: "著",
  },
  { title: "リボーンの棋士（漫画）", year: "2018〜", role: "監修" },
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
            <div className="koma-float-1 absolute -bottom-3 -right-3 w-16 drop-shadow-[0_4px_12px_rgba(212,175,55,0.6)] sm:w-20">
              <Koma label="王" variant="gold" />
            </div>
            {/* 朱の駒（左上） */}
            <div className="koma-float-2 absolute -left-4 -top-2 w-12 drop-shadow-[0_4px_12px_rgba(193,39,45,0.6)] sm:w-14">
              <Koma label="名" variant="shu" />
            </div>
          </div>

          {/* 名前 */}
          <h1 className="font-serif-jp text-7xl font-black tracking-[0.15em] sm:text-8xl md:text-9xl">
            <span className="text-kin-grad">鈴木 肇</span>
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
              className="glow-kin group relative overflow-hidden rounded-sm border border-kin bg-kin px-8 py-4 font-serif-jp text-sm font-bold tracking-widest text-yoru transition hover:bg-kin-bright"
            >
              <span className="relative z-10">〔 道場へ進む 〕</span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCC0Q1NBgGJRzFFPe1IPYtwg"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-sm border border-kin/50 px-8 py-4 font-serif-jp text-sm font-bold tracking-widest text-kin transition hover:border-kin hover:bg-kin/10"
            >
              〔 動画を見る ▶ 〕
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
              中村太地八段との共同YouTubeチャンネル
              <span className="text-kin">「棋士中村太地将棋はじめch」</span>
              での動画発信や、書籍の執筆・監修、漫画
              <span className="text-kin">『リボーンの棋士』</span>
              の監修など、将棋の楽しさを広く伝える活動にも取り組んでいます。
            </p>

            {/* 信条ブロック */}
            <div className="reveal mt-12 rounded-sm border border-kin/30 bg-yoru-deep/60 p-8 glow-kin">
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
            </div>
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
                className={`reveal-rotate group relative flex flex-col gap-3 rounded-sm border p-6 transition hover:-translate-y-1 ${
                  a.highlight
                    ? "border-kin/60 bg-gradient-to-br from-yoru-deep to-yoru glow-kin-strong"
                    : "border-rule-soft bg-yoru-deep/60 hover:border-kin/40"
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {a.highlight && (
                  <span className="absolute -top-2 -right-2 rounded-full bg-shu px-3 py-0.5 font-serif-jp text-[10px] font-bold tracking-widest text-kinari shadow-lg">
                    TITLE
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <span className="font-serif-jp text-3xl font-black text-kin-grad">
                    {a.year}
                  </span>
                  <span
                    className={`font-serif-jp text-sm font-bold tracking-widest ${
                      a.highlight ? "text-kin-bright" : "text-kinari/70"
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

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-rotate group block"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* 駒型 */}
                <div className="clip-koma relative aspect-[10/11] bg-gradient-to-b from-kiji to-kiji-dark p-1 transition group-hover:scale-[1.03]">
                  <div className="clip-koma flex h-full w-full flex-col items-center justify-between bg-gradient-to-b from-[#f5d77a] via-[#d4af37] to-[#8b6914] px-4 py-6 text-center sm:py-8">
                    {/* 駒文字（大） */}
                    <div className="font-serif-jp text-6xl font-black leading-none text-yoru-deep sm:text-7xl">
                      {s.koma}
                    </div>
                    {/* 名称 */}
                    <div className="flex flex-col items-center gap-1 px-2">
                      <h3 className="font-serif-jp text-sm font-bold leading-tight text-yoru sm:text-base">
                        {s.name}
                      </h3>
                      <p className="text-[10px] tracking-widest text-yoru/70">
                        {s.place}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 駒の下に説明 */}
                <div className="mt-5 px-2 text-center">
                  <p className="text-xs leading-relaxed text-kinari/75">
                    {s.desc}
                  </p>
                  <p className="mt-3 font-serif-jp text-sm text-kin transition group-hover:text-kin-bright">
                    {s.cta} →
                  </p>
                </div>
              </a>
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

          <div className="reveal grid gap-6 lg:grid-cols-3">
            {/* YouTube 大 */}
            <a
              href="https://www.youtube.com/channel/UCC0Q1NBgGJRzFFPe1IPYtwg"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-kin group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-sm border border-kin/40 bg-gradient-to-br from-shu/20 via-yoru-deep to-yoru-deep p-7 transition hover:border-kin lg:col-span-2"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-shu/20 blur-3xl"
              />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-12 items-center justify-center rounded-sm bg-shu font-bold text-kinari">
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
                <p className="mt-4 text-sm leading-relaxed text-kinari/70">
                  中村太地八段との共同チャンネル。楽しく、わかりやすく、本気で将棋をお届け中。
                </p>
              </div>
              <div className="relative mt-6 flex items-center justify-between">
                <span className="font-serif-jp text-kin transition group-hover:text-kin-bright">
                  チャンネルを見る →
                </span>
              </div>
            </a>

            {/* X */}
            <a
              href="https://x.com/hajjme99"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-sm border border-rule-soft bg-yoru p-7 transition hover:border-kin/60"
            >
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-kinari/60 font-serif-jp font-bold text-kinari">
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
              </div>
              <span className="mt-6 font-serif-jp text-sm text-kin transition group-hover:text-kin-bright">
                フォローする →
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
                <div
                  key={b.title}
                  className="reveal-rotate group flex h-64 w-12 flex-col justify-between rounded-t-sm border border-kin/50 bg-gradient-to-b from-shu-bright/90 via-shu/90 to-shu-deep/90 px-2 py-4 shadow-lg transition hover:-translate-y-3 hover:from-kin hover:via-kin hover:to-kin-deep sm:h-72 sm:w-14"
                  style={{ animationDelay: `${i * 80}ms` }}
                  title={`${b.title}（${b.year} / ${b.role}）`}
                >
                  <p className="tategaki-mixed mx-auto font-serif-jp text-[11px] font-bold leading-tight tracking-widest text-kinari group-hover:text-yoru-deep sm:text-xs">
                    {b.title}
                  </p>
                  <p className="text-center font-serif-jp text-[9px] text-kinari/70 group-hover:text-yoru-deep/80 sm:text-[10px]">
                    {b.year}
                  </p>
                </div>
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
                <span className="flex-1 font-serif-jp text-kinari/90">
                  {b.title}
                </span>
                <span className="shrink-0 text-xs text-kin/70">{b.role}</span>
              </li>
            ))}
          </ul>
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
              className="glow-kin rounded-sm border border-kin bg-kin px-8 py-4 font-serif-jp text-sm font-bold tracking-widest text-yoru transition hover:bg-kin-bright"
            >
              〔 𝕏 でDMする 〕
            </a>
            <Link
              href="https://hajime-shogi.vercel.app"
              target="_blank"
              className="rounded-sm border border-kin/50 px-8 py-4 font-serif-jp text-sm font-bold tracking-widest text-kin transition hover:bg-kin/10"
            >
              〔 教室サイトへ 〕
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
          <p className="font-serif-jp text-base tracking-[0.5em] text-kin-grad">
            鈴木 肇
          </p>
          <p className="mt-2 text-[10px] tracking-[0.3em] text-kinari/40">
            SUZUKI HAJIME · OFFICIAL SITE
          </p>
          <p className="mt-4 text-xs text-kinari/30">
            © {new Date().getFullYear()} Suzuki Hajime. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
