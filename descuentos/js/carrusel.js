document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slidesContainer = document.querySelector(".slide-container");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    // Clonar el primer slide y agregarlo al final
    const firstClone = slides[0].cloneNode(true);
    slidesContainer.appendChild(firstClone);

    function nextSlide() {
        index++;
        slidesContainer.style.transition = "transform 0.5s ease-in-out";
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;

        // Si llegamos al clon, hacer el "reseteo invisible"
        if (index === totalSlides) {
            setTimeout(() => {
                slidesContainer.style.transition = "none"; // Desactivar transición
                slidesContainer.style.transform = "translateX(0)"; // Regresar al inicio
                index = 0;
            }, 500); // Coincide con el tiempo de la animación
        }
    }

    setInterval(nextSlide, 4000); // Cambio de slide cada 4 segundos
});
