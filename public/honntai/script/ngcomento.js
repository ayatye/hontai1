const bannedWords = [
  // 一般的な暴言・侮辱
  "ばか",
  "アホ",
  "くそ",
  "しね",
  "死ね",
  "うざい",
  "キモい",
  "キモ",
  "ボケ",
  "カス",
  "消えろ",
  "ブス",
  "デブ",
  "ガリ",
  "まぬけ",
  "能無し",
  "低脳",
  "ハゲ",
  "クズ",
  "ババア",
  "ジジイ",
  "ガキ",

  // 性的な内容
  "エロ",
  "セックス",
  "ちんこ",
  "まんこ",
  "やりたい",
  "ハメ",
  "レイプ",
  "変態",
  "ヌード",
  "裸",
  "自慰",
  "フェラ",
  "オナニー",
  "勃起",
  "射精",
  "乳首",
  "パイズリ",
  "挿入",
  "中出し",
  "処女",

  // 差別・ヘイト
  "障害者",
  "池沼",
  "キチガイ",
  "ホモ",
  "レズ",
  "チョン",
  "在日",
  "部落",
  "黒人",
  "差別",

  // 英語の卑語
  "fuck",
  "shit",
  "bitch",
  "asshole",
  "bastard",
  "nigger",
  "slut",
  "whore",
  "dick",
  "pussy",
  "faggot",
  "cunt",
  "rape",
  "nude",
  "kill",
  "die",
  "suck",
  "stupid",
  "retard",

  // 荒らしによく使われる絵文字など
  "💩",
  "👎",
  "🖕",

  // 政治・宗教・国家関連（炎上防止）
  "右翼",
  "左翼",
  "ネトウヨ",
  "パヨク",
  "保守",
  "革新",
  "政治",
  "選挙",
  "政党",
  "自民",
  "共産",
  "民主",
  "習近平",
  "プーチン",
  "ゼレンスキー",
  "安倍",
  "岸田",
  "天皇",
  "皇室",
  "北朝鮮",
  "中国",
  "韓国",
  "ロシア",
  "戦争",
  "大日本帝国",
  "大東亜",
  "植民地",
  "核兵器",
  "原爆",
  "南京",
  "慰安婦",
  "竹島",
  "尖閣",

  // 英語ベースの政治・宗教・差別ワード
  "allah",
  "jihad",
  "zion",
  "jew",
  "muslim",
  "christian",
  "satan",
  "cult",
  "bible",
  "terrorist",
  "communism",
  "capitalism",
  "leftist",
  "rightist",
  "democrat",
  "republican",
  "trump",
  "biden",
  "putin",
  "xi jinping",
  "war",
  "nazi",
  "hitler",
  "holocaust",
  "genocide",
  "propaganda",
];

// NGワードを検出（伏せ字など対応）
function containsBannedWord(text) {
  const normalized = text.toLowerCase().replace(/\s|\*/g, ""); // 空白や「*」除去
  return bannedWords.some((word) => normalized.includes(word));
}

// 投稿制限用の変数
let lastPostTime = 0;
let lastCommentContent = "";
let postTimestamps = [];

document
  .getElementById("comment-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username-input").value.trim();
    const comment = document.getElementById("comment-input").value.trim();
    const now = Date.now();

    // 入力チェック
    if (!username || !comment) {
      alert("ユーザーネームとコメントを入力してください。");
      return;
    }

    // 空白のみチェック
    if (comment.replace(/\s/g, "").length === 0) {
      alert("空白のみのコメントは投稿できません。");
      return;
    }

    // 改行制限
    if (comment.split("\n").length > 10) {
      alert("改行が多すぎます。10行以内で投稿してください。");
      return;
    }

    // NGワード検出（ユーザーネームも含む）
    if (containsBannedWord(comment) || containsBannedWord(username)) {
      alert("不適切な内容が含まれています。修正してください。");
      return;
    }

    // 文字数制限
    if (comment.length > 300) {
      alert("コメントは300文字以内で入力してください。");
      return;
    }

    // 同一コメント防止
    if (comment === lastCommentContent) {
      alert("同じコメントを連続して投稿することはできません。");
      return;
    }

    // 30秒以内の連投防止
    if (now - lastPostTime < 30000) {
      alert("連続投稿は30秒空けてください。");
      return;
    }

    // 1分間に3件以上の投稿を制限
    postTimestamps = postTimestamps.filter((ts) => now - ts < 60000);
    if (postTimestamps.length >= 3) {
      alert("短時間に投稿しすぎています。しばらく待ってください。");
      return;
    }

    // 通過した場合の処理
    lastPostTime = now;
    lastCommentContent = comment;
    postTimestamps.push(now);

    await addDoc(commentsRef, {
      username: username,
      comment: comment,
      timestamp: serverTimestamp(),
    });

    // 入力欄クリア＆再読み込み
    document.getElementById("username-input").value = "";
    document.getElementById("comment-input").value = "";
    loadComments();
  });
