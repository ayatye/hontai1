// サバイバーリスト
const survivors = [
    { name: "弁護士", img: "images/lawyer.jpg", url: "lawyer.html" },
    { name: "泥棒", img: "images/thief.jpg", url: "thief.html" },
    { name: "庭師", img: "images/gardener.jpg", url: "gardener.html" },
    { name: "マジシャン", img: "images/magician.jpg", url: "magician.html" },
    { name: "冒険家", img: "images/explorer.jpg", url: "explorer.html" },
    { name: "傭兵", img: "images/mercenary.jpg", url: "mercenary.html" },
    { name: "祭司", img: "images/priestess.jpg", url: "priestess.html" },
    { name: "空軍", img: "images/coordinator.jpg", url: "coordinator.html" },
    { name: "機械技師", img: "images/mechanic.jpg", url: "mechanic.html" },
    { name: "オフェンス", img: "images/forward.jpg", url: "forward.html" },
    { name: "心眼", img: "images/mindseye.jpg", url: "mindseye.html" },
    { name: "調香師", img: "images/perfumer.jpg", url: "perfumer.html" },
    { name: "カウボーイ", img: "images/cowboy.jpg", url: "cowboy.html" },
    { name: "踊り子", img: "images/dancer.jpg", url: "dancer.html" },
    { name: "占い師", img: "images/seer.jpg", url: "seer.html" },
    { name: "納棺師", img: "images/embalmer.jpg", url: "embalmer.html" },
    { name: "探鉱者", img: "images/prospector.jpg", url: "prospector.html" },
    { name: "呪術師", img: "images/enchantress.jpg", url: "enchantress.html" },
    { name: "野人", img: "images/wildling.jpg", url: "wildling.html" },
    { name: "曲芸師", img: "images/acrobat.jpg", url: "acrobat.html" },
    { name: "一等航海士", img: "images/firstofficer.jpg", url: "firstofficer.html" },
    { name: "バーメイド", img: "images/barmaid.jpg", url: "barmaid.html" },
    { name: "ポストマン", img: "images/postman.jpg", url: "postman.html" },
    { name: "墓守", img: "images/gravekeeper.jpg", url: "gravekeeper.html" },
    { name: "囚人", img: "images/prisoner.jpg", url: "prisoner.html" },
    { name: "昆虫学者", img: "images/entomologist.jpg", url: "entomologist.html" },
    { name: "画家", img: "images/painter.jpg", url: "painter.html" },
    { name: "バッツマン", img: "images/batter.jpg", url: "batter.html" },
    { name: "玩具職人", img: "images/toymerchant.jpg", url: "toymerchant.html" },
    { name: "患者", img: "images/patient.jpg", url: "patient.html" },
    { name: "心理学者", img: "images/psychologist.jpg", url: "psychologist.html" },
    { name: "小説家", img: "images/novelist.jpg", url: "novelist.html" },
    { name: "少女", img: "images/littlegirl.jpg", url: "littlegirl.html" },
    { name: "泣きピエロ", img: "images/weepingclown.jpg", url: "weepingclown.html" },
    { name: "教授", img: "images/professor.jpg", url: "professor.html" },
    { name: "骨董商", img: "images/antiquarian.jpg", url: "antiquarian.html" },
    { name: "作曲家", img: "images/composer.jpg", url: "composer.html" },
    { name: "記者", img: "images/journalist.jpg", url: "journalist.html" },
    { name: "航空エンジニア", img: "images/aeronaut.jpg", url: "aeronaut.html" },
    { name: "応援団", img: "images/cheerleader.jpg", url: "cheerleader.html" },
    { name: "人形師", img: "images/puppeteer.jpg", url: "puppeteer.html" },
    { name: "火災調査員", img: "images/fireinvestigator.jpg", url: "fireinvestigator.html" },
    { name: "レディ・ファウロ", img: "images/ladythaurer.jpg", url: "ladythaurer.html" },
    { name: "騎士", img: "images/knight.jpg", url: "knight.html" }
];

// ハンターリスト
const hunters = [
    { name: "復習者", img: "images/avenger.jpg", url: "avenger.html" },
    { name: "道化師", img: "images/clown.jpg", url: "clown.html" },
    { name: "断罪狩人", img: "images/executioner.jpg", url: "executioner.html" },
    { name: "リッパー", img: "images/reaper.jpg", url: "reaper.html" },
    { name: "結魂者", img: "images/bonded.jpg", url: "bonded.html" },
    { name: "芸者", img: "images/geisha.jpg", url: "geisha.html" },
    { name: "白黒無常", img: "images/whiteblack.jpg", url: "whiteblack.html" },
    { name: "写真家", img: "images/photographer.jpg", url: "photographer.html" },
    { name: "狂眼", img: "images/crazedeye.jpg", url: "crazedeye.html" },
    { name: "黄衣の王", img: "images/kinginyellow.jpg", url: "kinginyellow.html" },
    { name: "夢の魔女", img: "images/dreamwitch.jpg", url: "dreamwitch.html" },
    { name: "泣き虫", img: "images/crybaby.jpg", url: "crybaby.html" },
    { name: "魔トカゲ", img: "images/magiclizard.jpg", url: "magiclizard.html" },
    { name: "血の女王", img: "images/bloodqueen.jpg", url: "bloodqueen.html" },
    { name: "ガードNO.26", img: "images/guard26.jpg", url: "guard26.html" },
    { name: "使途", img: "images/apostle.jpg", url: "apostle.html" },
    { name: "ヴァイオリニスト", img: "images/violinist.jpg", url: "violinist.html" },
        { name: "彫刻家", img: "images/sculptor.jpg", url: "sculptor.html" },
    { name: "アンデット", img: "images/undead.jpg", url: "undead.html" },
    { name: "破綸", img: "images/shatter.jpg", url: "shatter.html" },
    { name: "漁師", img: "images/fisherman.jpg", url: "fisherman.html" },
    { name: "蠟人形師", img: "images/candlemaker.jpg", url: "candlemaker.html" },
    { name: "悪夢", img: "images/nightmare.jpg", url: "nightmare.html" },
    { name: "書記官", img: "images/secretary.jpg", url: "secretary.html" },
    { name: "隠者", img: "images/hermit.jpg", url: "hermit.html" },
    { name: "夜の番人", img: "images/nightwatcher.jpg", url: "nightwatcher.html" },
    { name: "オペラ歌手", img: "images/operasinger.jpg", url: "operasinger.html" },
    { name: "フールズ・ゴールド", img: "images/foolsgold.jpg", url: "foolsgold.html" },
    { name: "時空の影", img: "images/timeghost.jpg", url: "timeghost.html" },
    { name: "足萎の羊", img: "images/lamblame.jpg", url: "lamblame.html" }
];

// サバイバーのカードを作成
function createSurvivorCards() {
    const survivorGrid = document.getElementById("survivor-grid");
    survivors.forEach(survivor => {
        const card = document.createElement("div");
        card.className = "character-card";
        card.innerHTML = `
            <a href="${survivor.url}">
                <img src="${survivor.img}" alt="${survivor.name}">
                <h2>${survivor.name}</h2>
            </a>
        `;
        survivorGrid.appendChild(card);
    });
}

// ハンターのカードを作成
function createHunterCards() {
    const hunterGrid = document.getElementById("hunter-grid");
    hunters.forEach(hunter => {
        const card = document.createElement("div");
        card.className = "character-card";
        card.innerHTML = `
            <a href="${hunter.url}">
                <img src="${hunter.img}" alt="${hunter.name}">
                <h2>${hunter.name}</h2>
            </a>
        `;
        hunterGrid.appendChild(card);
    });
}

// ページの読み込み時にカードを生成
window.onload = function() {
    createSurvivorCards();
    createHunterCards();
};

