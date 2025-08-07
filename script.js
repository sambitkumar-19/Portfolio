document.addEventListener("DOMContentLoaded", () => {
  // 🌙 Dark/Light Theme Toggle
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      toggle.innerHTML = document.documentElement.classList.contains("dark")
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    });
  }

  // Dark/Light Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode") ? "🌙 Dark" : "☀️ Light";
});


// Toggle mobile nav
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("nav-links");

let isOpen = false;

hamburger.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    mobileNav.style.display = "flex"; // make it visible
    gsap.fromTo(
      mobileNav,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  } else {
    gsap.to(mobileNav, {
      y: -50,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        mobileNav.style.display = "none"; // hide after animation
      },
    });
  }
});



// toggleBtn.addEventListener("click", () => {
//   document.body.classList.toggle("light-mode");
//   toggleBtn.innerHTML = document.body.classList.contains("light-mode") ? "🌙 Dark" : "☀️ Light";
// });

  // ✨ Typing Effect for Hero Section
  const words = [
    "Python Fullstack Developer ",
    "Frontend Developer ",
    "Web Developer using JS ",
    "React.js Developer "
  ];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  const changingText = document.getElementById("changing-text");

  function type() {
    if (i < words.length) {
      if (!isDeleting && j <= words[i].length) {
        currentWord = words[i].substring(0, j++);
      }

      if (isDeleting && j >= 0) {
        currentWord = words[i].substring(0, j--);
      }

      changingText.textContent = currentWord;

      if (j === words[i].length) {
        isDeleting = true;
        setTimeout(type, 1200); // Pause before deleting
        return;
      }

      if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
      }

      setTimeout(type, isDeleting ? 100 : 150);
    }
  }
  type();

  // 🎬 GSAP Intro Animations
  gsap.from(".navbar", { duration: 1, y: -80, opacity: 0, ease: "bounce" });
  gsap.from(".hero-title", { duration: 1, delay: 0.5, opacity: 0, y: 50 });
  gsap.from(".changing-text", { duration: 1, delay: 1, opacity: 0, y: 50 });

  gsap.utils.toArray(".section").forEach((section, index) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      delay: index * 0.2,
    });
  });

  // 💡 Cursor Glow Effect
  const glow = document.getElementById("cursor-glow");
  document.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });

  // 🔵 Bubble Generator
function createBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.style.width = bubble.style.height = `${Math.random() * 40 + 10}px`;
  bubble.style.left = `${Math.random() * window.innerWidth}px`;
  bubble.style.background = `rgba(255,255,255,${Math.random() * 0.3 + 0.1})`;

  const bubbleContainer = document.getElementById("bubbles-container");
  if (bubbleContainer) {
    bubbleContainer.appendChild(bubble);
    setTimeout(() => bubble.remove(), 6000);
  }
}

setInterval(createBubble, 1000);

setInterval(() => {
  if (window.innerWidth > 768) createBubble(); // Desktop
  else if (Math.random() < 0.5) createBubble(); // Fewer bubbles on mobile
}, 1000);


});
