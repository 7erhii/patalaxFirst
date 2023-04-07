'use strict'

window.onload = function () {
    const parallax = document.querySelector('.parallax')

    if (parallax) {
        const content = document.querySelector('.parallax__container');
        const clouds = document.querySelector('.images__parallax_clouds');
        const mountains = document.querySelector('.images__parallax_mountains');
        const human = document.querySelector('.images__parallax_human');

        const forClouds = 40;
        const forMountains = 20;
        const forHuman = 10;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let cordXprocent = 0, cordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = cordXprocent - positionX;
            const distY = cordYprocent - positionY;
            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%);`;
            mountains.style.cssText = `transform: translate(${positionX / forMountains}%, ${positionY / forMountains}%);`;
            human.style.cssText = `transform: translate(${positionX / forHuman}%, ${positionY / forHuman}%);`;

            requestAnimationFrame(setMouseParallaxStyle);

            parallax.addEventListener('mousemove', function (e) {
                const parallaxWidth = parallax.offsetWidth;
                const parallaxHeight = parallax.offsetHeight;

                const cordX = e.pageX - parallaxWidth / 2;
                const cordY = e.pageY - parallaxHeight / 2;

                cordXprocent = cordX / parallaxWidth * 100;
                cordYprocent = cordY / parallaxHeight * 100;
            });
        }

        setMouseParallaxStyle();
    }
}