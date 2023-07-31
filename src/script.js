const layers = document.querySelectorAll(".parallax__layer");

function handleScroll() {
  const offset = window.scrollY;
  layers.forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const direction = layer.getAttribute("data-direction");
    layer.style.transform = `translateY(${offset * speed * direction}px)`;
  });
}

window.addEventListener("scroll", handleScroll);
