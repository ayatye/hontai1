document.addEventListener('DOMContentLoaded', function() {
    const updateDate = document.getElementById('update-date');
    const today = new Date();
    const formattedDate = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    updateDate.textContent = formattedDate;
});

let strengthChart = null;

const createChart = () => {
    const ctx = document.getElementById('strengthChart').getContext('2d');

    if (!strengthChart) {
        strengthChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['強さ', '弱さ'],
                datasets: [{
                    data: [7, 3],  // 例として8点と残りの2点
                    backgroundColor: [
                        'rgba(255, 111, 97, 0.7)',  // 半透明な赤色
                        'rgba(241, 241, 241, 0.7)'  // 半透明な灰色
                    ],
                    hoverBackgroundColor: [
                        'rgba(255, 138, 101, 0.9)',  // ホバー時の濃い赤色
                        'rgba(224, 224, 224, 0.9)'  // ホバー時の濃い灰色
                    ],
                    borderColor: '#fff',  // 境界線の色
                    borderWidth: 2,  // 境界線の幅
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                cutout: '75%',  // 中央をくり抜くドーナツグラフ
                animation: {
                    animateScale: true,  // 拡大アニメーション
                    animateRotate: true,  // 回転アニメーション
                    duration: 2000,  // アニメーションの時間を調整
                    easing: 'easeOutBounce'  // バウンドするようなアニメーション効果
                },
                plugins: {
                    legend: {
                        display: false,  // ラベル非表示
                    },
                    tooltip: {
                        enabled: true,  // ツールチップを有効
                    },
                },
                hover: {
                    animationDuration: 1000,  // ホバー時のアニメーションを長く
                },
                elements: {
                    arc: {
                        backgroundColor: function(context) {
                            return context.dataIndex === 0 ? 'rgba(255, 111, 97, 0.8)' : 'rgba(241, 241, 241, 0.8)';
                        },
                        borderWidth: 3,
                    }
                }
            },
            plugins: [{
                id: 'centerText',
                beforeDraw: function(chart) {
                    const ctx = chart.ctx;
                    const width = chart.width;
                    const height = chart.height;
                    ctx.restore();
                    const fontSize = (height / 70).toFixed(2);  // フォントサイズを大きく調整
                    ctx.font = fontSize + "em 'Comic Sans MS', cursive";
                    ctx.textBaseline = "middle";

                    const text = "7";  // 表示する得点
                    const textX = Math.round((width - ctx.measureText(text).width) / 2);
                    const textY = height / 2;

                    ctx.fillStyle = '#333';  // テキストの色
                    ctx.fillText(text, textX, textY);
                    ctx.save();
                }
            }]
        });
    }
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            createChart();  // グラフがビューポートに入ったら作成
            observer.unobserve(entry.target);  // グラフの作成後に監視を停止
        }
    });
}, { threshold: 0.1 });  // グラフが10%表示されたらトリガー

document.addEventListener('DOMContentLoaded', () => {
    const chartElement = document.getElementById('strengthChart');
    observer.observe(chartElement);  // グラフ要素を監視
});
