var elems = document.querySelectorAll(".elems");
const imageDiv = document.querySelector("#image");

elems.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    let img = elem.getAttribute("data-image");
    let w = elem.getAttribute("data-width");
    let h = elem.getAttribute("data-height");
    imageDiv.style.backgroundImage = `url(${img})`;
    imageDiv.style.width = w;
    imageDiv.style.height = h;
  });

  document.addEventListener("mousemove", function (dets) {
    imageDiv.style.left = `${dets.x - 150}px`;
    imageDiv.style.top = `${dets.y - 150}px`;
  });
});
