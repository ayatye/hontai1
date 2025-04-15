// script.js
document.addEventListener("DOMContentLoaded", function() {
    const penRanking = [
        { img: "pen1.jpg", title: "幻想のペン先", desc: "光と影のバランスが絶妙で、幻想的な演出に最適。", link: "#" },
        { img: "pen2.jpg", title: "劇作家のペン先", desc: "物語性を重視した表現が可能で、カット割りの演出にもおすすめ。", link: "#" }
    ];

    const characterRanking = [
        { img: "character1.jpg", title: "写真家（ジョゼフ）", desc: "カメラワークを活かしたシーン作りと、視点の切り替え練習に最適。", link: "#" },
        { img: "character2.jpg", title: "使徒（アン）", desc: "猫の操作や追跡スキルを駆使した演出で、より戦略的な視点を学べる。", link: "#" }
    ];

    function generateRanking(containerId, rankingData) {
        const container = document.getElementById(containerId);
        rankingData.forEach(item => {
            const rankingItem = document.createElement("div");
            rankingItem.classList.add("ranking-item");
            rankingItem.innerHTML = `
                <img src="${item.img}" alt="${item.title}">
                <div class="ranking-text">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <a href="${item.link}">詳細を見る</a>
                </div>
            `;
            container.appendChild(rankingItem);
        });
    }

    generateRanking("pen-ranking", penRanking);
    generateRanking("character-ranking", characterRanking);
});
