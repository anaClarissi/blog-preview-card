const card = document.querySelector(".card");

const title = document.querySelector(".blog-title");

title.style.transition = "all .3s ease";

card.addEventListener("mouseenter", () => {

    title.style.color = "var(--color-primary-01)";

    card.style.transform = "scale(1.1)";

});

card.addEventListener("mouseleave", () => {

    title.style.color = "#000000";


    card.style.transform = "scale(1)";

});
