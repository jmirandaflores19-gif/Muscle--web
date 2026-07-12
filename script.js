// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Navbar cambia al bajar
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "#000";
    nav.style.boxShadow = "0 0 20px rgba(255,45,45,.3)";
  } else {
    nav.style.background = "rgba(0,0,0,.85)";
    nav.style.boxShadow = "none";
  }
});

// Efecto en galería
document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("zoom");
  });
});

// Botón flotante de WhatsApp
const wa = document.createElement("a");
wa.href = "https://wa.me/59162179693";
wa.target = "_blank";
wa.innerHTML = "💬";
wa.className = "whatsapp-btn";
document.body.appendChild(wa);
