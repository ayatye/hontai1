        function switchTab(tab) {
            // タブボタンの更新
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // タブコンテンツの更新
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tab).classList.add('active');
        }