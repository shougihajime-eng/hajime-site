@AGENTS.md

# hajime-site

鈴木肇（将棋アマ名人・アマ王将位）の自己紹介・名刺がわりホームページ。

---

## 進捗（いまここ）

- ✅ 直近で済んだこと: デザインを「黒×金×朱・動く将棋盤風」に全面リニューアル（駒が背景で舞う／金縁戦歴カード／駒型サービスカード／本棚風著書）
- 🟡 進行中: 本人が実機で見て、微調整の指示待ち
- 🔜 次の一歩: 肇さんが http://localhost:3000 で確認 → OKなら git push して本番公開

---

## 本番URL

| 種類 | URL |
|---|---|
| 公開URL | https://hajime-site.vercel.app |
| GitHub | https://github.com/shougihajime-eng/hajime-site |
| Vercel ダッシュボード | https://vercel.com/shougihajime-3368s-projects/hajime-site |

---

## 主要ドキュメント

| ドキュメント | 目的 |
|---|---|
| `src/app/page.tsx` | トップページ本体 |
| `src/app/layout.tsx` | ページ全体の枠組み（フォント・head） |
| `src/app/globals.css` | 配色・フォントなど共通スタイル |

---

## 技術構成

- **フロント**: Next.js 15 (App Router) / React 19 / TypeScript / Tailwind CSS
- **デプロイ**: Vercel（GitHub `main` ブランチが自動デプロイ）
- **DB**: なし（現時点ではログイン・データベース不要の静的サイト）

---

## デザイン方針

将棋講師らしい和風サイト。
- 配色: 朝陽色 / 墨色 / 生成り色（白ベース）
- 書体: 明朝体（見出し）+ 読みやすいゴシック（本文）
- モチーフ: 将棋盤・駒のあしらい（さりげなく）
- 雰囲気: 落ち着いた・先生らしい・ふざけすぎない

---

## トップページ構成案

1. ヒーロー: 名前「鈴木肇」+ 肩書き「将棋講師 / アマ名人 / アマ王将」+ ダミー駒アイコン
2. 自己紹介: 数行〜10行程度の文章
3. 講師実績: ベスト4以上のアマ大会成績一覧（本人確認済みの数字のみ）
4. やっているサービス・教室: カード一覧
   - 将棋はじめあい（オンライン）— https://shogi-hajime-ai.vercel.app
   - はじめ将棋教室（横浜市南区）— ※URL未確認
   - 青葉はじめ将棋教室（横浜市青葉区）— http://www.aobashogiclub.net/
   - 両国将棋塾（両国将棋囲碁センター内、及川拓馬七段と共同）— https://ryogokushogiigo.ikidane.com/
5. メディア: YouTube チャンネル / X(@hajjme99) / 著書（リボーンの棋士 監修 ほか）
6. 連絡先

---

## 検証コマンド

```powershell
# ローカル起動
cd hajime-site
npm run dev          # http://localhost:3000

# 型チェック・リント
npm run lint
npx tsc --noEmit

# 本番デプロイ（main に push すれば自動デプロイされる）
git push origin main
```

---

## 開発上の注意

- **数字や順位の実績は絶対に推測で書かない**。本人確認が取れたものだけを掲載する。
- アマ大会の回数・年・順位は複数公式ソース（将棋連盟HP / 千葉県支部歴代表 / Wikipedia）で照合する。
- 親フォルダ名「はじめホームページ」は日本語のため npm パッケージ名にできない。プロジェクトはサブフォルダ `hajime-site/` 内で管理。
