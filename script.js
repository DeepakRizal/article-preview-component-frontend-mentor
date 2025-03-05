const shareIcon = document.querySelector(".share-icon");
const shareItems = document.querySelector(".share-items");
const shareMobileIcon = document.querySelector(".share-mobile-icon");
const desktopShareItems = document.querySelector(".desktop-share-items");

const media = window.matchMedia("(min-width:700px)");

shareIcon.addEventListener("click", () => {
  if (media.matches) {
    desktopShareItems.classList.toggle("none");
  } else {
    shareItems.classList.remove("none");
  }
});

shareMobileIcon.addEventListener("click", () => {
  shareItems.classList.add("none");
});
