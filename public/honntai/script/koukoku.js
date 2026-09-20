/* =========================================================
   koukoku.js  v4 —  AdSense 手動広告 JS挿入版
   第五録 / daigoroku.com
   ---------------------------------------------------------
   v4の変更点:
   - タブ切り替え（display:none → block）に対応
     非表示の枠は「保留」にしておき、表示された時点で読み込む
   - class属性の変化も監視対象に追加

   使い方:
   1. 枠を置く:
        <div class="ad-slot" data-ad="h2-mae"></div>
        <div class="ad-slot" data-ad="side" data-device="pc"></div>
   2. </body> の直前で読み込む:
        <script src="/js/koukoku.js" defer></script>

   注意: <head> の adsbygoogle.js 本体は別途必要（消さないこと）
   ========================================================= */

(function () {
  "use strict";

  /* ============ 設定 ============ */

  var CLIENT = "ca-pub-4556398935658570";

  var SLOTS = {
    "kiji-ue": "2088406002", // ディスプレイ広告（記事上）
    "h2-mae": "4641437218", // ディスプレイ広告（本文中）
    "kiji-sita": "6689995998", // Multiplex広告（記事末）
    side: "7256972200", // ディスプレイ広告（サイドバー下）
  };

  // PC / スマホの境界（sidebar.css の 768px に合わせる）
  var PC_MIN_WIDTH = 768;

  // 遅延読み込みの先読み距離
  var PRELOAD_MARGIN = "300px";

  // Multiplex にするスロット名
  var MATOME_SLOTS = ["kiji-sita"];

  // 幅0のときのリトライ（JS生成の枠が出来上がるのを待つ）
  var RETRY_INTERVAL = 200; // ミリ秒
  var RETRY_MAX = 15; // 最大3秒

  // コンソールにログを出す（本番では false）
  var DEBUG = true;

  /* ============ ここから下は触らなくてOK ============ */

  var io = null;

  function log() {
    if (DEBUG && window.console) {
      console.log.apply(
        console,
        ["[koukoku]"].concat([].slice.call(arguments)),
      );
    }
  }

  function warn(msg) {
    if (window.console) console.warn("[koukoku] " + msg);
  }

  function isPc() {
    return window.matchMedia("(min-width: " + PC_MIN_WIDTH + "px)").matches;
  }

  function shouldRender(slot) {
    var device = slot.getAttribute("data-device");
    if (!device) return true; // 未指定 = 両方に出す
    if (device === "pc") return isPc();
    if (device === "sp") return !isPc();
    return true;
  }

  // 幅が取れる＝表示されている状態か
  function isVisible(slot) {
    return slot.getBoundingClientRect().width >= 1;
  }

  function buildIns(key, slotId) {
    var ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.setAttribute("data-ad-client", CLIENT);
    ins.setAttribute("data-ad-slot", slotId);

    if (MATOME_SLOTS.indexOf(key) !== -1) {
      ins.setAttribute("data-ad-format", "autorelaxed");
    } else {
      ins.setAttribute("data-ad-format", "auto");
      ins.setAttribute("data-full-width-responsive", "true");
    }
    return ins;
  }

  function load(slot, attempt) {
    attempt = attempt || 0;

    if (slot.getAttribute("data-ad-loaded") === "1") return;
    if (!slot.isConnected) return;

    var key = slot.getAttribute("data-ad");
    var slotId = SLOTS[key];

    if (!slotId) {
      warn("未定義のスロット: " + key);
      slot.setAttribute("data-ad-loaded", "skip");
      return;
    }

    // 幅が取れない = 非表示タブの中 or 生成途中
    if (!isVisible(slot)) {
      if (attempt < RETRY_MAX) {
        setTimeout(function () {
          load(slot, attempt + 1);
        }, RETRY_INTERVAL);
      } else {
        // ★ 諦めずに「保留」にしておく。
        //   タブが開かれた時に scan() が拾い直す
        slot.setAttribute("data-ad-pending", "1");
        slot.removeAttribute("data-ad-watched");
        log("保留（非表示のため）:", key);
      }
      return;
    }

    slot.removeAttribute("data-ad-pending");
    slot.appendChild(buildIns(key, slotId));
    slot.setAttribute("data-ad-loaded", "1");

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      log("loaded:", key);
    } catch (e) {
      if (window.console) console.error("[koukoku] push失敗:", e);
    }
  }

  function getObserver() {
    if (io) return io;
    if (!("IntersectionObserver" in window)) return null;

    io = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          entry.target.removeAttribute("data-ad-watched");
          load(entry.target);
        });
      },
      { rootMargin: PRELOAD_MARGIN },
    );

    return io;
  }

  /* 未処理・保留中の枠を拾って処理する。何度呼んでも安全 */
  function scan() {
    var sel = ".ad-slot[data-ad]:not([data-ad-loaded]):not([data-ad-watched])";
    var slots = [].slice.call(document.querySelectorAll(sel));

    if (!slots.length) return;

    slots.forEach(function (slot) {
      // デバイス条件に合わない枠は DOM ごと削除
      if (!shouldRender(slot)) {
        slot.parentNode && slot.parentNode.removeChild(slot);
        return;
      }

      // 保留中の枠は、表示されるまで何もしない
      if (slot.getAttribute("data-ad-pending") === "1" && !isVisible(slot)) {
        return;
      }

      var observer = getObserver();

      if (!observer) {
        load(slot);
        return;
      }

      // ファーストビュー内、または保留から復帰した枠は即読み込み
      var rect = slot.getBoundingClientRect();
      if (
        rect.top < window.innerHeight ||
        slot.getAttribute("data-ad-pending") === "1"
      ) {
        load(slot);
        return;
      }

      slot.setAttribute("data-ad-watched", "1");
      observer.observe(slot);
    });
  }

  /* DOMの変化を監視（サイドバー生成・タブ切り替え） */
  function watchDom() {
    if (!("MutationObserver" in window)) return;

    var timer = null;
    var trigger = function () {
      clearTimeout(timer);
      timer = setTimeout(scan, 100);
    };

    new MutationObserver(trigger).observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style"], // タブの表示切替を検知
    });

    log("DOM監視を開始");
  }

  function init() {
    scan();
    watchDom();

    // 画面幅が変わった時にも拾い直す（レスポンシブでの表示切替）
    var rt = null;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(scan, 300);
    });
  }

  // 外から手動で再スキャンしたいとき用
  window.koukoku = { refresh: scan };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
