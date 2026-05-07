import Link from "next/link";

function Koma({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 110"
      className={className}
      role="img"
      aria-label={`将棋の駒「${label}」`}
    >
      <defs>
        <linearGradient id="komaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8c590" />
          <stop offset="100%" stopColor="#c89858" />
        </linearGradient>
      </defs>
      <path
        d="M50 5 L78 22 L88 100 L12 100 L22 22 Z"
        fill="url(#komaGrad)"
        stroke="#7a5a30"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text
        x="50"
        y="72"
        textAnchor="middle"
        className="font-serif-jp"
        fontSize="56"
        fontWeight="900"
        fill="#1a1a1a"
        style={{ fontFamily: "var(--font-serif-jp)" }}
      >
        {label}
      </text>
    </svg>
  );
}

function SectionTitle({
  ja,
  en,
}: {
  ja: string;
  en: string;
}) {
  return (
    <div className="mb-10 flex flex-col items-center text-center">
      <span className="text-xs tracking-[0.4em] text-shu uppercase">{en}</span>
      <h2 className="mt-2 font-serif-jp text-3xl font-bold text-sumi sm:text-4xl">
        {ja}
      </h2>
      <span className="mt-3 inline-block h-px w-16 bg-kiji-dark" />
    </div>
  );
}

const achievements = [
  {
    year: "2018年",
    title: "第72回 全日本アマチュア名人戦",
    result: "優勝",
    note: "アマ名人位獲得",
    highlight: true,
  },
  {
    year: "2015年",
    title: "第32期 全国アマチュア王将位大会",
    result: "優勝",
    note: "アマ王将位獲得",
    highlight: true,
  },
  {
    year: "2016年",
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
    note: "アマ名人優勝などの功績により",
    highlight: false,
  },
];

const services = [
  {
    name: "はじめ将棋教室",
    place: "横浜市南区 吉野町",
    desc: "Y.Y.World 囲碁・将棋（吉野町駅徒歩1分）の2階で開催。子ども部・大人部、毎週木曜日（不定期）。",
    href: "https://hajime-shogi.vercel.app",
    cta: "教室の公式サイトへ",
  },
  {
    name: "青葉はじめ将棋教室",
    place: "横浜市青葉区",
    desc: "横浜市青葉区にて開催している将棋教室。詳細は公式サイトをご覧ください。",
    href: "http://www.aobashogiclub.net/",
    cta: "教室の公式サイトへ",
  },
  {
    name: "両国将棋塾",
    place: "東京都墨田区 両国将棋囲碁センター内",
    desc: "プロ棋士・及川拓馬七段との共同講師。本格派の門下も受け入れ。",
    href: "https://ryogokushogiigo.ikidane.com/",
    cta: "公式サイトへ",
  },
  {
    name: "将棋はじめあい",
    place: "オンライン",
    desc: "オンラインで将棋を楽しむためのサービス（鋭意開発中）。",
    href: "https://shogi-hajime-ai.vercel.app",
    cta: "公式サイトへ",
  },
];

const books = [
  { title: "進化を続ける！右四間飛車エルモ囲い", year: "2022年", role: "著" },
  {
    title: "反撃する現代四間飛車〜はじめ先生と学ぶ新研究〜",
    year: "2024年",
    role: "著",
  },
  {
    title: "振り飛車Tips 少しの工夫で勝ちにつながる105の裏ワザ",
    year: "2026年",
    role: "著",
  },
  { title: "リボーンの棋士（漫画）", year: "2018年〜", role: "監修" },
];

export default function Home() {
  return (
    <main className="bg-washi-grid flex flex-col">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden border-b border-rule">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-20 sm:py-28">
          {/* 駒 */}
          <div className="relative mb-8 w-32 sm:w-40">
            <Koma label="王" className="w-full drop-shadow-md" />
          </div>

          {/* 名前 */}
          <p className="mb-3 text-xs tracking-[0.5em] text-shu uppercase">
            Suzuki Hajime · Official
          </p>
          <h1 className="font-serif-jp text-5xl font-black tracking-wider text-sumi sm:text-6xl md:text-7xl">
            鈴木 肇
          </h1>

          {/* 肩書き */}
          <div className="mt-6 flex flex-col items-center gap-1 font-serif-jp text-base text-sumi/80 sm:text-lg">
            <p>将棋講師 ／ 元奨励会三段</p>
            <p className="text-shu">
              第72回 全日本アマチュア名人 ・ 第32期 全国アマチュア王将
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="rounded-sm border border-shu bg-shu px-6 py-3 text-sm font-medium text-washi transition hover:bg-shu-deep"
            >
              お問い合わせ
            </a>
            <a
              href="#services"
              className="rounded-sm border border-sumi/30 px-6 py-3 text-sm font-medium text-sumi transition hover:bg-sumi/5"
            >
              教室・サービスを見る
            </a>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="border-b border-rule py-20">
        <div className="mx-auto w-full max-w-3xl px-6">
          <SectionTitle ja="自己紹介" en="About" />
          <div className="space-y-5 font-sans-jp text-base leading-loose text-sumi/90 sm:text-lg">
            <p>
              1987年、神奈川県横浜市生まれ。元・日本将棋連盟 奨励会三段。
            </p>
            <p>
              2015年に第32期「全国アマチュア王将位大会」、2018年に第72回「全日本アマチュア名人戦」で優勝し、アマチュア将棋界の二大タイトルを獲得しました。
            </p>
            <p>
              現在は将棋講師として、横浜（南区吉野町・青葉区）と東京（両国）で将棋教室を運営。子どもから大人まで、初心者から上級者まで、それぞれの目標に合わせた指導を行っています。
            </p>
            <p>
              またYouTubeチャンネルでの動画発信、書籍の執筆・監修、漫画『リボーンの棋士』の監修など、将棋の楽しさを広く伝える活動にも取り組んでいます。
            </p>
            <p className="pt-2 text-sumi">
              「将棋って、楽しい。」
              <br />
              その一手の重みと面白さを、一人でも多くの方に届けることが、私の願いです。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Achievements ===== */}
      <section id="achievements" className="border-b border-rule bg-washi/50 py-20">
        <div className="mx-auto w-full max-w-4xl px-6">
          <SectionTitle ja="主な戦歴・受賞" en="Achievements" />
          <ol className="divide-y divide-rule overflow-hidden rounded-sm border border-rule bg-white/60">
            {achievements.map((a, i) => (
              <li
                key={i}
                className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-7"
              >
                <span className="w-20 shrink-0 font-serif-jp text-sm text-sumi/60">
                  {a.year}
                </span>
                <span className="flex-1 font-serif-jp text-base text-sumi sm:text-lg">
                  {a.title}
                </span>
                <span
                  className={`shrink-0 rounded-sm px-3 py-1 text-center font-serif-jp text-sm font-bold ${
                    a.highlight
                      ? "bg-shu text-washi"
                      : "border border-kiji-dark text-kiji-dark"
                  }`}
                >
                  {a.result}
                </span>
                {a.note && (
                  <span className="shrink-0 text-xs text-sumi/60 sm:w-32 sm:text-right">
                    {a.note}
                  </span>
                )}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-sumi/50">
            ※ 出典：日本将棋連盟 公式ページ／本人確認済み
          </p>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className="border-b border-rule py-20">
        <div className="mx-auto w-full max-w-5xl px-6">
          <SectionTitle ja="教室・サービス" en="Schools & Services" />
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.name}
                className="flex flex-col gap-4 rounded-sm border border-rule bg-white/70 p-7 transition hover:border-shu/40 hover:shadow-md"
              >
                <header>
                  <h3 className="font-serif-jp text-xl font-bold text-sumi">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-xs tracking-wider text-shu">
                    {s.place}
                  </p>
                </header>
                <p className="text-sm leading-relaxed text-sumi/80">
                  {s.desc}
                </p>
                <div className="mt-auto pt-2">
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-shu hover:text-shu-deep"
                    >
                      {s.cta}
                      <span aria-hidden>→</span>
                    </a>
                  ) : (
                    <span className="text-sm text-sumi/40">{s.cta}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Media ===== */}
      <section id="media" className="border-b border-rule bg-washi/50 py-20">
        <div className="mx-auto w-full max-w-4xl px-6">
          <SectionTitle ja="メディア・著書" en="Media & Books" />

          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <a
              href="https://x.com/hajjme99"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-sm border border-rule bg-white/70 p-5 transition hover:border-sumi"
            >
              <div>
                <p className="text-xs tracking-wider text-sumi/50">X (Twitter)</p>
                <p className="font-serif-jp text-base text-sumi">@hajjme99</p>
              </div>
              <span className="text-shu group-hover:translate-x-1 transition" aria-hidden>
                →
              </span>
            </a>
            <a
              href="https://www.youtube.com/results?search_query=%E3%81%AF%E3%81%98%E3%82%81%E5%85%88%E7%94%9F+%E5%B0%86%E6%A3%8B"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-sm border border-rule bg-white/70 p-5 transition hover:border-sumi"
            >
              <div>
                <p className="text-xs tracking-wider text-sumi/50">YouTube</p>
                <p className="font-serif-jp text-base text-sumi">
                  はじめ先生の将棋チャンネル
                </p>
              </div>
              <span className="text-shu group-hover:translate-x-1 transition" aria-hidden>
                →
              </span>
            </a>
          </div>

          <h3 className="mb-4 font-serif-jp text-lg font-bold text-sumi">
            書籍・監修
          </h3>
          <ul className="divide-y divide-rule rounded-sm border border-rule bg-white/70">
            {books.map((b) => (
              <li
                key={b.title}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="w-20 shrink-0 text-sm text-sumi/60">
                  {b.year}
                </span>
                <span className="flex-1 font-serif-jp text-base text-sumi">
                  {b.title}
                </span>
                <span className="shrink-0 text-xs text-shu">{b.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="py-20">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-6 text-center">
          <SectionTitle ja="ご連絡・お問い合わせ" en="Contact" />
          <p className="mb-8 text-sm leading-relaxed text-sumi/80 sm:text-base">
            指導のご依頼、講演・対局・取材のご相談などは、
            <br />
            以下のSNSダイレクトメッセージよりご連絡ください。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://x.com/hajjme99"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-shu bg-shu px-6 py-3 text-sm font-medium text-washi transition hover:bg-shu-deep"
            >
              X（旧Twitter）でDM
            </a>
            <Link
              href="https://hajime-shogi.vercel.app"
              target="_blank"
              className="rounded-sm border border-sumi/30 px-6 py-3 text-sm font-medium text-sumi transition hover:bg-sumi/5"
            >
              はじめ将棋教室サイト
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-rule bg-sumi py-8 text-center text-xs text-washi/60">
        <p className="font-serif-jp tracking-widest">鈴木 肇 公式ホームページ</p>
        <p className="mt-1">© {new Date().getFullYear()} Suzuki Hajime</p>
      </footer>
    </main>
  );
}
