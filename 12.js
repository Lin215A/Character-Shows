const getResizPageRate = () => {
    const baseWidth = 960;   // 你的画布宽度
    const baseHeight = 540;  // 你的画布高度

    const rate = Math.min(
        window.innerWidth / baseWidth,
        window.innerHeight / baseHeight
    );

    const body = document.body;

    body.style.width = baseWidth + 'px';
    body.style.height = baseHeight + 'px';
    body.style.position = 'absolute';
    body.style.left = (window.innerWidth - baseWidth * rate) / 2 + 'px';
    body.style.top = (window.innerHeight - baseHeight * rate) / 2 + 'px';
    body.style.transform = `scale(${rate})`;
    body.style.transformOrigin = 'center center';
};
window.addEventListener('DOMContentLoaded', getResizPageRate);
window.addEventListener('resize', getResizPageRate);
