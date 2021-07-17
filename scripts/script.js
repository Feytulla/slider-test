let count = 0;
let width;
const sliderLine = document.querySelector('.slider__img')
const images = document.querySelectorAll('.slider .slider__img img')


function init() {
    width = document.querySelector('.slider').offsetWidth
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';

    })
    rollSlider()
}


window.addEventListener('resize', init)
init()

next.addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider()
})
prev.addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider()
})

/*prev.addEventListener('click', function () {
    let blockWidth = slider.scrollWidth;



    if (offset <= blockWidth && offset > 0) {
        offset -= 250;
        sliderLine.style.right = offset + 'px';
    } else {
        offset = blockWidth - 250;
        sliderLine.style.right = offset + 'px';
    }

})*/
function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}