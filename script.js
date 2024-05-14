let currentSlide = 0;

function openCarousel(index) {
    currentSlide = index;
    showSlide(index);
    document.getElementById("carousel").style.display = "block";
}

function closeCarousel() {
    document.getElementById("carousel").style.display = "none";
}

function plusSlides(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => (slide.style.display = "none"));
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    }
    slides[currentSlide].style.display = "flex";
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        plusSlides(-1);
    } else if (event.key === "ArrowRight") {
        plusSlides(1);
    }
});

function prevSlide() {
    plusSlides(-1);
}

function nextSlide() {
    plusSlides(1);
}
