document.addEventListener('DOMContentLoaded', () => {
    const moon = document.getElementById('moon');
    const text = document.getElementById('text');
    const train = document.getElementById('train');
    const desert_moon = document.getElementById('desert-moon');
    const man = document.getElementById('man');
    const scrollProgress = document.getElementById('progress');

    function updatePositions(value) {
        moon.style.top = value * 0.9 + 'px';
        text.style.top = 80 + value * -0.2 + '%';
        train.style.left = value * 1.5 + 'px';
        desert_moon.style.top = value * 0.3 + 'px';
        man.style.left = value * 0.6 + 'px';
    }

    function calcScrollValue() {
        const pos = document.documentElement.scrollTop;
        const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollValue = Math.round((pos * 100) / calcHeight);

        scrollProgress.style.display = pos > 100 ? 'grid' : 'none';
        scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%,#67ccff ${scrollValue}%)`;
    }

    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });

    window.addEventListener('scroll', () => {
        const value = window.scrollY;
        updatePositions(value);
        calcScrollValue();
    });

    // Initial positions and scroll value on page load.
    const initialValue = window.scrollY;
    updatePositions(initialValue);
    calcScrollValue();
});
