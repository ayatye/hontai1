        function switchTab(tab) {
            // タブボタンの更新
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // タブコンテンツの更新
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tab).classList.add('active');
        }
// ===== 最新の調整以外は折りたたむ =====
// 各タブの1つ目の .update-section だけ開き、それ以外は見出しだけ表示。
// 開閉は class の付け外しで行う（koukoku.js が class の変化を見て保留中の広告を読み込み直す）
(function () {
  function setOpen(sec, open) {
    sec.classList.toggle('is-collapsed', !open);
    var t = sec.querySelector('.update-title');
    if (t) t.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function init() {
    document.querySelectorAll('.tab-content').forEach(function (tab) {
      var secs = tab.querySelectorAll(':scope > .update-section');
      secs.forEach(function (sec, i) {
        var t = sec.querySelector('.update-title');
        if (!t) return;
        sec.classList.add('is-foldable');
        t.setAttribute('role', 'button');
        t.setAttribute('tabindex', '0');
        setOpen(sec, i === 0);
        function toggle() { setOpen(sec, sec.classList.contains('is-collapsed')); }
        t.addEventListener('click', toggle);
        t.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
        });
      });
    });
    openHash();
  }

  // #キャラID 付きで来たとき：そのタブに切り替えて、その日の調整を開いてスクロール
  function openHash() {
    if (!location.hash) return;
    var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!el) return;
    var tab = el.closest('.tab-content');
    if (tab && !tab.classList.contains('active')) {
      document.querySelectorAll('.tab-content').forEach(function (c) { c.classList.remove('active'); });
      tab.classList.add('active');
      var idx = Array.prototype.indexOf.call(document.querySelectorAll('.tab-content'), tab);
      document.querySelectorAll('.tab-button').forEach(function (b, i) { b.classList.toggle('active', i === idx); });
    }
    var sec = el.closest('.update-section');
    if (sec) setOpen(sec, true);
    setTimeout(function () { el.scrollIntoView(); }, 50);
  }

  window.addEventListener('hashchange', openHash);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
