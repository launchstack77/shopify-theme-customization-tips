document.addEventListener("DOMContentLoaded", function () {

    console.log("Theme loaded successfully");

    const cards = document.querySelectorAll(".featured-product-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", function () {
            card.style.transform = "scale(1.03)";
            card.style.transition = "0.3s ease";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "scale(1)";
        });

    });

});
