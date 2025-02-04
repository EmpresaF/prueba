document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelector(".slide-container");
    const totalSlides = document.querySelectorAll(".slide").length;

    function nextSlide() {
        index = (index + 1) % totalSlides;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 4000); // Cambia de imagen cada 4 segundos
});
