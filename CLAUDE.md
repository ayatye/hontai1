# CLAUDE.md

「第五録」(https://daigoroku.com) — スマホゲーム IdentityV(第五人格)の攻略サイト。
ビルド工程のない**静的サイト**(手書き HTML/CSS/JS)を Firebase Hosting で配信している。

- 公開ルート: `public/`(`firebase.json` の `hosting.public`)
- Firebase プロジェクト: `daigoroku-website`
- デプロイ: `main` に push → GitHub Actions(`.github/workflows/firebase-hosting-merge.yml`)が自動で本番反映。PR ではプレビュー用ワークフローが動く。**main への push = 本番公開**なので注意。
- コメント/チャットは Firestore(`comments` コレクション、ページごとに `pageId`)を CDN 版 Firebase SDK(ES module)で直接叩く。
- ビルド・テスト・リンタは無い。確認はブラウザで直接開く(`firebase serve` / `npx serve public` 等)。
- `public.zip`(約128MB)は作業用で `.gitignore` 済み。触らない。
- `.gitattributes` で改行は LF 統一。

## ディレクトリ構成(`public/`)

```
public/
├─ index.html                 トップ
├─ styles.css                 トップ用の基本CSS
├─ ads.txt / robots.txt / sitemap*.xml / google*.html / *.txt   公開用メタファイル(触る時は要注意)
└─ honntai/
   ├─ style/                  共有CSS(全ページ共通)
   ├─ script/                 共有JS(全ページ共通)
   ├─ comentoscript/          ページ別コメント機能(Firestore、1ページ1ファイル)
   ├─ images/                 画像(約1000枚。jpeg/JPG/png)
   ├─ hanta/<キャラ>/<キャラ>.html + script.js     ハンター個別攻略(hanta/styles.css を共有)
   ├─ sabaiba/<キャラ>/<キャラ>.html + script.js   サバイバー個別攻略(sabaiba/styles.css を共有)
   ├─ saisinn/2025-04.html … 2026-01.html          月別の最新情報(saisinn/styles.css)
   ├─ korabo/ ibento/ hanran/ sabaran/ yougo/ sigati/ sigatu/ …   1ページ完結の記事(各ディレクトリに style.css / script.js)
   ├─ hantazinnkaku/ sabazinnkaku/ purozinnkaku/    人格解説
   ├─ gekiatuhannta/ gekisaba/ chat/                特集・チャット
   ├─ idv-program-slider/                           情報発表番組の記事
   └─ 情報/ お問い合わせ/                            ※日本語ディレクトリ名
```

ディレクトリ名は日本語のローマ字造語(`honntai`, `hanta`, `sabaiba` …)。綴りは不規則(例: `sabaiba`, `hukusyuusya`)なので**推測で作らず既存名を `ls` で確認する**。
`honntai/最新情報/**` は `firebase.json` で `honntai/saisinn/saisinn.html` に 301 リダイレクトされている。

## 階層ごとの相対パス(最重要)

HTML は 3 種類の深さに分かれ、共有 CSS/JS への相対パスが**深さで変わる**。
ページを新規作成・コピー・移動したら、この表に合わせてパスを直すこと(コピー元と深さが違うと CSS/JS が読み込まれず崩れる)。

| 深さ | 例 | 数 | 共有CSS/JS の接頭辞 | ページ固有ファイル |
|---|---|---|---|---|
| ルート | `public/index.html` | 2 | `honntai/style/…` `honntai/script/…` `honntai/comentoscript/…` | `styles.css` |
| 2階層 | `honntai/saisinn/2025-04.html`、`honntai/chat/chat.html` | 約52 | `../style/…` `../script/…` `../comentoscript/…` | 同じフォルダの `styles.css` / `style.css` / `script.js` |
| 3階層 | `honntai/hanta/akumu/akumu.html`、`honntai/sabaiba/*/*.html` | 約88 | `../../style/…` `../../script/…` `../../comentoscript/…` | 同フォルダの `script.js`、1つ上の `../styles.css` |

3階層(キャラ個別ページ)の実例:

```html
<link rel="stylesheet" href="../styles.css" />          <!-- hanta/styles.css -->
<link rel="stylesheet" href="../../style/hanbaga.css" />
<link rel="stylesheet" href="../../style/sidebar.css" />
<link rel="stylesheet" href="../../style/logo.css" />
<link rel="stylesheet" href="../../style/koukoku.css" />
<link rel="stylesheet" href="../../style/comment.css" />
…
<script src="script.js"></script>                       <!-- そのキャラ専用(Chart.js のグラフ等) -->
<script src="../../script/kyararisuto.js"></script>
<script src="../../script/koukoku.js"></script>
<script src="../../script/ngcomento.js"></script>
<script src="../../script/honbaga.js"></script>
<script src="../../script/footer.js"></script>
<script src="../../script/program-slider.js"></script>
<script src="../../script/widget.js"></script>
<script type="module" src="../../comentoscript/hanta.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

2階層は同じ並びで `../` が1つ少ない(`../style/…`, `../script/…`)。ルートは接頭辞なし(`honntai/style/…`)。

### 相対パスと絶対パスの使い分け
- **HTML の `<link>` / `<script>` / ページ間 `<a>` / `<img>`**: 相対パス(上表)。
- **JS の中で生成するリンクと画像**(`footer.js` `kyararisuto.js` `widget.js` `program-slider.js` `script.js` 等): **ルート絶対パス**(`/honntai/sabaiba/isi/isi.html`, `/honntai/images/…`)。深さに依存しないので、JS データ側は絶対パスのまま書く。
- ページ内 `<a href>` は深さで変わる例: 3階層から最新情報へ `../../saisinn/saisinn.html`、日本語ディレクトリへ `../../情報/情報.html`、`../../お問い合わせ/お問合せフォーム.html`。
- canonical / og:url / og:image は `https://daigoroku.com/…` の**絶対URL**。ページ追加時は canonical・OGP・`last-modified`・`article:modified_time` も更新し、必要なら `sitemap.xml` にも追加する。

## 共有 CSS(`honntai/style/`)

| ファイル | 役割 |
|---|---|
| `hanbaga.css` | ヘッダー/ハンバーガーメニュー(`#hamburger`) |
| `sidebar.css` | 右サイドバー(`.sidebar`、幅400px、`#survivor-list` `#hunter-list` の見た目)。**PC/スマホ境界は 768px** |
| `logo.css` | ロゴ・共通レイアウト |
| `comment.css` | コメント欄(`#comment-section`) |
| `footer.css` | 共通フッター(`footer.js` が生成する要素用) |
| `koukoku.css` | 広告枠 `.ad-slot` のスタイル(後述) |

## 共有 JS(`honntai/script/`)

| ファイル | 役割 | 対象要素 / 備考 |
|---|---|---|
| `koukoku.js` | AdSense 広告枠の挿入(後述) | `.ad-slot[data-ad]` |
| `footer.js` | 共通フッター生成。サバイバー/ハンター一覧データを内蔵 | **キャラ追加時はここも更新** |
| `kyararisuto.js` | サイドバーのキャラ一覧を生成 | `#survivor-list` `#hunter-list`。**キャラ追加時はここも更新** |
| `widget.js` | サイドバーの人気記事ランキング等(`widgetData` を編集するだけで全ページ反映) | `#sidebar-widget` |
| `widget_recommended.js` | 「今日のおすすめ」のみ。index.html が `widget.js` の代わりに使う | `#recommended-widget` |
| `program-slider.js` | 情報発表番組スライダー(`programs` 配列、新しい順) | `#idv-program-slider` |
| `ngcomento.js` | コメントの NG ワード判定(`bannedWords`)+投稿フォーム処理 | `#comment-form` |
| `honbaga.js` | スクロール時に出る横棒 | `#scroll-bar` |
| `script.js` | トップ用の特集タイル生成(`topics` `events` `tisikis` `masters`) | `isMobile` で画像を出し分け |

各ページの `comentoscript/<name>.js` は Firestore への投稿・取得。`pageId` がページ固有で、他ページと重複させない。新規ページは既存ファイルをコピーして `pageId` を変える(Firebase の `apiKey` 等は Web 用で公開前提。保護は Firestore ルール側)。

新キャラ追加時に触る場所の目安: キャラ個別ページ新規作成 / `footer.js` / `kyararisuto.js` / `widget.js` / 画像追加(`images/kyaragazou/…`)/ `sitemap.xml`。

## 広告枠(`koukoku.js` / `koukoku.css`)

AdSense の手動広告を、HTML に置いた**枠 `<div class="ad-slot" data-ad="…">` へ JS が `<ins class="adsbygoogle">` を挿入する**方式。
`<head>` の `adsbygoogle.js` 本体(`ca-pub-4556398935658570`)は別途必要なので**消さない**。

### 運用状況(移行期)
- **現在は AdSense 自動広告と手動配置(`ad-slot`)の併用期間**。段階的に手動配置へ移行中。
  - 自動広告の設定は AdSense 管理画面側にあり、このリポジトリには無い。手動枠を増やしたり自動広告を止めたりする判断は運営者が行うので、勝手に枠を大量追加・削除しない。
  - 併用中は自動広告と手動枠が近接することがあり得る。配置の変更時は表示を確認する。
- **広告を入れないページ**: `puraibasi`(プライバシーポリシー)/ `uneizyouhou`(運営情報)/ `お問い合わせ`。`koukoku.css` / `koukoku.js` の読み込みも枠も入れない。
- **今後入れる予定(未着手)**: `chat` と `gekisaba`。現時点では枠も CSS/JS 読み込みも無い。着手時は「深さ表」に従って `koukoku.css` / `koukoku.js` を読み込み、枠を置く。
- 上記以外で広告が無いページ(`index.html`、`情報`、`idv-program-slider/*` など)の方針は未確認。入れる前に運営者へ確認する。

### 枠の置き方

```html
<div class="ad-slot" data-ad="kiji-ue"></div>
<div class="ad-slot" data-ad="h2-mae"></div>
<div class="ad-slot" data-ad="side" data-device="pc"></div>
<div class="ad-slot ad-slot--matome" data-ad="kiji-sita"></div>
```

読み込み(`</body>` 直前、他の共有JSと並べる。パスは上の深さ表どおり):
`../../script/koukoku.js`(3階層) / `../script/koukoku.js`(2階層)。CSS は `<head>` に `…/style/koukoku.css`。
**`koukoku.js` の冒頭コメントにある `/js/koukoku.js` `/css/koukoku.css` は古い記述で、実際のパスは `honntai/script/` と `honntai/style/`。**

### `data-ad` の種類と使い分け

| `data-ad` | 広告種別 | スロットID | 置き場所 | 追加クラス |
|---|---|---|---|---|
| `kiji-ue` | ディスプレイ(記事上) | 2088406002 | `<main>` 冒頭、最初の `<section>` の直後あたり。1ページ1つ | なし |
| `h2-mae` | ディスプレイ(本文中) | 4641437218 | 見出し(h2/section)の**前**。本文の区切りに複数可(現状 1ページ2〜3個) | なし |
| `side` | ディスプレイ(サイドバー下) | 7256972200 | `.side-column` 内、`.sidebar` の直後。1ページ1つ | `data-device="pc"` を付ける |
| `kiji-sita` | Multiplex(記事末) | 6689995998 | コメント欄の後、`#scroll-bar` の前。1ページ1つ | `ad-slot--matome` を付ける |

- 現状の使用数: `h2-mae` 約290、`side` 120、`kiji-sita` 120、`kiji-ue` 89。
- `kiji-sita` は `MATOME_SLOTS` に入っており `data-ad-format="autorelaxed"`(Multiplex)、他は `auto` + `data-full-width-responsive="true"`。Multiplex にしたいスロットを増やす時は `MATOME_SLOTS` に追記。
- 未定義の `data-ad` 名を書くと「未定義のスロット」警告が出て `data-ad-loaded="skip"` になる。新しい種類を増やす時は `koukoku.js` の `SLOTS` にスロットIDを追加する。
- 配置は既存ページ(例: `hanta/akumu/akumu.html`)の並びに合わせる。

### `data-device`(出し分け)

| 値 | 動作 |
|---|---|
| 未指定 | PC・スマホ両方に表示 |
| `pc` | 幅 768px 以上のみ。条件外なら**枠ごと DOM から削除** |
| `sp` | 幅 767px 以下のみ。同上 |

- `side` は右サイドバー下用なのでスマホでは意味が無く、必ず `data-device="pc"`。
- 境界は `PC_MIN_WIDTH = 768`(`sidebar.css` の 768px と同期。片方を変えたらもう片方も)。
- `koukoku.css` の `.ad-pc-only` / `.ad-sp-only` は Google 公式のメディアクエリ方式(サイズ固定の `<ins>` 直書き用)。**`koukoku.js` の枠では使わない**。使う場合は `<ins>` に `style="display:block"` を書かない(メディアクエリが負ける)・`data-ad-format="auto"` を付けない。

### 動作の要点(壊しやすい所)
- **遅延読み込み**: ファーストビュー内は即時、それ以外は `IntersectionObserver`(先読み 300px)で表示直前に読み込む。
- **非表示枠は保留**: 幅が取れない(`display:none` のタブ内、JS 生成の途中)場合は 200ms × 15 回リトライし、それでも駄目なら `data-ad-pending="1"` で保留。タブが開いたときに `MutationObserver`(`class`/`style` の変化を監視)が `scan()` で拾い直す。
- 処理済み枠は `data-ad-loaded="1"`。`scan()` は何度呼んでも安全。手動再スキャンは `window.koukoku.refresh()`。
- 未配信(`data-ad-status="unfilled"`)のときは CSS(`:has()`)で枠を潰して空白を残さない。
- `.ad-slot` は `min-height`(モバイル280px / PC 300px / サイドバー内 250px / `--matome` 400px)を先に確保して CLS を抑える。「広告」ラベルは `::before` で表示。
- `.ad-slot--side`(PC のみ `position: sticky; top: 80px`)は CSS に用意済みだが、現状のページでは `side` に付けていない。
- **`DEBUG = true`**(`koukoku.js`)で本番でもコンソールにログが出る。切り替えるなら `false` に。
- `koukoku.js` を読んでいないページが約20ある(`index.html`、`chat`、`gekisaba`、`情報`、`puraibasi`、`uneizyouhou`、`お問い合わせ`、`idv-program-slider/*` など)。広告を入れるには **CSS・JS の読み込みと枠の両方**が必要。入れてよいページは上の「運用状況」に従う。

## 新規ページ作成のチェックリスト
1. 同じ種類(ハンター/サバイバー/記事)の既存ページを**同じ深さの場所**にコピー。
2. `<title>`・description・keywords・canonical・OGP・`last-modified` を更新。
3. 相対パス(上の深さ表)を確認。コピー元と深さが違う場合は全部書き換える。
4. `comentoscript` の `pageId` を新しい値に。
5. 広告枠(`kiji-ue` / `h2-mae` / `side`+`data-device="pc"` / `kiji-sita`+`ad-slot--matome`)と `koukoku.css` / `koukoku.js` の読み込みが揃っているか。
6. キャラなら `footer.js` / `kyararisuto.js`、記事なら `widget.js` に登録。`sitemap.xml` も更新。
7. ブラウザでスマホ幅(<768px)とPC幅の両方を確認し、DevTools コンソールに `404` と `[koukoku]` 警告が無いことを確認。
