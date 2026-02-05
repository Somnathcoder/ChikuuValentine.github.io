document.addEventListener("DOMContentLoaded", () => {
  try {
    const typingText = document.getElementById("typingText");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const container = document.querySelector(".container");

    if (!typingText || !yesBtn || !noBtn || !container) {
      console.error("Required elements not found in lovepage!");
      return;
    }

    // Typing effect
    const text = "Do you love me Chikuuu? 💘";
    let i = 0;

    function typeEffect() {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 70);
      }
    }
    typeEffect();

    // Floating hearts safe
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");

      heart.style.left = Math.random() * 100 + "vw";

      const size = Math.random() * 40 + 40;
      heart.style.width = size + "px";
      heart.style.height = size + "px";

      heart.style.animationDuration = Math.random() * 3 + 4 + "s";

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 7000);
    }

    const heartInterval = setInterval(createHeart, 450);

    // NO button runaway
    noBtn.addEventListener("mouseenter", () => {
      const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
      const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

      noBtn.style.position = "absolute";
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    });

    // YES button final screen
    yesBtn.addEventListener("click", () => {
      clearInterval(heartInterval);

      container.innerHTML = `
        <h1>YAYYYY!! 💘🥹</h1>
        <p>You just made me the happiest person ever ❤️</p>

        <img src="img/chikuheart.jpeg" 
          alt="Chikuu Heart"
          style="width:200px; height:200px; border-radius:50%; margin-top:20px; object-fit:cover;">

        <p style="margin-top:20px;">Can't wait to create beautiful memories together! 🌹✨</p>

        <button id="nextScreenBtn"
          style="padding:12px 25px; font-size:16px; border:none; border-radius:12px; cursor:pointer; margin-top:15px;">
          Next ➜ 💖
        </button>

        <h3 style="margin-top:15px;">Love, Chikuu 💖</h3>
      `;

      // Add button click safely
      const nextBtn = document.getElementById("nextScreenBtn");
      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          window.location.href = "final.html"; // <-- create this file
        });
      }
    });

  } catch (err) {
    console.error("Error in lovescript.js:", err);
  }
});
