
function openLetter() {
    const envelope = document.getElementById("envelope");
    const message = document.getElementById("message");

    envelope.classList.add("open");

    setTimeout(function() {
        message.style.display = "block";
    }, 700);
}

// Floating hearts animation
function createHeart() {
    const heart = document.createElement("span");

    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 400);
