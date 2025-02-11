

// Changing the CSS Style (of Hello Button)
function changeStyle(button) {
  // Add "active" class to change styles
  button.classList.add("active");

  // Remove "active" class after 2 seconds to revert back
  setTimeout(() => {
      button.classList.remove("active");
  }, 1500);
}





// Advanced Function
let isAutoPlaying = false;
let intervalID;

function autoPlay() {
    const button = document.querySelector('.auto-play-button');

    if (!isAutoPlaying) {    
        intervalID = setInterval(() => {            // Arrow Function
            const playerMove = pickComputerMove();
            playRPSgame(playerMove);
        }, 1000);
        isAutoPlaying = true;
        button.textContent = 'Stop Auto Playing'; // Change button text
    } else {
        clearInterval(intervalID);
        isAutoPlaying = false;
        button.textContent = 'Auto Play'; // Reset button text
    }
}






// localStorage is a built-in web API in JavaScript that allows you to store key-value pairs in a web browser persistently (even after the page is reloaded or the browser is closed).

// Event Listeners
document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playRPSgame('Rock');
});

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playRPSgame('Paper');
});

document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playRPSgame('Scissors');
});



document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r')   {playRPSgame('Rock');
    } else if(event.key === 'p') {playRPSgame('Paper');
    } else if(event.key === 's') {playRPSgame('Scissors');}
});




    // Object & Function (Building our RPS Game)
  const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
  };

// Function to update score display
  function updateScoreDisplay() {
      document.querySelector('.rps-score').innerHTML = 
          `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

// Call it once when the page loads
  updateScoreDisplay();

  function playRPSgame(playerMove) {
      const computerMove = pickComputerMove();
      let result = '';

      if (playerMove === 'Scissors') {
          if (computerMove === 'Rock') {
              result = 'You Lose.';
          } else if (computerMove === 'Paper') {
              result = 'You Win!';
          } else {
              result = 'Tie';
          }
      } else if (playerMove === 'Paper') {
          if (computerMove === 'Rock') {
              result = 'You Win!';
          } else if (computerMove === 'Paper') {
              result = 'Tie';
          } else {
              result = 'You Lose.';
          }
      } else {
          if (computerMove === 'Rock') {
              result = 'Tie';
          } else if (computerMove === 'Paper') {
              result = 'You Lose.';
          } else {
              result = 'You Win!';
          }
      }

      if (result === 'You Win!') {
          score.wins += 1;
      } else if (result === 'Tie') {
          score.ties += 1;
      } else {
          score.losses += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      // Update result display
      document.querySelector('.rps-result').innerHTML = 
          `You picked <b>${playerMove}</b>. Computer picked <b>${computerMove}</b>. <br><b>${result}</b>`;

      // Update score display
      updateScoreDisplay();
  }

// Function to pick a random computer move
  function pickComputerMove() {
      const randomNumber = Math.random();
      let computerMove = '';

      if (randomNumber < 1 / 3) {
          computerMove = 'Rock';
      } else if (randomNumber < 2 / 3) {
          computerMove = 'Paper';
      } else {
          computerMove = 'Scissors';
      }

      return computerMove;
  }

// Reset score function
  function resetScore() {
      const buttonElement = document.querySelector('.reset-button');

      buttonElement.innerHTML = 'Score Resetted';

      // Reset score object and localStorage
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');

      // Clear result display
      document.querySelector('.rps-result').innerHTML = '';

      // Update score display immediately
      updateScoreDisplay();

      setTimeout(() => {
          buttonElement.innerHTML = 'Reset Score';
      }, 700);
  }
