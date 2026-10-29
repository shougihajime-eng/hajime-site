/* ============================================
   「はじめての将棋」紹介ページの言葉（日本語・英語）
   並びと事実は両方同じ。日本語にない事実は英語にも書かない。
   呼び名は「はじめ先生」（正式な名前「鈴木 肇」は作った人の紹介の中だけ）。
   ============================================ */
import type { AppCopy } from "../../_parts/appIntroTypes";
import {
  TAICHI_CH_LINE_JA,
  LAB_CH_LINE_JA,
  X_LINE_JA,
  TAICHI_CH_LINE_EN,
  LAB_CH_LINE_EN,
  X_LINE_EN,
} from "../../_parts/numbers";

const JA_SHOTS = "/hajimete-shogi/ja";
const EN_SHOTS = "/hajimete-shogi/en";

export const ja: AppCopy = {
  lang: "ja",
  path: "/hajimete-shogi",
  otherPath: "/hajimete-shogi/en",
  backHome: "はじめ先生のホームページ",
  icon: "/hajimete-shogi/icon.png",
  switcher: { ja: "日本語", en: "English" },
  store: {
    appStore: "App Store で買う",
    appStoreHref: "https://apps.apple.com/jp/app/id6826854433",
    appStoreNote: "",
    googlePlay: "Google Play で買う",
    googlePlayHref:
      "https://play.google.com/store/apps/details?id=jp.hajimeshogi.hajimete",
    priceLine: "買い切り 1,000円 ・ 一度買えばずっと ・ 広告なし",
    platformLine: "iPhone・iPad・Android。ネットにつながらなくても使えます。",
    comingSoon: {
      badge: "近日発売",
      appStore: "App Store",
      googlePlay: "Google Play で近日発売",
      note: "いまストアの審査中です。発売しだい、ここから買えるようになります。",
      followLabel: "発売のお知らせを X で受けとる",
      followHref: "https://x.com/hajjme99",
    },
    midCall: "はじめての一局を、このアプリで。",
  },
  hero: {
    eyebrow: "将棋教室のはじめ先生が作った、ルールの入門アプリ",
    appName: "はじめての将棋",
    titleLines: ["将棋を、", "ゼロからやさしく。"],
    lead: "ルールがわかって、実際に将棋を指せるようになる。",
    forWhom:
      "はじめて将棋にふれる方と、家族やお子さんに将棋を教えたい方のためのアプリです。",
    shot: {
      src: `${JA_SHOTS}/2.webp`,
      alt: "駒の動きのレッスン。飛車の行ける先を自分の指でさがす画面",
    },
  },
  voice: {
    kicker: "作った人の思い",
    lines: [
      "「将棋は漢字で難しそう。覚えることが多いんでしょ？」",
      "そう思っている方に。そして女性の方にも、海外の方にも、将棋を楽しんでもらいたい。",
      "このアプリの言葉は全部、「これからも将棋を続けてほしい」という意味でできています。",
    ],
    sign: "はじめ先生",
    signSub: "全日本アマ名人・将棋教室の先生",
  },
  worries: {
    kicker: "こんな心配はいりません",
    title: "むずかしそう、を\nなくしました。",
    items: [
      {
        worry: "漢字ばかりで、難しそう。",
        answer: "最初の画面で、もう駒を動かせます。",
        body: "説明を読み切る前に、盤の上で試せます。「とりあえず駒を動かしてみたい」。その気持ちをいちばん大事にしました。読めない字があれば、こどもモードでひらがなになります。",
      },
      {
        worry: "子どもに教えたいけど、何から教えればいいか分からない。",
        answer: "教える順番は、もう決めてあります。",
        body: "教室で教えてきた順番のまま、12のレッスンを上から進むだけです。",
      },
      {
        worry: "本を読んでも、いざ盤の前に座ると手が止まる。",
        answer: "全部、自分の指で駒を動かすクイズです。",
        body: "見て覚えるのではなく、動かして覚えます。分からない時は「答え」を押すと、見本の駒が動いて教えてくれます。",
      },
    ],
  },
  steps: {
    kicker: "どう進むか",
    title: "3つの段階で、\n一局が指せるようになる。",
    lessonsLabel: "レッスン",
    items: [
      {
        no: "1",
        title: "駒を動かしてみる",
        lessons: "1 駒の動き ・ 2 駒を取る ・ 3 成る",
        body: "8種類の駒を、1つずつ動かしてみます。行けるマスをタップするだけ。駒を取ること、成ることも、盤の上で覚えます。",
        shot: {
          src: `${JA_SHOTS}/4.webp`,
          alt: "駒の動きのレッスン。角の行ける先が青い点で出る画面",
        },
        callout: {
          label: "教室で見てきたつまずき",
          body: "敵陣じゃない真ん中で成らせると、成る・成らないを勘違いする子が出てきます。だからこのアプリでは、成るのは敵陣（赤いところ）に入った時、とはっきり分けて見せます。",
        },
      },
      {
        no: "2",
        title: "王様をつかまえる形を知る",
        lessons: "4 並べ方 ・ 5 王手と詰み ・ 6 詰む形",
        body: "将棋のゴールは、相手の玉（王様）をつかまえること。並べ方を覚えたら、王手と詰み、詰む形をクイズで身につけます。",
        shot: {
          src: `${JA_SHOTS}/5.webp`,
          alt: "詰む形のレッスン。金を打って詰ます問題",
        },
      },
      {
        no: "3",
        title: "自分で一局、指してみる",
        lessons: "7 囲い ・ 8 禁じ手 ・ 9 礼とマナー ・ 10 自由に ・ 11 玉を取る ・ 12 マスの名前",
        body: "美濃・舟・カニ・矢倉の4つの囲いを自分で組み、禁じ手と対局のマナーを覚えたら、自由に指して玉を取ります。最後のチャレンジは一手詰め25問。最後まで進むと卒業証書が出て、画像にして LINE や X に送れます。",
        shot: {
          src: `${JA_SHOTS}/7.webp`,
          alt: "囲いのレッスン。美濃囲いを自分で組んだところ",
        },
      },
    ],
  },
  features: {
    kicker: "できること",
    title: "ほかにも、\nこんな楽しみが。",
    lead: "12のレッスンのほかに、こんなものも入っています。",
    items: [
      {
        title: "角と飛車、どっちが強い？",
        outcome: "盤の上を歩かせて、行けるマスを数えてみます。数えると、駒の力が目で分かります。",
        shot: { src: `${JA_SHOTS}/3.webp`, alt: "角と飛車の行けるマスを数えてくらべる画面" },
      },
      {
        title: "最後のチャレンジ 一手詰め25問",
        outcome: "12のレッスンのあとに、一手で詰ませる問題25問。最初の「解けた」を、ここで。",
        shot: { src: `${JA_SHOTS}/6.webp`, alt: "一手詰めの問題" },
      },
      {
        title: "対局のマナーも",
        outcome: "手はひざ、駒はマスの真ん中、待ったなし。盤と駒で指す日に、自信を持って座れます。",
        shot: { src: `${JA_SHOTS}/8.webp`, alt: "礼とマナーのレッスン画面" },
      },
      {
        title: "最後は卒業証書",
        outcome: "最後まで進むと卒業証書。画像にして LINE や X に送れるので、家族に見せられます。",
        shot: { src: `${JA_SHOTS}/9.webp`, alt: "卒業証書の画面" },
      },
      {
        title: "こどもモードとおとなモード",
        outcome: "こどもモードはひらがなで大きな字。お子さんが自分で読んで、自分で進められます。",
        shot: { src: `${JA_SHOTS}/10.webp`, alt: "こどもモードのホーム画面" },
      },
      {
        title: "英語に切りかえ",
        outcome: "地球のボタンで英語の表示に。日本語が読めない方とも、同じアプリで将棋を始められます。",
        shot: { src: `${EN_SHOTS}/1.webp`, alt: "英語表示のホーム画面" },
      },
      {
        title: "駒のなかま紹介",
        outcome: "9つの駒の得意なことを、格言もまじえて。駒ひとつひとつに親しみがわきます。",
      },
      {
        title: "マスの名前と言葉辞典",
        outcome: "「７六歩」のようなマスの呼び方と、将棋の言葉をいつでも引けます。本や動画がぐっと分かりやすくなります。",
      },
    ],
  },
  author: {
    kicker: "作った人",
    title: "はじめ先生が、\n自分で作りました。",
    name: "鈴木 肇",
    nameSub: "はじめ先生（すずき はじめ）",
    facts: [
      "全日本アマチュア名人（2018年・第72回）",
      "全国アマ王将（2015年・第32期）",
      "元奨励会三段",
      "将棋の本4冊（マイナビ将棋）",
      "漫画『リボーンの棋士』棋譜監修",
      "横浜と両国で将棋教室（子どもも大人も）",
      TAICHI_CH_LINE_JA,
      LAB_CH_LINE_JA,
      X_LINE_JA,
    ],
    motto: {
      label: "大事にしていること",
      words: ["挑戦", "楽しむこと", "遊び心"],
      note: "アマチュア代表としてプロの公式戦（加古川青流戦・竜王戦・棋王戦・叡王戦）に挑み、将棋の先生としてアプリ作りにも挑戦しています。",
    },
    whyTitle: "なぜ作ったか",
    whyLines: [
      "将棋を教えるとき、いちばん大事なのは「まず一番最初に何を学ぶべきか」です。そこが分かっていないと、覚えることばかり増えて、楽しくなる前に疲れてしまう。",
      "教室で子どもも大人も教えてきた順番を、そのままアプリにしました。難しそうと思っていた人が「あ、指せた」と笑ってくれたら。それがこのアプリの願いです。",
    ],
    moreLink: "はじめ先生について、くわしく",
  },
  modes: {
    kicker: "ご家族で、海外の方と",
    title: "読む人に合わせて、\n言葉が変わります。",
    cards: [
      {
        title: "ご家族で",
        body: "こどもモードにすると、言葉がひらがなに、字が大きくなります。レッスンの中身は同じ。お子さんが自分で読める大きさと言葉です。",
        shot: {
          src: `${JA_SHOTS}/10.webp`,
          alt: "こどもモードのホーム画面。ひらがなで大きな字",
        },
      },
      {
        title: "海外の方と",
        body: "地球のボタンで、英語の表示に切りかえられます。日本語が読めないご家族やお友だちとも、同じアプリで将棋を始められます。",
        shot: {
          src: `${EN_SHOTS}/1.webp`,
          alt: "英語表示のホーム画面",
        },
        linkLabel: "English page",
      },
    ],
  },
  price: {
    kicker: "値段と安心",
    title: "一度買えば、\nずっと使えます。",
    amount: "1,000円",
    amountSub: "買い切り。あとからお金はかかりません。",
    tiles: [
      { title: "広告なし", body: "レッスンの途中に広告は出ません。" },
      { title: "アプリの中での課金なし", body: "買ったあとに追加のお金はかかりません。" },
      { title: "iPhone・iPad・Android", body: "お持ちのスマホやタブレットで。" },
      { title: "ネットがなくても", body: "全部アプリの中に入っています。" },
    ],
    faqTitle: "よくある質問",
    faq: [
      {
        q: "将棋をまったく知らなくても大丈夫ですか？",
        a: "はい。駒の動きから始まります。最初のレッスンから、盤の駒を動かしながら覚えます。",
      },
      {
        q: "何が入っていますか？",
        a: "12のレッスン、最後のチャレンジの一手詰め25問、駒のなかま紹介、言葉辞典、卒業証書。全部アプリの中に入っています。",
      },
      {
        q: "こどもモードは何が変わりますか？",
        a: "レッスンの中身は同じで、言葉がひらがなに、字が大きくなります。",
      },
      {
        q: "あとからお金はかかりますか？",
        a: "かかりません。買い切り1,000円で、アプリの中での課金も広告もありません。iPhone と Android の両方で使う場合は、それぞれのストアで買います。",
      },
      {
        q: "ネットがなくても使えますか？",
        a: "はい。全部アプリの中に入っているので、ネットにつながらない場所でも使えます。",
      },
    ],
    lastCallTitle: "将棋を、はじめよう。",
    lastCallBody:
      "ルールがわかって、実際に指せるようになるまで。はじめての一局を、このアプリで。",
  },
  footer: { back: "はじめ先生のホームページへ" },
};

export const en: AppCopy = {
  lang: "en",
  path: "/hajimete-shogi/en",
  otherPath: "/hajimete-shogi",
  backHome: "Hajime-sensei's website",
  icon: "/hajimete-shogi/icon.png",
  switcher: { ja: "日本語", en: "English" },
  store: {
    appStore: "Buy on the App Store",
    appStoreHref: "https://apps.apple.com/us/app/id6826854433",
    appStoreNote: "",
    googlePlay: "Buy on Google Play",
    googlePlayHref:
      "https://play.google.com/store/apps/details?id=jp.hajimeshogi.hajimete&hl=en",
    priceLine: "One-time purchase · No ads · No in-app purchases",
    platformLine: "iPhone, iPad and Android. Works without an internet connection.",
    comingSoon: {
      badge: "Coming soon",
      appStore: "App Store",
      googlePlay: "Google Play: coming soon",
      note: "Currently in app store review. The buy buttons will go live here the moment it's released.",
      followLabel: "Get the launch news on X",
      followHref: "https://x.com/hajjme99",
    },
    midCall: "Start your shogi here.",
  },
  hero: {
    eyebrow: "A rules primer by Hajime-sensei — Hajime Suzuki, shogi teacher and Japan's amateur champion",
    appName: "Hajime's First Shogi",
    titleLines: ["Shogi from zero,", "made easy."],
    lead: "Shogi is Japanese chess — same goal, a 9×9 board, and one twist: captured pieces come back to fight for you. Learn the rules, then actually play a game.",
    forWhom:
      "For anyone meeting shogi for the first time — including chess players curious about the Japanese game — and for parents who want to teach their kids.",
    shot: {
      src: `${EN_SHOTS}/2.webp`,
      alt: "Piece moves lesson: find the squares the Rook can reach with your own finger",
    },
  },
  voice: {
    kicker: "From the maker",
    lines: [
      "“Shogi looks hard. All those kanji, so much to memorize.”",
      "If that sounds like you, I made this app for you — wherever in the world you are.",
      "Every word in this app was written with one wish: that you keep playing shogi.",
    ],
    sign: "Hajime-sensei",
    signSub: "Japan's amateur shogi champion (Amateur Meijin 2018) · shogi teacher",
  },
  worries: {
    kicker: "No need to worry",
    title: "We took the\n“too hard” out.",
    items: [
      {
        worry: "It's all kanji. It looks hard.",
        answer: "You move a piece on the very first screen.",
        body: "Want to just move a piece and see what happens? That's exactly where we start. On the lesson boards, each piece shows its English name under the kanji.",
      },
      {
        worry: "I want to teach my kids, but where do I start?",
        answer: "The order is already decided for you.",
        body: "The same order I use in my classroom, as 12 lessons you take from top to bottom.",
      },
      {
        worry: "I read the rules, but I freeze at the board.",
        answer: "Every lesson is a quiz you play with your own fingers.",
        body: "You learn by moving, not by reading. Stuck? Tap “Answer” and the pieces move to show you.",
      },
    ],
  },
  steps: {
    kicker: "How it goes",
    title: "Three stages,\nthen you play a game.",
    lessonsLabel: "Lessons",
    items: [
      {
        no: "1",
        title: "Move the pieces",
        lessons: "1 Moves · 2 Capture · 3 Promote",
        body: "Try each of the 8 kinds of pieces, one at a time. Just tap the squares it can reach. Capturing and promoting are learned on the board too.",
        shot: {
          src: `${EN_SHOTS}/4.webp`,
          alt: "Piece moves lesson: blue dots show where the Bishop can go",
        },
        callout: {
          label: "A mix-up I see in my classroom",
          body: "When kids practice promoting in the middle of the board, they start mixing up when to promote and when not to. So this app teaches promotion where it really happens: when a piece enters the promotion zone (the red area).",
        },
      },
      {
        no: "2",
        title: "Learn how to catch the King",
        lessons: "4 Setting up · 5 Checkmate · 6 Mate patterns",
        body: "The goal of shogi is to trap the other King so it cannot escape — checkmate. Set up the board, then learn check, checkmate and the basic mating patterns through quizzes.",
        shot: {
          src: `${EN_SHOTS}/5.webp`,
          alt: "Mating shapes lesson: drop the Gold to mate",
        },
      },
      {
        no: "3",
        title: "Play a game yourself",
        lessons: "7 Castles · 8 Illegal moves · 9 Manners · 10 Free play · 11 Catch the King · 12 Square names",
        body: "Build the four classic castles yourself — Mino, Boat, Crab and Yagura, the defensive formations that keep your King safe. Then learn the illegal moves and real-board manners, play freely and catch the King. The final challenge is 25 mate-in-1 puzzles. Reach the end and you graduate, with a certificate you can save as an image and share.",
        shot: {
          src: `${EN_SHOTS}/7.webp`,
          alt: "Castles lesson: the Mino castle built by the learner",
        },
      },
    ],
  },
  features: {
    kicker: "What you get",
    title: "More to enjoy\ninside.",
    lead: "Beyond the 12 lessons, here is what else you get.",
    items: [
      {
        title: "Bishop or Rook: which is stronger?",
        outcome: "Walk each piece across the board and count the squares it reaches. Counting makes a piece's power easy to see.",
        shot: { src: `${EN_SHOTS}/3.webp`, alt: "Counting the squares the Bishop and the Rook can reach" },
      },
      {
        title: "Final challenge: 25 mate-in-1 puzzles",
        outcome: "After the 12 lessons, 25 puzzles where one move mates. Your first “I solved it” happens here.",
        shot: { src: `${EN_SHOTS}/6.webp`, alt: "A mate-in-1 puzzle" },
      },
      {
        title: "Manners for a real board, too",
        outcome: "Hands in your lap, pieces in the middle of the square, no take-backs. Sit down at a real board with confidence.",
        shot: { src: `${EN_SHOTS}/8.webp`, alt: "The manners lesson" },
      },
      {
        title: "Finish with a certificate",
        outcome: "Reach the end and you get a certificate you can save as an image and share with family and friends.",
        shot: { src: `${EN_SHOTS}/9.webp`, alt: "The certificate screen" },
      },
      {
        title: "Kids mode and adult mode",
        outcome: "Kids mode (Japanese display only) shows the text in hiragana with big letters, so a child can read and go on alone.",
        shot: { src: `${JA_SHOTS}/10.webp`, alt: "Kids mode home screen" },
      },
      {
        title: "English and Japanese",
        outcome: "Tap the globe to switch. Learn in English, and see the Japanese any time you like.",
        shot: { src: `${JA_SHOTS}/1.webp`, alt: "The home screen in Japanese" },
      },
      {
        title: "Meet the pieces",
        outcome: "What each piece is good at — all 8 pieces plus the promoted Pawn — with classic shogi proverbs along the way.",
      },
      {
        title: "Square names and a glossary",
        outcome: "How squares are named, and the words of shogi, always one tap away. Books and videos get much easier to follow.",
      },
    ],
  },
  author: {
    kicker: "Who made it",
    title: "Made by the teacher\nhimself.",
    name: "Hajime Suzuki",
    nameSub: "Hajime-sensei · 鈴木 肇",
    facts: [
      "Amateur Meijin 2018 — winner of the 72nd All-Japan Amateur Meijin, Japan's national amateur championship",
      "Amateur Osho 2015 — winner of the 32nd national Amateur Osho championship",
      "Reached 3-dan in the Shoreikai, the Japan Shogi Association's professional training league",
      "Author of four shogi books (published by Mynavi)",
      "Game records consultant for the manga “Reborn no Kishi”",
      "Teaches kids and adults at his shogi classes in Yokohama and Ryogoku, Tokyo",
      TAICHI_CH_LINE_EN,
      LAB_CH_LINE_EN,
      X_LINE_EN,
    ],
    motto: {
      label: "What he lives by",
      words: ["Challenge", "Enjoy the game", "Playfulness"],
      note: "His motto: always take on the challenge, enjoy the game, and keep a sense of play. He has faced professionals in official tournaments as an amateur representative (Kakogawa Seiryu, Ryuo, Kio and Eio), and now he is taking on app-making, too.",
    },
    whyTitle: "Why I made it",
    whyLines: [
      "When you teach shogi, the most important question is: what should you learn first? Get that wrong and the rules pile up, and people get tired before the fun begins.",
      "I put the exact order I use with children and adults in my classroom into this app. If someone who thought shogi was too hard smiles and says “I just played a game,” that is what this app is for.",
    ],
    moreLink: "More about Hajime-sensei",
  },
  modes: {
    kicker: "Two languages, and a mode for kids",
    title: "The words change\nto fit the reader.",
    cards: [
      {
        title: "For families",
        body: "Kids mode (Japanese display only) switches the text to hiragana with big letters — the same lessons, in words a child can read alone.",
        shot: {
          src: `${JA_SHOTS}/10.webp`,
          alt: "Kids mode home screen in hiragana with big letters",
        },
      },
      {
        title: "English and Japanese",
        body: "Tap the globe button to switch the app between English and Japanese. On the lesson boards, piece names appear in English under the kanji, so you pick up the real characters as you play.",
        shot: {
          src: `${JA_SHOTS}/1.webp`,
          alt: "The same home screen in Japanese",
        },
        linkLabel: "日本語のページ",
      },
    ],
  },
  price: {
    kicker: "Price and peace of mind",
    title: "Buy once,\nkeep it forever.",
    amount: "¥1,000",
    amountSub:
      "One-time purchase (price in Japan; your store shows it in your currency). Nothing more to pay later.",
    tiles: [
      { title: "No ads", body: "Nothing interrupts a lesson." },
      { title: "No in-app purchases", body: "Nothing more to pay after you buy." },
      { title: "iPhone, iPad and Android", body: "On the phone or tablet you already have." },
      { title: "Works offline", body: "Everything is inside the app." },
    ],
    faqTitle: "Common questions",
    faq: [
      {
        q: "I know nothing about shogi. Is that OK?",
        a: "Yes. It starts with how the pieces move, and you learn by moving pieces on the board from the very first lesson.",
      },
      {
        q: "What is inside?",
        a: "12 lessons, a final challenge of 25 mate-in-1 puzzles, a guide to the pieces, a glossary and a certificate. All of it is inside the app.",
      },
      {
        q: "What does kids mode change?",
        a: "The lessons stay the same; the Japanese text becomes hiragana with bigger letters.",
      },
      {
        q: "Will I have to pay again later?",
        a: "No. It's a one-time purchase with no in-app purchases and no ads. The Apple and Google stores are separate, so if you want it on both an iPhone and an Android device, you buy it once in each store.",
      },
      {
        q: "Does it work without internet?",
        a: "Yes. Everything is inside the app, so it works where there is no connection.",
      },
    ],
    lastCallTitle: "Your first game of shogi starts here.",
    lastCallBody:
      "From the rules to your first real game. Start your shogi here.",
  },
  footer: { back: "Back to Hajime-sensei's website" },
};
