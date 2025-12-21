let count = 0;
const display = document.getElementById("count");

document.getElementById("inc").onclick = () => {
  if (count < 10) {
    count++;
    display.textContent = count;
  }
};

document.getElementById("dec").onclick = () => {
  if (count > 0) {
    count--;
    display.textContent = count;
  }
};
