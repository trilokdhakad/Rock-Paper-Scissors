    //alert('hello');
    console.log('some' + 'text')
    const var1 = 89;        // constant
    console.log(var1 - 5);
    // var1 = 5;       // not allowed
    console.log(var1 - 15);


    let cartQuantity = 0;     // variable
    console.log(typeof cartQuantity);


    // Booleans
    console.log(4.0 === '4');
    console.log(4.0 == '4');
    console.log(4 !== 4.0);
    console.log(4 != 4.0);






    // DOM (Document Object Model)
// allows JavaScript to interact with and manipulate the structure, content, and style of an HTML document
    console.log(document.title);
    document.title = 'Changed The Title using DOM';
    console.log(document.title);

    console.log(document.body);  // we get the whole control of html in js by dom --> Reference to the Entire <body> Element
    console.log(typeof document.body);

    // document.body.innerHTML;  // Gets or Sets the HTML Inside <body>     ---> Handle with CARE

    const buttonElement = document.querySelector('.red-button');  //used to select the first matching HTML element based on a CSS selector or use class.
    console.log(buttonElement);










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










    // Object
    const product = {     // Properties
      messsage: 'hello',  
      name: 'socks',
      price: 1090,
      ['delivery-time']: '1 day',
      rating: {       // object inside object
        stars: 4.5,
        count: 87
      },
      fun: function fucntion1() {// Method - function inside object
      console.log('Hey, I am here!');
    }
    };

    const product2 = product; // Objects are references

    console.log(product);
    console.log(product2);
    console.log(product === product2);
    console.log(product.rating.stars);

    console.log(product['name']);   // can use both . and [] to access properties of an object
    
    const {name, price} = product2;   //const name = product.name
    console.log(name);
    console.log(price);

    product2.name = 'cotton socks';
    console.log(product);
    console.log(product['delivery-time']);

    product.newProperty = true;
    console.log(product);

    delete product.newProperty;
    console.log(product);
    product.fun();





    console.log(typeof console.log);    // function of console --> method
    console.log(typeof console);    // object

    console.log(JSON.stringify(product));  //js object to JSON

    const jsonString = JSON.stringify(product);
    console.log(JSON.parse(jsonString));  //JSON to js object
















// Advanced Functions
/*A higher-order function is a function that can do at least one of the following:  
1. Takes another function as an argument (callback function)  
2. Returns a function as its result

    // Some Examples

    greeting();
    function greeting() {       //Allows Hoisting
        console.log('Greetings');
    }    

    const functionGreet = function() {          // Anonymous Function 
        console.log('Greetings2');
    }
    functionGreet();


    const object1 = {
        num: 2,
        fun: function(){
            console.log('Greetings3');
        }
    };
    object1.fun();


    function run(param) {param();}
    run(function() { console.log('Greetings4'); });


    setTimeout(function() {     //Asynchronous code
        console.log('timeout');
        console.log('timeout2');
    }, 3000);

    console.log('next line');

*/









