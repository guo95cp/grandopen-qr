const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
const art = document.querySelector(".hero-art>img");
window.addEventListener(
  "scroll",
  () => {
    if (art && window.scrollY < window.innerHeight * 1.2) {
      art.style.transform = `translateY(${window.scrollY * 0.06}px) rotate(${window.scrollY * 0.003}deg)`;
    }
  },
  { passive: true },
);
