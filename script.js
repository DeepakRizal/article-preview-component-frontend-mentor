const shareIcon = document.querySelector(".share-icon");
const shareItems = document.querySelector(".share-items");
const shareMobileIcon = document.querySelector(".share-mobile-icon");

shareIcon.addEventListener("click", () => {
  shareItems.classList.remove("none");
});

shareMobileIcon.addEventListener("click", () => {
  shareItems.classList.add("none");
});
