
// ================= MOBILE MENU =================
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}


// ================= SECTION REVEAL (SMOOTH + STABLE) =================
function revealSections() {
  document.querySelectorAll("section").forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {
      section.classList.add("active");
    }
  });
}

// scroll + load (no flicker fix)
window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// ================= TYPING ANIMATION =================
const text = "Front-End Developer | HTML • CSS • JavaScript";
let i = 0;

function type() {
  const el = document.getElementById("typing");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}

type();


// ================= COPY EMAIL =================
const copyBtn = document.getElementById("copyEmail");

if (copyBtn) {
  copyBtn.addEventListener("click", function(e) {
    e.preventDefault();

    navigator.clipboard.writeText("salomekavtuashvili@gmail.com");

    copyBtn.innerHTML = "✅ Copied!";

    setTimeout(() => {
      copyBtn.innerHTML = "📧 Copy Email";
    }, 1500);
  });
}


// ===== CURSOR GLOW =====
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  if (!glow) return;
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});


// ===== SCROLL PROGRESS =====
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / height) * 100;

  const bar = document.querySelector(".progress-bar");
  if (bar) bar.style.width = progress + "%";
});