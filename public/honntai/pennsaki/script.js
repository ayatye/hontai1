// script.js
document.addEventListener("DOMContentLoaded", function () {
  const penRanking = [
    {
      img: "../images/pennsaki/bonnbonnsakka.jpeg",
      title: "ボンボンサッカー",
      desc: "ボンボンをスタンサバイバーで相手のゴールまで運んでいき、ゴールに決めれば勝ち",
    },
    {
      img: "../images/pennsaki/nihati.jpeg",
      title: "2vs8・・・8HUNTERS",
      desc: "ハンター8対サバイバー2のモード、アイテムを駆使して死闘を繰り返す",
    },
    {
      img: "../images/pennsaki/kottou.jpeg",
      title: "ハンター骨董商参上！！",
      desc: "骨董商がハンターになって追いかけてくる。骨董商の攻撃を当たらずに逃げ切れるか",
    },
    {
      img: "../images/pennsaki/anngou.jpeg",
      title: "快楽暗号機",
      desc: "ただただ暗号機を上げていけるという気持ちよくなれるモード",
    },
    {
      img: "../images/pennsaki/taimann.jpeg",
      title: "タックルデスマッチ",
      desc: "オフェンスとピエロで先にスタンさせた方の勝利！",
    },
  ];

  const characterRanking = [
    {
      img: "../images/pennsaki/doukesi.jpeg",
      title: "ピエロカート！！",
      desc: "ピエロを止まらずに通り抜けられるか！？",
    },
    {
      img: "../images/pennsaki/youhei.jpeg",
      title: "傭兵肘当てレース",
      desc: "傭兵の肘当てを上手に決め一位を狙え！",
    },
    {
      img: "../images/pennsaki/ripa.jpeg",
      title: "jackZuma",
      desc: "リッパーの霧をよけながら、ゴールを目指す",
    },
    {
      img: "../images/pennsaki/omotya.jpeg",
      title: "おもちゃで天まで登れ！",
      desc: "板車を使って天まで目指していく！",
    },
    {
      img: "../images/pennsaki/ofensu.jpeg",
      title: "オフェンス爽快run",
      desc: "オフェンスのボールを途切れさすことなくクリアできるか！？",
    },
  ];

  function generateRanking(containerId, rankingData) {
    const container = document.getElementById(containerId);
    rankingData.forEach((item) => {
      const rankingItem = document.createElement("div");
      rankingItem.classList.add("ranking-item");
      rankingItem.innerHTML = `
                <img src="${item.img}" alt="${item.title}">
                <div class="ranking-text">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            `;
      container.appendChild(rankingItem);
    });
  }

  generateRanking("pen-ranking", penRanking);
  generateRanking("character-ranking", characterRanking);
});
