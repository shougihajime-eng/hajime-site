import Image from "next/image";
import Link from "next/link";
import type { AppCopy, Shot } from "./appIntroTypes";
import LiteYouTube from "./LiteYouTube";

/* ============================================
   アプリ紹介ページの本体（はじめての将棋＝日本語・英語／Kifu Vault で共通）
   色は hs-* の変数。themeClass（例: kv-theme）で変数を上書きすると色が変わる。
   盤の写真の上には何も重ねない。
   ============================================ */

function PhoneShot({
  shot,
  className = "",
  sizes = "(min-width: 1024px) 320px, 70vw",
  eager = false,
}: {
  shot: Shot;
  className?: string;
  sizes?: string;
  eager?: boolean;
}) {
  return (
    <div className={`hs-phone ${className}`}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={640}
        height={1391}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        className="block h-auto w-full"
      />
    </div>
  );
}

const btnBase =
  "flex min-h-16 flex-1 items-center justify-center rounded-2xl px-6 py-4 text-center font-sans-jp text-xl font-black tracking-wide";

function StoreButtons({
  copy,
  released,
  id,
}: {
  copy: AppCopy;
  released: boolean;
  id?: string;
}) {
  const s = copy.store;
  return (
    <div id={id} className="flex w-full flex-col items-stretch gap-3 sm:max-w-xl">
      {released ? (
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={s.appStoreHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnBase} bg-hs-coral text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition hover:bg-hs-coral-deep`}
          >
            {s.appStore}
          </a>
          <a
            href={s.googlePlayHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnBase} border-[3px] border-hs-navy bg-white text-hs-navy shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition hover:bg-hs-peach`}
          >
            {s.googlePlay}
          </a>
        </div>
      ) : (
        <div className="flex flex-col gap-3" aria-live="polite">
          {s.comingSoon.followHref && (
            <a
              href={s.comingSoon.followHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnBase} bg-hs-coral text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition hover:bg-hs-coral-deep`}
            >
              {s.comingSoon.followLabel}
            </a>
          )}
          <p className="text-center font-sans-jp text-lg font-black text-hs-navy">
            {s.comingSoon.appStore} ・ {s.comingSoon.googlePlay}
          </p>
        </div>
      )}
      <p className="text-center font-sans-jp text-lg font-black text-hs-ink sm:text-xl">
        {s.priceLine}
      </p>
      <p className="text-center font-sans-jp text-lg font-bold leading-relaxed text-hs-ink2">
        {s.platformLine}
      </p>
      {released
        ? s.appStoreNote && (
            <p className="text-center font-sans-jp text-sm leading-relaxed text-hs-ink2">
              {s.appStoreNote}
            </p>
          )
        : s.comingSoon.note && (
            <p className="text-center font-sans-jp text-lg font-bold leading-relaxed text-hs-coral-deep">
              {s.comingSoon.note}
            </p>
          )}
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 inline-block rounded-full bg-hs-peach px-4 py-1.5 font-sans-jp text-sm font-bold tracking-wider text-hs-coral-deep sm:text-base">
      {children}
    </p>
  );
}

function H2({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <h2 className="font-serif-jp text-[2rem] font-black leading-[1.25] tracking-wide text-hs-navy sm:text-5xl sm:leading-[1.2]">
      {lines.map((l, i) => (
        <span key={i} className="block">
          {l}
        </span>
      ))}
    </h2>
  );
}

function LangSwitch({ copy }: { copy: AppCopy }) {
  if (!copy.otherPath) return null;
  const isJa = copy.lang === "ja";
  const jaHref = isJa ? copy.path : copy.otherPath;
  const enHref = isJa ? copy.otherPath : copy.path;
  const base =
    "flex min-h-11 items-center justify-center whitespace-nowrap rounded-full px-4 font-sans-jp text-base font-bold transition";
  const on = "bg-hs-navy text-white";
  const off = "text-hs-navy hover:bg-hs-peach";
  return (
    <nav
      aria-label={isJa ? "言語の切りかえ" : "Language"}
      className="flex items-center gap-1 rounded-full border-2 border-hs-navy/20 bg-white p-1"
    >
      <Link
        href={jaHref}
        className={`${base} ${isJa ? on : off}`}
        aria-current={isJa ? "page" : undefined}
        hrefLang="ja"
      >
        {copy.switcher.ja}
      </Link>
      <Link
        href={enHref}
        className={`${base} ${!isJa ? on : off}`}
        aria-current={!isJa ? "page" : undefined}
        hrefLang="en"
      >
        {copy.switcher.en}
      </Link>
    </nav>
  );
}

export default function AppIntro({
  copy,
  released,
  themeClass = "",
}: {
  copy: AppCopy;
  released: boolean;
  themeClass?: string;
}) {
  const { hero, voice, video, reviews, worries, steps, features, author, modes, price } = copy;
  return (
    <main lang={copy.lang} className={`hs-bg flex flex-col text-hs-ink ${themeClass}`}>
      {/* ===== 上のバー：戻る＋言語 ===== */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 pt-5 sm:px-8">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2 rounded-full px-2 font-sans-jp text-base font-bold text-hs-navy hover:underline"
        >
          <span aria-hidden>←</span>
          <span className="hidden sm:inline">{copy.backHome}</span>
          <span className="sm:hidden">{copy.lang === "ja" ? "ホーム" : "Home"}</span>
        </Link>
        <LangSwitch copy={copy} />
      </header>

      {/* ===== ① 何のアプリか・誰のためか＋買うボタン ===== */}
      <section className="relative mx-auto w-full max-w-6xl px-5 pt-8 pb-12 sm:px-8 sm:pt-12 sm:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <p className="font-sans-jp text-base font-bold tracking-wider text-hs-coral-deep sm:text-lg">
              {hero.eyebrow}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Image
                src={copy.icon}
                alt=""
                width={72}
                height={72}
                loading="eager"
                className="spin-on-hover h-16 w-16 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.2)] sm:h-[72px] sm:w-[72px]"
              />
              <p className="font-serif-jp text-2xl font-bold tracking-wide text-hs-navy sm:text-3xl">
                {hero.appName}
              </p>
              {!released && (
                <span className="koma-hop rounded-full bg-hs-coral px-4 py-1.5 font-sans-jp text-base font-black tracking-wider text-white">
                  {copy.store.comingSoon.badge}
                </span>
              )}
            </div>
            <h1 className="mt-7 font-serif-jp text-[2.25rem] font-black leading-[1.2] tracking-wide text-hs-navy sm:text-5xl sm:leading-[1.16] lg:text-[3.4rem]">
              {hero.titleLines.map((l, i) => (
                <span key={i} className={i === 1 ? "block text-hs-coral" : "block"}>
                  {l}
                </span>
              ))}
            </h1>
            <p className="mt-6 font-sans-jp text-xl font-black leading-relaxed text-hs-ink sm:text-2xl">
              {hero.lead}
            </p>
            <div className="mx-auto mt-7 w-[62%] max-w-[260px] lg:hidden">
              <PhoneShot shot={hero.shot} eager sizes="62vw" />
            </div>
            <p className="mt-3 font-sans-jp text-lg leading-relaxed text-hs-ink2 sm:text-xl">
              {hero.forWhom}
            </p>
            {copy.rating && (
              <p className="mt-4 inline-block rounded-full border-2 border-hs-coral/40 bg-white px-4 py-2 font-sans-jp text-base font-bold text-hs-coral-deep">
                {copy.rating}
              </p>
            )}
            <div className="mt-9 w-full">
              <StoreButtons copy={copy} released={released} id="buy" />
            </div>
          </div>

          <div className="mx-auto hidden w-full max-w-[340px] lg:block">
            <PhoneShot shot={hero.shot} sizes="340px" />
          </div>
        </div>
      </section>

      {/* ===== ② はじめ先生の顔と思い ===== */}
      <section className="bg-hs-navy py-12 text-white sm:py-16">
        <div className="mx-auto grid w-full max-w-5xl items-center gap-8 px-5 sm:px-8 md:grid-cols-[auto_1fr] md:gap-12">
          <div className="mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full ring-4 ring-hs-coral sm:h-52 sm:w-52">
            <Image
              src="/hajime-portrait.png"
              alt={author.name}
              width={208}
              height={208}
              sizes="208px"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div>
            <p className="font-sans-jp text-base font-bold tracking-wider text-hs-coral sm:text-lg">
              {voice.kicker}
            </p>
            <blockquote className="mt-4 space-y-4 font-serif-jp text-xl font-bold leading-relaxed sm:text-2xl md:text-[1.75rem] md:leading-relaxed">
              {voice.lines.map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </blockquote>
            <p className="mt-6 font-sans-jp text-lg font-bold">
              {voice.sign}
              <span className="ml-3 text-base font-normal text-white/70">
                {voice.signSub}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ===== ②' 買った人の声（App Store のレビューの原文） ===== */}
      {reviews && (
        <section className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <Kicker>{reviews.kicker}</Kicker>
          <H2 text={reviews.title} />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {reviews.items.map((r) => (
              <figure
                key={r.by}
                className="flex flex-col rounded-3xl border border-hs-line bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.07)] sm:p-7"
              >
                <p aria-label={`★${r.stars}`} className="font-sans-jp text-2xl tracking-widest text-hs-coral">
                  {"★".repeat(r.stars)}
                </p>
                <p className="mt-2 font-serif-jp text-2xl font-black leading-snug text-hs-navy">{r.title}</p>
                <blockquote className="mt-3 flex-1 font-sans-jp text-lg leading-relaxed text-hs-ink">
                  {r.text}
                </blockquote>
                <figcaption className="mt-4 font-sans-jp text-base font-bold text-hs-ink2">{r.by}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 font-sans-jp text-base leading-relaxed text-hs-ink2">{reviews.note}</p>
        </section>
      )}

      {/* ===== ②'' 使っている様子（動画） ===== */}
      {video && (
        <section className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
          <Kicker>{video.kicker}</Kicker>
          <H2 text={video.title} />
          <div className="mt-8 overflow-hidden rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.15)]">
            <LiteYouTube videoId={video.videoId} title={video.caption} />
          </div>
          <p className="mt-4 font-sans-jp text-lg font-bold leading-relaxed text-hs-ink2">{video.caption}</p>
        </section>
      )}

      {/* ===== ③ 悩み → 答え ===== */}
      {worries && (
      <section className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <Kicker>{worries.kicker}</Kicker>
        <H2 text={worries.title} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {worries.items.map((w, i) => (
            <article
              key={i}
              className="flex flex-col rounded-3xl border border-hs-line bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.07)] sm:p-7"
            >
              <p className="rounded-2xl bg-hs-cream px-4 py-3 font-sans-jp text-lg font-bold leading-snug text-hs-ink2">
                {w.worry}
              </p>
              <p className="mt-5 font-serif-jp text-2xl font-black leading-snug text-hs-navy">
                {w.answer}
              </p>
              <p className="mt-4 font-sans-jp text-lg leading-relaxed text-hs-ink">
                {w.body}
              </p>
            </article>
          ))}
        </div>
      </section>
      )}

      {/* ===== ④ どう進むか（3段階＋写真） ===== */}
      <section className="bg-white/70 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <Kicker>{steps.kicker}</Kicker>
          <H2 text={steps.title} />

          <ol className="mt-10 space-y-10 sm:space-y-14">
            {steps.items.map((st, i) => (
              <li
                key={st.no}
                className={`grid items-center gap-8 md:grid-cols-[1fr_280px] md:gap-14 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif-jp text-6xl font-black leading-none text-hs-coral sm:text-7xl">
                      {st.no}
                    </span>
                    <h3 className="font-serif-jp text-[1.7rem] font-black leading-snug text-hs-navy sm:text-4xl">
                      {st.title}
                    </h3>
                  </div>
                  <p className="mt-4 inline-block rounded-xl bg-hs-peach px-4 py-2 font-sans-jp text-base font-bold text-hs-coral-deep sm:text-lg">
                    {steps.lessonsLabel ? `${steps.lessonsLabel} ` : ""}
                    {st.lessons}
                  </p>
                  <p className="mt-5 font-sans-jp text-lg leading-relaxed text-hs-ink sm:text-xl">
                    {st.body}
                  </p>
                  {st.callout && (
                    <div className="mt-6 rounded-2xl border-l-8 border-hs-coral bg-hs-cream p-5">
                      <p className="font-sans-jp text-base font-black tracking-wider text-hs-coral-deep">
                        {st.callout.label}
                      </p>
                      <p className="mt-2 font-sans-jp text-lg leading-relaxed text-hs-ink">
                        {st.callout.body}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mx-auto w-[64%] max-w-[260px] md:w-full md:max-w-none">
                  <PhoneShot shot={st.shot} sizes="(min-width: 768px) 280px, 64vw" />
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col items-center gap-5 text-center">
            {copy.store.midCall && (
              <p className="font-serif-jp text-2xl font-black leading-snug text-hs-navy sm:text-3xl">
                {copy.store.midCall}
              </p>
            )}
            <StoreButtons copy={copy} released={released} />
          </div>
        </div>
      </section>

      {/* ===== ④' できること（写真と組にして、たっぷり） ===== */}
      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <Kicker>{features.kicker}</Kicker>
        <H2 text={features.title} />
        <p className="mt-5 max-w-3xl font-sans-jp text-lg leading-relaxed text-hs-ink2 sm:text-xl">
          {features.lead}
        </p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((f, i) => (
            <li
              key={f.title}
              className={`flex rounded-3xl border border-hs-line bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.07)] sm:p-6 ${
                f.chips ? "flex-col gap-5 sm:col-span-2 sm:flex-row sm:gap-8 lg:col-span-3" : f.shot ? "flex-col gap-5" : "gap-4"
              }`}
            >
              {f.shot ? (
                <div className="mx-auto w-[46%] max-w-[200px] shrink-0 self-center sm:w-[60%]">
                  <PhoneShot shot={f.shot} sizes="(min-width: 640px) 200px, 46vw" />
                </div>
              ) : (
                <div
                  aria-hidden
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-hs-peach font-serif-jp text-2xl font-black text-hs-coral-deep"
                >
                  {i + 1}
                </div>
              )}
              <div className={`min-w-0 flex-1 ${f.shot && !f.chips ? "text-center" : "self-center"}`}>
                <h3 className="font-serif-jp text-2xl font-black leading-snug text-hs-navy">
                  {f.title}
                </h3>
                <p className="mt-2 font-sans-jp text-lg leading-relaxed text-hs-ink">
                  {f.outcome}
                </p>
                {f.chips && (
                  <ol className="mt-4 flex flex-wrap gap-2">
                    {f.chips.map((c, ci) => (
                      <li
                        key={c}
                        className="flex items-center gap-1.5 rounded-full border-2 border-hs-navy/15 bg-hs-cream px-3 py-1.5 font-sans-jp text-sm font-bold text-hs-navy sm:text-base"
                      >
                        <span className="text-hs-coral">{ci + 1}</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== ⑤ 作った人 ===== */}
      <section className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <Kicker>{author.kicker}</Kicker>
        <H2 text={author.title} />
        <div className="mt-10 grid gap-8 md:grid-cols-[260px_1fr] md:gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="h-48 w-48 overflow-hidden rounded-[2rem] ring-4 ring-hs-peach sm:h-60 sm:w-60">
              <Image
                src="/hajime-portrait.png"
                alt={author.name}
                width={240}
                height={240}
                sizes="240px"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <p className="mt-5 font-serif-jp text-3xl font-black tracking-wider text-hs-navy">
              {author.name}
            </p>
            <p className="mt-1 font-sans-jp text-base text-hs-ink2">{author.nameSub}</p>
          </div>
          <div>
            <ul className="grid gap-2.5">
              {author.facts.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 font-sans-jp text-base font-bold leading-snug text-hs-ink shadow-[0_6px_18px_rgba(0,0,0,0.05)] sm:text-lg"
                >
                  <span aria-hidden className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-hs-coral" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            {author.motto && (
              <div className="mt-6 rounded-3xl border-[3px] border-hs-coral/50 bg-white px-6 py-6 sm:px-8">
                <p className="font-sans-jp text-base font-bold tracking-wider text-hs-coral-deep sm:text-lg">
                  {author.motto.label}
                </p>
                <p className="mt-3 flex flex-wrap gap-2.5">
                  {author.motto.words.map((w) => (
                    <span
                      key={w}
                      className="rounded-2xl bg-hs-peach px-4 py-2 font-serif-jp text-2xl font-black leading-tight text-hs-navy sm:text-3xl"
                    >
                      {w}
                    </span>
                  ))}
                </p>
                <p className="mt-3 font-sans-jp text-base leading-relaxed text-hs-ink sm:text-lg">
                  {author.motto.note}
                </p>
              </div>
            )}
            <div className="mt-8 rounded-3xl bg-hs-navy p-6 text-white sm:p-8">
              <p className="font-sans-jp text-base font-bold tracking-wider text-hs-coral sm:text-lg">
                {author.whyTitle}
              </p>
              <div className="mt-3 space-y-4 font-serif-jp text-lg leading-relaxed sm:text-xl">
                {author.whyLines.map((l, i) => (
                  <p key={i}>{l}</p>
                ))}
              </div>
            </div>
            <Link
              href="/"
              className="mt-5 inline-flex min-h-11 items-center font-sans-jp text-lg font-bold text-hs-coral-deep underline underline-offset-4"
            >
              {author.moreLink} →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ⑥ 2枚のカード（こどもモード・英語／使う人ごと） ===== */}
      <section className="bg-white/70 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <Kicker>{modes.kicker}</Kicker>
          <H2 text={modes.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {modes.cards.map((m, i) => (
              <article
                key={i}
                className="grid grid-cols-[1fr_30%] items-center gap-4 rounded-3xl border border-hs-line bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.07)] sm:p-7"
              >
                <div>
                  <h3 className="font-serif-jp text-2xl font-black text-hs-navy sm:text-3xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 font-sans-jp text-base leading-relaxed text-hs-ink sm:text-lg">
                    {m.body}
                  </p>
                  {m.linkLabel && copy.otherPath && (
                    <Link
                      href={copy.otherPath}
                      className="mt-4 inline-flex min-h-11 items-center font-sans-jp text-lg font-bold text-hs-coral-deep underline underline-offset-4"
                    >
                      {m.linkLabel} →
                    </Link>
                  )}
                </div>
                <PhoneShot shot={m.shot} sizes="(min-width: 768px) 180px, 36vw" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ⑦ 値段と安心＋よくある質問＋もう一度買うボタン ===== */}
      <section className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <Kicker>{price.kicker}</Kicker>
        <H2 text={price.title} />

        <div className="mt-10 flex flex-col items-center rounded-3xl border-[3px] border-hs-coral bg-white px-6 py-8 text-center shadow-[0_16px_40px_rgba(0,0,0,0.10)] sm:py-10">
          <p className="font-serif-jp text-6xl font-black leading-none text-hs-coral sm:text-7xl">
            {price.amount}
          </p>
          <p className="mt-4 font-sans-jp text-lg font-bold leading-relaxed text-hs-ink sm:text-xl">
            {price.amountSub}
          </p>
          {copy.rating && (
            <p className="mt-3 font-sans-jp text-base font-bold text-hs-coral-deep">
              {copy.rating}
            </p>
          )}
          <div className="mt-8 grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {price.tiles.map((t) => (
              <div key={t.title} className="rounded-2xl bg-hs-cream px-4 py-4 text-left">
                <p className="font-sans-jp text-xl font-black leading-snug text-hs-navy">
                  {t.title}
                </p>
                <p className="mt-1 font-sans-jp text-lg leading-relaxed text-hs-ink2">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* よくある質問 */}
        <h3 className="mt-14 font-serif-jp text-3xl font-black text-hs-navy sm:text-4xl">
          {price.faqTitle}
        </h3>
        <dl className="mt-6 divide-y divide-hs-line rounded-3xl border border-hs-line bg-white px-6 shadow-[0_12px_30px_rgba(0,0,0,0.07)] sm:px-8">
          {price.faq.map((f) => (
            <div key={f.q} className="py-6">
              <dt className="flex gap-3 font-sans-jp text-xl font-black leading-snug text-hs-navy">
                <span className="shrink-0 text-hs-coral">Q</span>
                <span>{f.q}</span>
              </dt>
              <dd className="mt-3 flex gap-3 font-sans-jp text-lg leading-relaxed text-hs-ink">
                <span className="shrink-0 font-black text-hs-ink2">A</span>
                <span>{f.a}</span>
              </dd>
            </div>
          ))}
        </dl>

        {/* もう一度、買うボタン */}
        <div className="mt-16 flex flex-col items-center text-center">
          <p className="font-serif-jp text-3xl font-black leading-tight text-hs-navy sm:text-5xl">
            {price.lastCallTitle}
          </p>
          <p className="mt-4 max-w-2xl font-sans-jp text-lg leading-relaxed text-hs-ink2 sm:text-xl">
            {price.lastCallBody}
          </p>
          <div className="mt-8 flex w-full justify-center">
            <StoreButtons copy={copy} released={released} />
          </div>
        </div>
      </section>

      <footer className="border-t border-hs-line bg-white py-8 text-center">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center font-sans-jp text-lg font-bold text-hs-navy underline underline-offset-4"
        >
          ← {copy.footer.back}
        </Link>
      </footer>
    </main>
  );
}
