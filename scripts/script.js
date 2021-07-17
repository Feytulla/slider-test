const images = document.querySelectorAll(".slider .slider__line img");
const sliderLine = document.querySelector('.slider__line')
let count = 0;
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    images.forEach(img => {
        img.style.width = width + 'px';
        img.style.height = 'auto';
    })
    resizeLine()
}

window.addEventListener('resize', init);
init()

document.querySelector('.slider-next').addEventListener('click', function() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    resizeLine()
})

document.querySelector('.slider-prev').addEventListener('click', function() {
    count--;
    if (count < images.length) {
        count = images.length - 1;
    }
    resizeLine()
})

function resizeLine() {
    sliderLine.style.transform = 'translate(-' + count * width +'px)';
}