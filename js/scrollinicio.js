document.addEventListener("DOMContentLoaded", function() {
    const volverBtn = document.getElementById("volverBtn");
    const footer = document.querySelector("footer");

    volverBtn.style.display = "none"; 

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;

        // Obtener la posición del footer
        const footerPosition = footer.getBoundingClientRect().top;

        if (scrollPosition > footerPosition) {
            volverBtn.style.display = "block";
        } else {
            volverBtn.style.display = "none";
        }
    });

    volverBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});