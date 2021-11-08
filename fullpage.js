const sectionDownload = document.querySelector(".section__download");
const page = document.querySelector(".page");
const riderImg = document.querySelector(".rider-img");
const section2Image = document.querySelector(".section__img2");
const section3Image = document.querySelector(".section__img3");
const section4Image = document.querySelector(".section__img4");
const section5Image = document.querySelector(".section__img5");

new fullpage("#full-page", {
  afterLoad: function (origin, destination, direction) {
    if (destination.index === 0) {
      sectionDownload.classList.add("hidden");
      page.classList.add("hidden");
    } else if (destination.index === 1) {
      sectionDownload.classList.remove("hidden");
      page.classList.remove("hidden");
      riderImg.classList.add("section1-active");
    } else if (destination.index === 2) {
      section2Image.classList.add("section-img-up");
    } else if (destination.index === 3) {
      section3Image.classList.add("section-img-up");
    } else if (destination.index === 4) {
      section4Image.classList.add("section-img-up");
    } else if (destination.index === 5) {
      section5Image.classList.add("section-img-up");
    }
  },
});
