'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider__group_slide');
    const dots = document.querySelectorAll('.slider__group_dot');

    const next = document.querySelector('.slider__group_next-slide');
    const previous = document.querySelector('.slider__group_prev-slide');

    let activeSlide = 0;
    let selectedDot = 0;

    setInterval(
        () => {
            setSlideAndDotClass(false, slides[activeSlide], dots[selectedDot]);
            activeSlide = (activeSlide + 1) % slides.length;
            selectedDot = (selectedDot + 1) % dots.length;
            setSlideAndDotClass(true, slides[activeSlide], dots[selectedDot]);
        },
        5000
    );

    next.addEventListener('click', function () {
        setSlideAndDotClass(false, slides[activeSlide], dots[selectedDot]);
        ++activeSlide;
        ++selectedDot;

        if (activeSlide > (slides.length - 1) && selectedDot > (dots.length - 1)) {
            activeSlide = 0;
            selectedDot = 0;
        }

        setSlideAndDotClass(true, slides[activeSlide], dots[selectedDot]);
    });

    previous.addEventListener('click', function () {
        setSlideAndDotClass(false, slides[activeSlide], dots[selectedDot]);
        --activeSlide;
        --selectedDot;

        if (activeSlide < 0 && selectedDot < 0) {
            activeSlide = slides.length - 1;
            selectedDot = dots.length - 1;
        }

        setSlideAndDotClass(true, slides[activeSlide], dots[selectedDot]);
    });

    function setSlideAndDotClass(isActive, slide, dot) {
        slide.className = isActive ? 'slider__group_slide active' : 'slider__group_slide';
        dot.className = isActive ? 'slider__group_dot active' : 'slider__group_dot';
    }
});
