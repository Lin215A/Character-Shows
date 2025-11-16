const getResizPageRate = () => {
    const body = document.body;
    const container = document.querySelector('.container');
    
    if (!container) return;

    // 获取容器的实际尺寸（不包含缩放）
    const containerWidth = container.scrollWidth || container.offsetWidth;
    const containerHeight = container.scrollHeight || container.offsetHeight;

    // 计算缩放比例
    const rate = Math.min(
        window.innerWidth / containerWidth,
        window.innerHeight / containerHeight,
        1  // 不超过原始大小
    );

    // 居中定位 - 使用translate确保从中心点缩放
    body.style.width = containerWidth + 'px';
    body.style.height = containerHeight + 'px';
    body.style.position = 'absolute';
    body.style.left = '50%';
    body.style.top = '50%';
    body.style.marginLeft = '0';
    body.style.marginTop = '0';
    body.style.transform = `translate(-50%, -50%) scale(${rate})`;
    body.style.transformOrigin = 'center center';
};

// 延迟执行，确保DOM完全加载
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(getResizPageRate, 100);
});
window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(getResizPageRate, 100);
});
