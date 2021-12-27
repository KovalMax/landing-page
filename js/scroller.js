'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const scrollToTop = document.getElementById('back-to-top');
    window.addEventListener(
        'scroll',
        () => {
            window.scrollY > 0 ? scrollToTop.className = 'top-link show' : scrollToTop.className = 'top-link hide'
        }
    );

    const scroll = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scroll);
            window.scrollTo(0, c - c / 15);
        }
    };

    scrollToTop.onclick = (e) => {
        e.preventDefault();
        scroll();
    }
});
