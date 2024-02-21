const weatherImage = document.getElementById("weatherImage");
const workshopImage = document.getElementById("workshopImage");
const calculatorImage = document.getElementById("calculatorImage");
const restuarantImage = document.getElementById("restuarantImage");

const weatherParagraph = document.getElementById("weatherParagraph");
const workshopParagraph = document.getElementById("workshopParagraph");
const calculatorParagraph = document.getElementById("calculatorParagraph");
const restuarantParagraph = document.getElementById("restuarantParagraph");

weatherImage.addEventListener("mouseover", () => {
  weatherImage.style.transform = "scaleX(-1)";
  weatherParagraph.style.opacity = "1";
});

weatherImage.addEventListener("mouseout", () => {
  weatherImage.style.transform = "scaleX(1)";
  weatherParagraph.style.opacity = "0";
});

workshopImage.addEventListener("mouseover", () => {
  workshopImage.style.transform = "scaleX(-1)";
  workshopParagraph.style.opacity = "1";
});

workshopImage.addEventListener("mouseout", () => {
  workshopImage.style.transform = "scaleX(1)";
  workshopParagraph.style.opacity = "0";
});

calculatorImage.addEventListener("mouseover", () => {
  calculatorImage.style.transform = "scaleX(-1)";
  calculatorParagraph.style.opacity = "1";
});

calculatorImage.addEventListener("mouseout", () => {
  calculatorImage.style.transform = "scaleX(1)";
  calculatorParagraph.style.opacity = "0";
});

restuarantImage.addEventListener("mouseover", () => {
  restuarantImage.style.transform = "scaleX(-1)";
  restuarantParagraph.style.opacity = "1";
});

restuarantImage.addEventListener("mouseout", () => {
  restuarantImage.style.transform = "scaleX(1)";
  restuarantParagraph.style.opacity = "0";
});
