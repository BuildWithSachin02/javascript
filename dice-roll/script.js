const dice = document.getElementById("dice");
const rollBtn = document.getElementById("roll-button");
const historyEl = document.getElementById("roll-history");

let history = [];

function rollDice() {
  const number = Math.floor(Math.random() * 6) + 1;

  dice.innerHTML = "";
  dice.classList.add("roll");

  setTimeout(() => {
    dice.classList.remove("roll");
    createDiceFace(number);

    history.push(number);
    updateHistory();
  }, 600);
}

function createDiceFace(num) {
  const faces = {
    1: ["center"],
    2: ["top-left", "bottom-right"],
    3: ["top-left", "center", "bottom-right"],
    4: ["top-left", "top-right", "bottom-left", "bottom-right"],
    5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
    6: ["top-left", "middle-left", "bottom-left", "top-right", "middle-right", "bottom-right"]
  };

  faces[num].forEach(pos => {
    const pip = document.createElement("div");
    pip.className = `pip ${pos}`;
    dice.appendChild(pip);
  });
}

function updateHistory() {
  historyEl.innerHTML = "";
  history.forEach((num, index) => {
    const li = document.createElement("li");
    li.textContent = `Roll ${index + 1} : ${num}`;
    historyEl.appendChild(li);
  });
}

rollBtn.addEventListener("click", rollDice);
