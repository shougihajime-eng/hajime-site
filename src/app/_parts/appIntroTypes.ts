/* ============================================
   アプリ紹介ページ（はじめての将棋・Kifu Vault）で共通の言葉の型
   ============================================ */

export type Lang = "ja" | "en";

export type Shot = { src: string; alt: string };

export type AppCopy = {
  lang: Lang;
  path: string;
  /** もう一方の言語のページ。無ければ言語の切りかえを出さない */
  otherPath?: string;
  backHome: string;
  /** アプリのアイコン（public の中） */
  icon: string;
  switcher: { ja: string; en: string };
  store: {
    appStore: string;
    appStoreHref: string;
    /** 発売後に出す小さな注意（空なら出さない） */
    appStoreNote: string;
    googlePlay: string;
    googlePlayHref: string;
    priceLine: string;
    platformLine: string;
    /** 発売前（RELEASED=false）の表示 */
    comingSoon: {
      badge: string;
      appStore: string;
      googlePlay: string;
      note: string;
      /** 発売前に出すボタン（発売のお知らせを受けとる先＝X） */
      followLabel?: string;
      followHref?: string;
    };
    /** ページの途中に出す買うボタンの上の1行 */
    midCall?: string;
  };
  /** ストアの評価（発売ずみのアプリだけ。日付つき） */
  rating?: string;
  hero: {
    eyebrow: string;
    appName: string;
    titleLines: string[];
    lead: string;
    forWhom: string;
    shot: Shot;
  };
  voice: {
    kicker: string;
    lines: string[];
    sign: string;
    signSub: string;
  };
  /** 使っている様子の動画（YouTube）。無ければ出さない */
  video?: { kicker: string; title: string; videoId: string; caption: string };
  /** 買った人の声（App Store のレビューの原文のまま・省いた所は…）。無ければ出さない */
  reviews?: {
    kicker: string;
    title: string;
    note: string;
    items: { title: string; text: string; by: string; stars: number }[];
  };
  worries?: {
    kicker: string;
    title: string;
    items: { worry: string; answer: string; body: string }[];
  };
  steps: {
    kicker: string;
    title: string;
    /** 「レッスン」など。空なら付けない */
    lessonsLabel: string;
    items: {
      no: string;
      title: string;
      lessons: string;
      body: string;
      shot: Shot;
      callout?: { label: string; body: string };
    }[];
  };
  /** できること＝機能の名前＋「それで何ができるようになるか」＋画面の写真 */
  features: {
    kicker: string;
    title: string;
    lead: string;
    items: { title: string; outcome: string; shot?: Shot; chips?: string[] }[];
  };
  author: {
    kicker: string;
    title: string;
    name: string;
    nameSub: string;
    facts: string[];
    /** 大事にしていること（挑戦・楽しむこと・遊び心） */
    motto?: { label: string; words: string[]; note: string };
    whyTitle: string;
    whyLines: string[];
    moreLink: string;
  };
  modes: {
    kicker: string;
    title: string;
    cards: { title: string; body: string; shot: Shot; linkLabel?: string }[];
  };
  price: {
    kicker: string;
    title: string;
    amount: string;
    amountSub: string;
    tiles: { title: string; body: string }[];
    faqTitle: string;
    faq: { q: string; a: string }[];
    lastCallTitle: string;
    lastCallBody: string;
  };
  footer: { back: string };
};
