// Bienvenida
window.onload = function () {
    alert("🌱 Welcome to FarmConnect!");
};

// Animación de botones
const botones = document.querySelectorAll("button");

botones.forEach((boton) => {

    boton.addEventListener("click", function () {

        boton.innerHTML = "✔ Added";

        boton.style.background = "#1B5E20";

        setTimeout(() => {

            boton.innerHTML = "Add to Cart";

            boton.style.background = "#43A047";

        }, 1500);

    });

});

// Efecto del menú al hacer scroll
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#1B5E20";

    } else {

        header.style.background = "#2E7D32";

    }

});