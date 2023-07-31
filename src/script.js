/* eslint-disable no-undef */
const layers = document.querySelectorAll(".parallax__layer");
const button = document.querySelector("#start-btn");

function handleScroll() {
  const offset = window.scrollY;
  layers.forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const direction = layer.getAttribute("data-direction");
    layer.style.transform = `translateY(${offset * speed * direction}px)`;
  });
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smoothTouch: 0.1,
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  const { target } = event;
  const { hash } = target;

  gsap.to(window, {
    duration: 0.2,
    scrollTo: hash,
    ease: "Power1.easeInOut",
  });
});

window.addEventListener("scroll", handleScroll);
