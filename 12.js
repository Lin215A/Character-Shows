function resizeCanvas() {
    const content = document.querySelector('.page-scale-content');

    const designWidth = 1200; // 你设计的宽度
    const designHeight = 800; // 你设计的高度

    const scale = Math.min(
        window.innerWidth / designWidth,
        window.innerHeight / designHeight
    );

    content.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);
