/* ============================================
   外に出す数字（ここ1か所だけ・直す時はここを直す）
   2026-10-27 に実際の画面で確かめた数字。必ず「時点」を付けて出す。
   ============================================ */
export const AS_OF_JA = "2026年10月27日時点";
export const AS_OF_EN = "as of Oct 27, 2026";

export const NUMBERS = {
  /** 棋士中村太地将棋はじめch（中村太地八段とはじめ先生で作ったチャンネル） */
  taichiCh: {
    url: "https://www.youtube.com/channel/UCC0Q1NBgGJRzFFPe1IPYtwg",
    subsJa: "11万人",
    subsEn: "110K subscribers",
  },
  /** はじめ先生の将棋研究所 */
  labCh: {
    url: "https://www.youtube.com/channel/UC29EGo2JmszXaG6rfuCiOlA",
    subsJa: "1.03万人",
    subsEn: "10.3K subscribers",
  },
  /** X @hajjme99 */
  x: {
    url: "https://x.com/hajjme99",
    followersJa: "9,353人",
    followersEn: "9,353 followers on X",
  },
  /** Kifu Vault の App Store の評価 */
  kifuVaultRating: {
    ja: `App Store の評価 4.1（19件・${AS_OF_JA}）`,
    en: `App Store rating 4.1 (19 ratings, ${AS_OF_EN})`,
  },
} as const;

/* 文として使い回す形 */
export const TAICHI_CH_LINE_JA = `中村太地八段と はじめ先生で作った YouTube チャンネル「棋士中村太地将棋はじめch」（登録者${NUMBERS.taichiCh.subsJa}・${AS_OF_JA}）`;
export const LAB_CH_LINE_JA = `YouTube「はじめ先生の将棋研究所」（登録者${NUMBERS.labCh.subsJa}・${AS_OF_JA}）`;
export const X_LINE_JA = `X @hajjme99（フォロワー${NUMBERS.x.followersJa}・${AS_OF_JA}）`;

export const TAICHI_CH_LINE_EN = `The YouTube channel Hajime-sensei created with Taichi Nakamura 8-dan, 棋士中村太地将棋はじめch (${NUMBERS.taichiCh.subsEn}, ${AS_OF_EN})`;
export const LAB_CH_LINE_EN = `YouTube channel はじめ先生の将棋研究所 (Hajime-sensei's Shogi Lab) (${NUMBERS.labCh.subsEn}, ${AS_OF_EN})`;
export const X_LINE_EN = `X @hajjme99 (${NUMBERS.x.followersEn}, ${AS_OF_EN})`;
