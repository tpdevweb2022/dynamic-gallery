const mainYield = document.querySelector(".main > img");
const secondaryImages = document.querySelectorAll(".secondary-img");

const pushImage = (image) => {
  secondaryImages.forEach((img) => {
    img.classList.add("inactive");
  });
  image.classList.remove("inactive");
  mainYield.src = image.src;
};
