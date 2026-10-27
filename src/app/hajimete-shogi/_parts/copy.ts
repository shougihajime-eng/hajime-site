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
      appStore: "App Store（近日発売）",
      googlePlay: "Google Play（近日発売）",
      note: "いまストアの審査中です。発売しだい、ここから買えるようになります。",
    },
  },
  hero: {
    eyebrow: "将棋教室のはじめ先生が作った、ルールの入門アプリ",
    appName: "はじめての将棋",
    titleLines: ["将棋を、", "ゼロからやさしく。"],
    lead: "ルールがわかって、実際に将棋を指せるようになる。",
    forWhom:
      "はじめて将棋にふれる方と、家族やお子さんに将棋を教えたい方のためのアプリです。",
    shot: {
      src: `${JA_SHOTS}/1.webp`,
      alt: "はじめての将棋のホーム画面。11のレッスンが駒の形で並んでいる",
    },
  },
  voice: {
    kicker: "作った人の思い",
    lines: [
      "「将棋は漢字で難しそう。覚えることが多いんでしょ？」",
      "そう思っている方に、女性の方に、海外の方に、将棋を楽しんでもらいたい。",
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
        body: "駒の動き、駒を取る、成る、並べ方、王手と詰み、詰む形、囲い、禁じ手、礼、自由に、玉を取る。教室で教えてきた順番のまま、11のレッスンを上から進むだけです。",
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
          src: `${JA_SHOTS}/2.webp`,
          alt: "駒の動きのレッスン。飛車の行ける先を3つ探す問題",
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
        body: "将棋のゴールは、相手の玉（王様）をつかまえること。並べ方を覚えたら、王手と詰み、詰む形をクイズで身につけます。一手詰めの練習10問つき。",
        shot: {
          src: `${JA_SHOTS}/4.webp`,
          alt: "詰む形のレッスン。金を打って詰ます問題",
        },
      },
      {
        no: "3",
        title: "自分で一局、指してみる",
        lessons: "7 囲い ・ 8 禁じ手 ・ 9 礼 ・ 10 自由に ・ 11 玉を取る",
        body: "美濃・舟・カニ・矢倉の4つの囲いを自分で組み、禁じ手と礼を覚えたら、自由に指してみます。最後に玉を取れたら卒業。卒業証書が出て、画像にして LINE や X に送れます。",
        shot: {
          src: `${JA_SHOTS}/6.webp`,
          alt: "囲いのレッスン。美濃囲いを自分で組んだところ",
        },
      },
    ],
  },
  features: {
    kicker: "できること",
    title: "入っているもの、\nぜんぶ。",
    lead: "機能の名前より、「それで何ができるようになるか」。写真といっしょにどうぞ。",
    items: [
      {
        title: "11のレッスン",
        outcome:
          "駒の動きから玉を取るまで、上から順に進むだけ。終わるころには、一局が指せるようになっています。",
        shot: { src: `${JA_SHOTS}/1.webp`, alt: "11のレッスンが並ぶホーム画面" },
        chips: [
          "駒の動き",
          "駒を取る",
          "成る",
          "並べ方",
          "王手と詰み",
          "詰む形",
          "囲い",
          "禁じ手",
          "礼",
          "自由に",
          "玉を取る",
        ],
      },
      {
        title: "盤の駒を自分で動かすクイズ",
        outcome: "どのレッスンも、読むだけでは終わりません。指で動かすから、体で覚えられます。",
        shot: { src: `${JA_SHOTS}/2.webp`, alt: "駒を動かして覚えるクイズ" },
      },
      {
        title: "分からない時は「答え」",
        outcome: "押すと見本の駒が動いて教えてくれます。詰まっても、止まらずに進めます。",
        shot: { src: `${JA_SHOTS}/3.webp`, alt: "答えを押すと見本の駒が動く画面" },
      },
      {
        title: "詰む形もクイズで",
        outcome: "王手と詰み、詰む形を自分の手で。王様をつかまえる形が、見ただけで分かるようになります。",
        shot: { src: `${JA_SHOTS}/4.webp`, alt: "詰む形のクイズ" },
      },
      {
        title: "一手詰めの練習10問",
        outcome: "レッスンのあとに、腕だめし。最初の「解けた」を、ここで。",
        shot: { src: `${JA_SHOTS}/5.webp`, alt: "一手詰めの練習問題" },
      },
      {
        title: "囲いを自分で組む",
        outcome: "美濃・舟・カニ・矢倉の4つ。自分の王様を守る形を、自分の手で作れるようになります。",
        shot: { src: `${JA_SHOTS}/6.webp`, alt: "美濃囲いを組む画面" },
      },
      {
        title: "最後は卒業証書",
        outcome: "全部のレッスンを終えると卒業証書。画像にして LINE や X に送れるので、家族に見せられます。",
        shot: { src: `${JA_SHOTS}/7.webp`, alt: "卒業証書の画面" },
      },
      {
        title: "こどもモードとおとなモード",
        outcome: "こどもモードはひらがなで大きな字。お子さんが自分で読んで、自分で進められます。",
        shot: { src: `${JA_SHOTS}/8.webp`, alt: "こどもモードのホーム画面" },
      },
      {
        title: "英語に切りかえ",
        outcome: "地球のボタンで英語の表示に。日本語が読めない方とも、同じアプリで将棋を始められます。",
        shot: { src: `${EN_SHOTS}/1.webp`, alt: "英語表示のホーム画面" },
      },
      {
        title: "マスの名前と言葉辞典",
        outcome: "「７六歩」のようなマスの呼び方と、将棋の言葉をいつでも引けます。本や動画がぐっと分かりやすくなります。",
      },
      {
        title: "ネットがなくても全部使える",
        outcome: "レッスンも練習も、全部アプリの中。電車の中でも、旅先でも。",
      },
      {
        title: "広告なし・1回買えばずっと",
        outcome: "途中で広告は出ません。アプリの中での課金もなし。買い切り1,000円で、ずっと使えます。",
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
      "漫画『リボーンの棋士』監修",
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
          src: `${JA_SHOTS}/8.webp`,
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
        a: "11のレッスン、一手詰めの練習10問、マスの名前、言葉辞典、卒業証書。全部アプリの中に入っています。",
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
    priceLine: "One-time purchase · Buy once, keep it forever · No ads",
    platformLine: "iPhone, iPad and Android. Works without an internet connection.",
    comingSoon: {
      badge: "Coming soon",
      appStore: "App Store (coming soon)",
      googlePlay: "Google Play (coming soon)",
      note: "Now in store review. You will be able to buy it here as soon as it is released.",
    },
  },
  hero: {
    eyebrow: "A rules primer made by Hajime-sensei, a shogi school teacher",
    appName: "Hajime's First Shogi",
    titleLines: ["Shogi from zero,", "made easy."],
    lead: "Learn the rules, then actually play a game.",
    forWhom:
      "For anyone meeting shogi (Japanese chess) for the first time, and for anyone who wants to teach their family or kids.",
    shot: {
      src: `${EN_SHOTS}/1.webp`,
      alt: "Home screen of Hajime's First Shogi with 11 lessons shaped like shogi pieces",
    },
  },
  voice: {
    kicker: "From the maker",
    lines: [
      "“Shogi looks hard. All those kanji, so much to memorize.”",
      "If that is you, I made this for you — in Japan and anywhere in the world.",
      "Every word in this app was written with one wish: that you keep playing shogi.",
    ],
    sign: "Hajime-sensei",
    signSub: "All-Japan Amateur Meijin · shogi school teacher",
  },
  worries: {
    kicker: "No need to worry",
    title: "We took the\n“too hard” out.",
    items: [
      {
        worry: "It's all kanji. It looks hard.",
        answer: "You move a piece on the very first screen.",
        body: "You can try things on the board before you finish reading. “I just want to move a piece first” — that feeling comes first here. Every piece shows its English name under the kanji.",
      },
      {
        worry: "I want to teach my kids, but where do I start?",
        answer: "The order is already decided for you.",
        body: "Moves, Capture, Promote, Setting up, Checkmate, Mate patterns, Castles, Illegal moves, Manners, Free play, Catch the King. The same order I use in my classroom, as 11 lessons from top to bottom.",
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
          src: `${EN_SHOTS}/2.webp`,
          alt: "Piece moves lesson: find the three squares the Rook can reach",
        },
        callout: {
          label: "A mix-up I see in my classroom",
          body: "When kids practice promoting in the middle of the board, they start to confuse promote and don't promote. So this app shows promotion clearly where it really happens: when a piece enters the promotion zone (the red area).",
        },
      },
      {
        no: "2",
        title: "Learn how to catch the King",
        lessons: "4 Setting up · 5 Checkmate · 6 Mate patterns",
        body: "The goal of shogi is to catch the other King. Set up the board, then learn check, checkmate and mating patterns through quizzes. 10 mate-in-1 puzzles are included.",
        shot: {
          src: `${EN_SHOTS}/4.webp`,
          alt: "Mating shapes lesson: drop the Gold to mate",
        },
      },
      {
        no: "3",
        title: "Play a game yourself",
        lessons: "7 Castles · 8 Illegal moves · 9 Manners · 10 Free play · 11 Catch the King",
        body: "Build the four castles yourself (Mino, Boat, Crab and Yagura), learn the illegal moves and the manners, then play freely. Catch the King and you graduate, with a certificate you can share as an image on LINE or X.",
        shot: {
          src: `${EN_SHOTS}/6.webp`,
          alt: "Castles lesson: the Mino castle built by the learner",
        },
      },
    ],
  },
  features: {
    kicker: "What you get",
    title: "Everything inside,\nall of it.",
    lead: "Less about feature names, more about what you can do afterwards. With the screens to match.",
    items: [
      {
        title: "11 lessons",
        outcome:
          "From how the pieces move to catching the King, just go top to bottom. By the end, you can play a game.",
        shot: { src: `${EN_SHOTS}/1.webp`, alt: "Home screen with the 11 lessons" },
        chips: [
          "Moves",
          "Capture",
          "Promote",
          "Setting up",
          "Checkmate",
          "Mate patterns",
          "Castles",
          "Illegal moves",
          "Manners",
          "Free play",
          "Catch the King",
        ],
      },
      {
        title: "Quizzes where you move the pieces",
        outcome: "No lesson is just reading. You move the pieces with your finger, so it sticks.",
        shot: { src: `${EN_SHOTS}/2.webp`, alt: "Learn by moving pieces" },
      },
      {
        title: "Stuck? Tap “Answer”",
        outcome: "The pieces move to show you. You never get stuck for long.",
        shot: { src: `${EN_SHOTS}/3.webp`, alt: "Tap Answer and the pieces show the way" },
      },
      {
        title: "Checkmate as quizzes",
        outcome: "Check, checkmate and mating patterns, by hand. You start to see how a King gets caught.",
        shot: { src: `${EN_SHOTS}/4.webp`, alt: "Checkmate quizzes" },
      },
      {
        title: "10 mate-in-1 puzzles",
        outcome: "A little test after the lessons. Your first “I solved it” happens here.",
        shot: { src: `${EN_SHOTS}/5.webp`, alt: "Mate-in-1 puzzles" },
      },
      {
        title: "Build your own castle",
        outcome: "Mino, Boat, Crab and Yagura. You learn to build a shape that keeps your King safe.",
        shot: { src: `${EN_SHOTS}/6.webp`, alt: "Building the Mino castle" },
      },
      {
        title: "Finish with a certificate",
        outcome: "Complete all the lessons and you get a certificate you can share as an image on LINE or X.",
        shot: { src: `${EN_SHOTS}/7.webp`, alt: "The certificate screen" },
      },
      {
        title: "Kids mode and adult mode",
        outcome: "Kids mode shows the Japanese text in hiragana with big letters, so a child can read and go on alone.",
        shot: { src: `${JA_SHOTS}/8.webp`, alt: "Kids mode home screen" },
      },
      {
        title: "English and Japanese",
        outcome: "Tap the globe to switch. Learn in English, and see the Japanese any time you like.",
        shot: { src: `${JA_SHOTS}/1.webp`, alt: "The home screen in Japanese" },
      },
      {
        title: "Square names and a glossary",
        outcome: "How squares are named, and the words of shogi, always one tap away. Books and videos get much easier to follow.",
      },
      {
        title: "Works fully offline",
        outcome: "Lessons and puzzles are all inside the app. On a train, on a plane, anywhere.",
      },
      {
        title: "No ads. Buy once, keep it forever.",
        outcome: "Nothing interrupts a lesson, and there are no in-app purchases. One price, yours for good.",
      },
    ],
  },
  author: {
    kicker: "Who made it",
    title: "Made by Hajime-sensei\nhimself.",
    name: "Hajime Suzuki",
    nameSub: "Hajime-sensei · 鈴木 肇",
    facts: [
      "All-Japan Amateur Meijin (2018, 72nd)",
      "National Amateur Osho (2015, 32nd)",
      "Former Shoreikai 3-dan (the professional training league)",
      "Author of 4 shogi books (Mynavi Shogi)",
      "Supervisor of the manga “Reborn no Kishi”",
      "Teaches children and adults at shogi schools in Yokohama and Ryogoku, Tokyo",
      TAICHI_CH_LINE_EN,
      LAB_CH_LINE_EN,
      X_LINE_EN,
    ],
    motto: {
      label: "What he lives by",
      words: ["Challenge", "Enjoy the game", "Playfulness"],
      note: "His motto: always take on the challenge, enjoy the game, and keep a sense of play. He has faced professionals in official tournaments as an amateur representative (Kakogawa Seiryu, Ryuo, Kio and Eio), and now takes on app-making as a shogi teacher.",
    },
    whyTitle: "Why I made it",
    whyLines: [
      "When you teach shogi, the most important question is: what should you learn first? Get that wrong and the rules pile up, and people get tired before the fun begins.",
      "I put the exact order I use with children and adults in my classroom into this app. If someone who thought shogi was too hard smiles and says “I just played a game,” that is what this app is for.",
    ],
    moreLink: "More about Hajime-sensei",
  },
  modes: {
    kicker: "For families, in two languages",
    title: "The words change\nto fit the reader.",
    cards: [
      {
        title: "For families",
        body: "Kids mode switches the Japanese text to hiragana with big letters. Same lessons, in words and sizes a child can read alone. (Kids mode is for the Japanese display.)",
        shot: {
          src: `${JA_SHOTS}/8.webp`,
          alt: "Kids mode home screen in hiragana with big letters",
        },
      },
      {
        title: "English and Japanese",
        body: "Tap the globe button to switch the app between English and Japanese. Piece names appear in English under the kanji, so you pick up the real characters as you play.",
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
    faqTitle: "Questions people ask",
    faq: [
      {
        q: "I know nothing about shogi. Is that OK?",
        a: "Yes. It starts with how the pieces move, and you learn by moving pieces on the board from the very first lesson.",
      },
      {
        q: "What is inside?",
        a: "11 lessons, 10 mate-in-1 puzzles, square names, a glossary and a certificate. All of it is inside the app.",
      },
      {
        q: "What does kids mode change?",
        a: "The lessons stay the same; the Japanese text becomes hiragana with bigger letters.",
      },
      {
        q: "Will I have to pay again later?",
        a: "No. It is a one-time purchase with no in-app purchases and no ads. If you want it on both iPhone and Android, you buy it in each store.",
      },
      {
        q: "Does it work without internet?",
        a: "Yes. Everything is inside the app, so it works where there is no connection.",
      },
    ],
    lastCallTitle: "Let's start shogi.",
    lastCallBody:
      "From the rules to your first real game. Your first shogi, with this app.",
  },
  footer: { back: "Back to Hajime-sensei's website" },
};
