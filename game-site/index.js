// Select all buttons
const gameButtons = document.querySelectorAll(".game-button");

// Add event listener to each one
gameButtons.forEach(button => {
  button.addEventListener("click", () => handleGame(button.id));
});

// Handle game click
function handleGame(gameId) {
  switch (gameId) {
    case "rps":
      window.location.href = "games/RockPaperScissors/rps.html";
      break;
    case "numguess":
      window.location.href = "games/NumGuess/numguess.html";
      break;
  }
}
