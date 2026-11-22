/* Add games here; app.js renders cards and the how-to dialog from this data. */
window.games = [
  {
    id: "nazori",
    title: "なぞり書きゲーム",
    subtitle: "Nazori",
    category: "creative",
    categoryLabel: "かく・つくる",
    ageLabel: "3〜6さい",
    ageMin: 3,
    ageMax: 6,
    icon: "tracing",
    status: "available",
    url: "https://hosoden.github.io/Nazori/",
    description: "ガイドの線をなぞって、ひらがなや形を書く練習をしよう。",
    howTo: [
      "ゲームを開き、画面に表示された文字や形を選びます。",
      "お手本の線を見ながら、指やマウスでゆっくりなぞります。",
      "できたら次の問題へ。急がず、自分のペースでくり返してみましょう。"
    ],
    skills: [
      "線を目で追って手を動かすことで、運筆力や手と目の協応を育みます。",
      "文字の形や書き順にふれることで、ひらがなへの興味につながります。",
      "最後までやりきる経験が、集中力や「できた！」という自信を後押しします。"
    ],
    parentTip: "最初は大きな画面で、姿勢や画面との距離を確認しながら遊ぶのがおすすめです。"
  },
  {
    id: "meiro",
    title: "めいろゲーム",
    subtitle: "Meiro",
    category: "puzzle",
    categoryLabel: "めいろ・パズル",
    ageLabel: "4〜8さい",
    ageMin: 4,
    ageMax: 8,
    icon: "maze",
    status: "available",
    url: "https://hosoden.github.io/Meiro/",
    description: "スタートからゴールまで、道を見つけて進んでみよう。",
    howTo: [
      "ゲームを開いて、遊びたいめいろを選びます。",
      "スタートからゴールまでつながる道を探し、画面の案内に沿って進みます。",
      "行き止まりに着いたら、少し戻って別の道を試してみましょう。"
    ],
    skills: [
      "道のつながりを考えることで、空間認識力や見通しを立てる力を育みます。",
      "いくつかの道を比べる体験が、考える力や問題解決の練習になります。",
      "迷っても試し直すことで、粘り強さや試行錯誤する姿勢を応援します。"
    ],
    parentTip: "行き止まりも大切な発見です。「次はどっちへ行ってみよう？」と声をかけてみてください。"
  },
  {
    id: "coming-color",
    title: "いろあそび（準備中）",
    subtitle: "Color Play",
    category: "coming-soon",
    categoryLabel: "これから登場",
    ageLabel: "3〜6さい（予定）",
    ageMin: 3,
    ageMax: 6,
    icon: "color",
    status: "coming-soon",
    description: "色を選んで、すきな絵をカラフルに仕上げるゲームを準備中です。",
    howTo: [
      "このゲームは現在準備中です。公開したら、色を選ぶところから遊べる予定です。",
      "好きな色を組み合わせて、自分だけの絵を作る遊びを計画しています。"
    ],
    skills: [
      "色の違いや組み合わせに気づき、色彩感覚を楽しみながら育みます。",
      "好きな色を選ぶ経験を通して、自分のイメージを表現する力につながります。"
    ],
    parentTip: "対象年齢や遊び方は、ゲーム公開時にあらためてご案内します。"
  },
  {
    id: "coming-shape",
    title: "かたちパズル（準備中）",
    subtitle: "Shape Puzzle",
    category: "coming-soon",
    categoryLabel: "これから登場",
    ageLabel: "5〜8さい（予定）",
    ageMin: 5,
    ageMax: 8,
    icon: "shapes",
    status: "coming-soon",
    description: "形を組み合わせて、お題のシルエットを作るパズルを準備中です。",
    howTo: [
      "このゲームは現在準備中です。公開したら、形を動かしてお題に合わせる予定です。",
      "向きを変えたり場所を調整したりしながら、ぴったりの組み合わせを探します。"
    ],
    skills: [
      "形や向き、位置を考えることで、図形感覚や空間認識力を育みます。",
      "試しながら答えを探す体験が、観察力や考える力を応援します。"
    ],
    parentTip: "対象年齢や遊び方は、ゲーム公開時にあらためてご案内します。"
  }
];
