const main = document.querySelector(".main");
const mainImage = ["img/main_01.jpg", "img/main_02.jpg", "img/main_03.jpg"];
const mainContent = document.querySelector(".main__section__text");
const maintexts = [
  "img/main_text_1.png",
  "img/main_text_2.png",
  "img/main_text_3.png",
];
const random = Math.floor(Math.random() * mainImage.length);
const currentMainImage = mainImage[random];
const currentMainText = maintexts[random];
console.log(currentMainImage);
console.log(currentMainText);
main.style.backgroundImage = `url(${currentMainImage})`;
mainContent.src = currentMainText;
