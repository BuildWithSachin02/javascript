// Select slider progress bar
const rangevalue = document.querySelector(".slider .price-slider");

// Select range inputs (sliders)
const rangeInputvalue = document.querySelectorAll(".range-input input");

// Select number inputs
const priceInputvalue = document.querySelectorAll(".price-input input");

// Minimum gap between min & max price
let priceGap = 500;

// ==============================
// NUMBER INPUT LOGIC
// ==============================
priceInputvalue.forEach(input => {
  input.addEventListener("input", e => {

    let minp = parseInt(priceInputvalue[0].value);
    let maxp = parseInt(priceInputvalue[1].value);

    // Validation
    if (minp < 0) minp = 0;
    if (maxp > 10000) maxp = 10000;

    if (maxp - minp < priceGap) {
      if (e.target.classList.contains("min-input")) {
        minp = maxp - priceGap;
      } else {
        maxp = minp + priceGap;
      }
    }

    // Update input values
    priceInputvalue[0].value = minp;
    priceInputvalue[1].value = maxp;

    // Update sliders
    rangeInputvalue[0].value = minp;
    rangeInputvalue[1].value = maxp;

    // Update progress bar
    const maxRange = rangeInputvalue[0].max;
    rangevalue.style.left = `${(minp / maxRange) * 100}%`;
    rangevalue.style.right = `${100 - (maxp / maxRange) * 100}%`;

    // Update text
    document.getElementById("minVal").innerText = minp;
    document.getElementById("maxVal").innerText = maxp;
  });
});

// ==============================
// RANGE SLIDER LOGIC
// ==============================
rangeInputvalue.forEach(input => {
  input.addEventListener("input", e => {

    let minVal = parseInt(rangeInputvalue[0].value);
    let maxVal = parseInt(rangeInputvalue[1].value);

    // Enforce price gap
    if (maxVal - minVal < priceGap) {
      if (e.target.classList.contains("min-range")) {
        rangeInputvalue[0].value = maxVal - priceGap;
        minVal = maxVal - priceGap;
      } else {
        rangeInputvalue[1].value = minVal + priceGap;
        maxVal = minVal + priceGap;
      }
    }

    // Update number inputs
    priceInputvalue[0].value = minVal;
    priceInputvalue[1].value = maxVal;

    // Update progress bar
    const maxRange = rangeInputvalue[0].max;
    rangevalue.style.left = `${(minVal / maxRange) * 100}%`;
    rangevalue.style.right = `${100 - (maxVal / maxRange) * 100}%`;

    // Update text
    document.getElementById("minVal").innerText = minVal;
    document.getElementById("maxVal").innerText = maxVal;
  });
});
