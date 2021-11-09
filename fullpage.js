const sectionDownload = document.querySelector(".section__download");
const page = document.querySelector(".page");
const riderImg = document.querySelector(".rider-img");
const section2Image = document.querySelector(".section__img2");
const section3Image = document.querySelector(".section__img3");
const section4Image = document.querySelector(".section__img4");
const section5Image = document.querySelector(".section__img5");
const page1 = document.querySelector(".page li:first-child");
const page1Image1 = page1.querySelector("img:first-child");
const page1Image2 = page1.querySelector("img:last-child");
const page2 = document.querySelector(".page li:nth-child(2)");
const page2Image1 = page2.querySelector("img:first-child");
const page2Image2 = page2.querySelector("img:last-child");
const page3 = document.querySelector(".page li:nth-child(3)");
const page3Image1 = page3.querySelector("img:first-child");
const page3Image2 = page3.querySelector("img:last-child");
const page4 = document.querySelector(".page li:nth-child(4)");
const page4Image1 = page4.querySelector("img:first-child");
const page4Image2 = page4.querySelector("img:last-child");
const page5 = document.querySelector(".page li:nth-child(5)");
const page5Image1 = page5.querySelector("img:first-child");
const page5Image2 = page5.querySelector("img:last-child");
const page6 = document.querySelector(".page li:nth-child(6)");
const page6Image1 = page6.querySelector("img:first-child");
const page6Image2 = page6.querySelector("img:last-child");

new fullpage("#full-page", {
  afterLoad: function (origin, destination, direction) {
    if (destination.index === 0) {
      sectionDownload.classList.add("hidden");
      page.classList.add("hidden");
    } else if (destination.index === 1) {
      sectionDownload.classList.remove("hidden");
      page.classList.remove("hidden");
      riderImg.classList.add("section1-active");
      page1Image1.classList.add("hidden-dot");
      page1Image2.classList.remove("hidden-dot");
      page2Image1.classList.remove("hidden-dot");
      page2Image2.classList.add("hidden-dot");
    } else if (destination.index === 2) {
      section2Image.classList.add("section-img-up");
      page1Image1.classList.remove("hidden-dot");
      page1Image2.classList.add("hidden-dot");
      page2Image1.classList.add("hidden-dot");
      page2Image2.classList.remove("hidden-dot");
      page3Image1.classList.remove("hidden-dot");
      page3Image2.classList.add("hidden-dot");
    } else if (destination.index === 3) {
      section3Image.classList.add("section-img-up");
      page2Image1.classList.remove("hidden-dot");
      page2Image2.classList.add("hidden-dot");
      page3Image1.classList.add("hidden-dot");
      page3Image2.classList.remove("hidden-dot");
      page4Image1.classList.remove("hidden-dot");
      page4Image2.classList.add("hidden-dot");
    } else if (destination.index === 4) {
      section4Image.classList.add("section-img-up");
      page3Image1.classList.remove("hidden-dot");
      page3Image2.classList.add("hidden-dot");
      page4Image1.classList.add("hidden-dot");
      page4Image2.classList.remove("hidden-dot");
      page5Image1.classList.remove("hidden-dot");
      page5Image2.classList.add("hidden-dot");
    } else if (destination.index === 5) {
      section5Image.classList.add("section-img-up");
      page4Image1.classList.remove("hidden-dot");
      page4Image2.classList.add("hidden-dot");
      page5Image1.classList.add("hidden-dot");
      page5Image2.classList.remove("hidden-dot");
      page6Image1.classList.remove("hidden-dot");
      page6Image2.classList.add("hidden-dot");
    } else if (destination.index === 6) {
      page5Image1.classList.remove("hidden-dot");
      page5Image2.classList.add("hidden-dot");
      page6Image1.classList.add("hidden-dot");
      page6Image2.classList.remove("hidden-dot");
    }
  },
});
