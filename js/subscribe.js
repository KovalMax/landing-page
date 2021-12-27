'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const subscription = document.getElementById('subscription');
    const main = document.getElementById('main');

    document.getElementById('subscribe-form').addEventListener('submit', (e) => {
        e.preventDefault();

        document.getElementById('sub-text').innerText = e.target.elements['email'].value + ' Subscribed!';
        e.target.reset();

        main.style.display = 'none';
        subscription.style.display = 'block';
    });

    document.getElementById('back-to-page').addEventListener('click', () => {
        main.style.display = 'block';
        subscription.style.display = 'none';
    });
});
