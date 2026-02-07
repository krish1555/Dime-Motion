export const smoothScrollTo = (targetId: string, duration?: number) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;

    // Dynamic duration: 0.5ms per pixel. Min 800ms.
    // This ensures "velocity is the same" (linear relationship)
    // 4000px -> 2000ms. 2000px -> 1000ms.
    const calculatedDuration = duration || Math.max(800, Math.abs(distance) * 0.5);

    let startTime: number | null = null;

    // Easing: easeInOutQuart (Smoother, "Apple-like")
    function easeInOutQuart(t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
    }

    function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuart(timeElapsed, startPosition, distance, calculatedDuration);
        window.scrollTo(0, run);
        if (timeElapsed < calculatedDuration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
};
