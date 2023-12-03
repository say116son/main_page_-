let slideIndex = 1;

function changeSlide(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    let slides = document.querySelector('.slider');
    if (n > slides.childElementCount) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.childElementCount;
    }
    slides.style.transform = `translateX(${-100 * (slideIndex - 1)}%)`;
}