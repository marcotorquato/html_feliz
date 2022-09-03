const btnRight = document.querySelector('.button-arrow.-right')

const elements = document.querySelector('.elements')

let  pixels = 0

    btnRight.addEventListener('click', function() {
        pixels = pixels + 50
        elements.style = `transform: translateX(${pixels}px)`
    });

    const btnLeft = document.querySelector('.button-arrow.-left')
    btnLeft.addEventListener('click', function() {
        console.log('Deu bom tambem')
    });