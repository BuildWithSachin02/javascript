const randomNumber = Math.floor(Math.random() * 20) + 1;
const message = document.getElementById("message");

document.getElementById("checkBtn").addEventListener("click", () => {
  const guess = Number(document.getElementById("guess").value);

  if (!guess) {
    message.textContent = "⛔ Enter a number";
  } else if (guess === randomNumber) {
    message.textContent = "🎉 Correct Guess!";
  } else if (guess > randomNumber) {
    message.textContent = "📈 Too High!";
  } else {
    message.textContent = "📉 Too Low!";
  }
});
