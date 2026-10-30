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

// 投稿前チェック。問題があればメッセージ文字列、OKなら null を返す。
// 実際の投稿は comentoscript/minna.js が行う（このファイルは submit を直接扱わない）
window.ngcomentoCheck = function (username, comment) {
  const now = Date.now();
  if (!username || !comment) return "ユーザーネームとコメントを入力してください。";
  if (comment.replace(/\s/g, "").length === 0) return "空白のみのコメントは投稿できません。";
  if (comment.split("\n").length > 10) return "改行が多すぎます。10行以内で投稿してください。";
  if (containsBannedWord(comment) || containsBannedWord(username))
    return "不適切な内容が含まれています。修正してください。";
  if (username.length > 20) return "ユーザーネームは20文字以内で入力してください。";
  if (comment.length > 300) return "コメントは300文字以内で入力してください。";
  if (comment === lastCommentContent) return "同じコメントを連続して投稿することはできません。";
  if (now - lastPostTime < 30000) return "連続投稿は30秒空けてください。";
  postTimestamps = postTimestamps.filter((ts) => now - ts < 60000);
  if (postTimestamps.length >= 3) return "短時間に投稿しすぎています。しばらく待ってください。";
  lastPostTime = now;
  lastCommentContent = comment;
  postTimestamps.push(now);
  return null;
};

window.ngcomentoIsBanned = containsBannedWord;
