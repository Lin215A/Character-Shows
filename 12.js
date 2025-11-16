const getResizPageRate = () => {
    const base = window.ontouchstart === undefined ? 1200 : 800;

    const rate = Math.min(window.innerWidth / base, window.innerHeight / 1);
    
    const body = document.getElementsByTagName('body')[0];

    body.style.width = window.innerWidth / rate + 'px';
    body.style.height = window.innerHeight / rate + 'px';
    body.style.position = 'absolute';
    body.style.left = (window.innerWidth - window.innerWidth / rate) / 2 + 'px';
    body.style.top = (window.innerHeight - window.innerHeight / rate) / 2 + 'px';
    body.style.transform = `scale(${rate})`;
    body.style.transformOrigin = 'center center';
    body.style.transition = '0.5s transform';
}

// 页面加载时执行
window.addEventListener('DOMContentLoaded', () => {
    getResizPageRate();
});

// 窗口大小改变时重新计算
window.addEventListener('resize', () => {
    getResizPageRate();
});