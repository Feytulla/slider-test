let offset = 0;
let blockWidth = slider.scrollWidth;
const sliderLine = document.querySelector('#sliderImg')

next.addEventListener('click', function() {
    let blockWidth = slider.scrollWidth;

    

    if(offset + 250 < blockWidth) {
        offset += 250;
        sliderLine.style.right = offset +'px';
        console.log(offset)
    } else {
        offset = 0;
        sliderLine.style.right = offset +'px';
    }

    console.log(blockWidth)
})

prev.addEventListener('click', function() {
    let blockWidth = slider.scrollWidth;

    

    if(offset <= blockWidth && offset > 0) {
        offset -= 250;
        sliderLine.style.right = offset +'px';
        console.log(offset)
    } else {
        offset = blockWidth - 250;
        sliderLine.style.right = offset +'px';
        console.log(offset)
    }

})