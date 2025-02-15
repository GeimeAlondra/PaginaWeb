
document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("h1");
    h1.style.transition = "transform 0.5s ease-in-out, text-shadow 0.5s ease-in-out";

    h1.addEventListener("mouseover", function() {
        h1.style.transform = "scale(1.1)"; 
        h1.style.textShadow = "0 0 15px white, 0 0 30px white"; 
    });

    h1.addEventListener("mouseout", function() {
        h1.style.transform = "scale(1)"; 
        h1.style.textShadow = "none"; 
    });
});
