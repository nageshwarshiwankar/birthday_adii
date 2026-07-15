const text =
"To the most wonderful person... Wishing you endless happiness ❤️";

let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").textContent += text.charAt(i);
        i++;
        setTimeout(typing, 70);
    }
}

window.onload = () => {
    typing();

    const hearts = document.querySelector(".hearts");

    // Floating Hearts
    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animationDuration = Math.random() * 5 + 5 + "s";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);

    }, 300);

    // Popup
    const popup = document.getElementById("popup");
    const surpriseBtn = document.getElementById("surpriseBtn");

    if (surpriseBtn) {
        surpriseBtn.addEventListener("click", () => {

            popup.classList.add("show");

            confetti({
                particleCount: 250,
                spread: 150,
                origin: { y: 0.6 }
            });

        });
    }

    // Card Animation
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    });

    cards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "0.8s ease";

        observer.observe(card);

    });

};

// Close Popup
function closePopup() {

    document.getElementById("popup").classList.remove("show");

}