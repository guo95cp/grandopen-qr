const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

const eventScrollButtons = document.querySelectorAll(".js-scroll-to-event");
const eventSection = document.querySelector("#event");

const scrollToEvent = () => {
  eventSection?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

eventScrollButtons.forEach((button) => {
  button.addEventListener("click", scrollToEvent);
});
