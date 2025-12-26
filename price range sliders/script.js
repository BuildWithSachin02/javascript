const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");

const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");

const minText = document.getElementById("minDisplay");
const maxText = document.getElementById("maxDisplay");

const gap = 500;

// MIN SLIDER
minRange.addEventListener("input", () => {
  if (maxRange.value - minRange.value < gap) {
    minRange.value = maxRange.value - gap;
  }

  minInput.value = minRange.value;
  minText.innerText = minRange.value;
});

// MAX SLIDER
maxRange.addEventListener("input", () => {
  if (maxRange.value - minRange.value < gap) {
    maxRange.value = Number(minRange.value) + gap;//issme hmne do chhije ki  ek toh gap jo + plus kiya h jise kyy hoggaa min aur max ke bich me distance maintain rhega aur hmne kyy kiya dusra NUmber function usse kiya jiska reason yeh ki jab hmne kisi string ko oknumber me convert krwana h toh useme time Number function usse krete h lekin hmne issme maxrange me q kiya minranga me bhi kr skte the naa min wle me - kiya the gap ke sath hmne toh kyy hota jese ki "5000"-"2000" = "3000" answer me bhi hme string me milta h but jo ki sahi rheta h isliye hmne ussme min wle me Number function ka use nhi kiya aur Max wle case me kyy hota h issme "5000"-"1000"="50001000" ese answer dedeta h jo sahi nhi h toh me string ko Number me convert kiya hmne isse 
  }

  maxInput.value = maxRange.value;
  maxText.innerText = maxRange.value;
});

// MIN INPUT
minInput.addEventListener("input", () => {
  minRange.value = minInput.value;
  minText.innerText = minInput.value;
});

// MAX INPUT
maxInput.addEventListener("input", () => {
  maxRange.value = maxInput.value;
  maxText.innerText = maxInput.value;
});
