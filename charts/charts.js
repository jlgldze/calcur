"use strict";
document.querySelectorAll("[data-chart-tools]").forEach((tools) => {
  const viewport = tools.parentElement.querySelector(".chart-scroll");
  const image = viewport.querySelector("img");
  tools.hidden = false;
  tools.querySelectorAll("[data-zoom]").forEach((button) => {
    button.addEventListener("click", () => {
      const oldWidth = image.getBoundingClientRect().width;
      const centerX = (viewport.scrollLeft + viewport.clientWidth / 2) / oldWidth;
      const centerY = (viewport.scrollTop + viewport.clientHeight / 2) / Math.max(image.getBoundingClientRect().height, 1);
      image.style.width = `${Number(button.dataset.zoom) * 100}%`;
      tools.querySelectorAll("[data-zoom]").forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
      viewport.scrollLeft = centerX * image.getBoundingClientRect().width - viewport.clientWidth / 2;
      viewport.scrollTop = centerY * image.getBoundingClientRect().height - viewport.clientHeight / 2;
    });
  });
});
