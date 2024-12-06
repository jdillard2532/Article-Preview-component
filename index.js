const shareIcon = document.querySelector(".card-share-icon");
const svgIcon = document.querySelector(".svgIcon");
const iconSelect = document.querySelector(".card-active-icons");
const arrowDown = document.querySelector(".arrow-down");
const footerImage = document.querySelector(".card-footer-image");
const footerInfo = document.querySelector(".footer-info");
const cardFooter = document.querySelector(".card-footer");

shareIcon.addEventListener("mouseenter", function () {
  shareIcon.style.backgroundColor = "hsl(217, 19%, 35%)";
  svgIcon.style.color = "#fff";
});

shareIcon.addEventListener("mouseleave", function () {
  shareIcon.style.backgroundColor = "#ecf2f8";
  svgIcon.style.color = "#6e8098";
});

shareIcon.addEventListener("click", function () {
  screenSize();
});

function screenSize() {
  let windowWidth = window.innerWidth;

  if (windowWidth < 700) {
    footerImage.classList.toggle("hidden");
    footerInfo.classList.toggle("hidden");
    iconSelect.classList.toggle("hidden");
    cardFooter.classList.toggle("bg-color");
  }

  if (windowWidth > 700) {
    iconSelect.classList.toggle("hidden");
    iconSelect.classList.toggle("footer-share-icons");
    arrowDown.classList.toggle("hidden");
  }
}
