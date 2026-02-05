document.addEventListener("DOMContentLoaded", () => {
  try {
    const typingText = document.getElementById("typingText");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const container = document.querySelector(".container");

    // Safety check
    if (!typingText || !yesBtn || !noBtn || !container) {
      console.error("Required elements not found!");
      return;
    }

    // Typing effect
    const text = "Hey Chikuu ❤️";
    let i = 0;

    function typeEffect() {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
      }
    }
    typeEffect();

    // Floating Hearts Function
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");

      // random position
      heart.style.left = Math.random() * 100 + "vw";

      // random size
      const size = Math.random() * 40 + 40;
      heart.style.width = size + "px";
      heart.style.height = size + "px";

      // random duration
      heart.style.animationDuration = Math.random() * 3 + 4 + "s";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 7000);
    }

    // create hearts every 400ms
    const heartInterval = setInterval(createHeart, 400);

    // NO button runaway
    noBtn.addEventListener("mouseenter", () => {
      const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
      const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

      noBtn.style.position = "absolute";
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    });

    // YES button redirect
    yesBtn.addEventListener("click", () => {
      clearInterval(heartInterval); // stop hearts
      window.location.href = "lovepage.html"; // next screen
    });

  } catch (err) {
    console.error("Error in script.js:", err);
  }
});


