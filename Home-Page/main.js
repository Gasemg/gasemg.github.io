var imageSlides = document.getElementsByClassName('imageSlides');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');
var counter = 0;


function hideImages() {
    for (var i = 0; i < imageSlides.length; i++) {
        imageSlides[i].classList.remove('visible');
    }
}




function imageLoop() {
    var currentImage = imageSlides[counter];
    currentImage.classList.add('visible');
    counter++;
}


function arrowClick(e) {
    var target = e.target;
    if (target == leftArrow) {
        clearInterval(imageSlideshowInterval);
        hideImages();
        if (counter == 1) {
            counter = (imageSlides.length - 1);
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        } else {
            counter--;
            counter--;
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        }
    } else if (target == rightArrow) {
        clearInterval(imageSlideshowInterval);
        hideImages();
        if (counter == imageSlides.length) {
            counter = 0;
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        } else {
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        }
    }
}

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);


function slideshow() {
    if (counter < imageSlides.length) {
        imageLoop();
    } else {
        counter = 0;
        hideImages();
        imageLoop();
    }
}

setTimeout(slideshow, 0);
var imageSlideshowInterval = setInterval(slideshow, 10000);