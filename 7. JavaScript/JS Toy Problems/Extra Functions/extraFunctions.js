

//ROCK, PAPER, SCISSORS GAME ////////////////////////////////////////////////////////////////////////////////
    // Users Choice Funtion

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "scott young") {
      return userInput;
    } else
      console.log("Error!!! You need to use rock, paper, or scissors")
    }
  
    // Computers Choice Function
  
  let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()* 3);
    switch (randomNumber) {
      case 0: 
          return  "paper";
      case 1:
        return "rock";
      case 2:
        return "scissors";
    }
  }
  
    // Determining a Winner Function
  
  let determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
      return "It's a tie! Try Again";
    }
    
    if(userChoice === "scott young") {
      if (computerChoice === "paper" || computerChoice === "rock" || computerChoice === "scissors") {
      return "With a name like that, YOU ALWAYS WIN!!!  You are the Bomb!!!"; 
      }
    }
    
    if(userChoice === "rock") {
        if (computerChoice === "paper") {
        return "You lost!!!";
      } else {
        return "You win!!!";
      }
    }
    
    if(userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "You lost!!!";
      } else {
        return "You win!!!";
      }
    }
    
    if(userChoice === "scissors") {
      if(computerChoice === "rock") {
        return "You lost!!!";
      } else {
        return "You win!!!";
      }
    }
  }
  
    // Playing the Game Function
  
  let playGame = () => {
    let userChoice = getUserChoice("scissors");
    let computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();


// SLEEP DEBT CALCULATOR //////////////////////////////////////////////////////////////////////////////////////////

// This is the amount of hours you slept this week

function getSleepHours(day) {
    switch (day) {
      case "Monday":
          return 6;
      case "Tuesday":
          return 6;
      case "Wednesday":
          return 6;
      case "Thursday":
          return 10;
      case "Friday":
          return 5;
      case "Saturday":
          return 6;
      case "Sunday":
          return 5;
    }
  }

  // This is the total of the week
  
  function getActualSleepHours() {
    return getSleepHours('Monday') + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday")
  }

  // This is what is ideal for you
  
  function getIdealSleepHours() {
    var idealHours = 7;
    return idealHours * 7;
  }
  
  // This is the difference between the two 

  function calculateSleepDebt() {
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours();
    
    if(actualSleepHours === idealSleepHours){
       console.log("Perfect amount of sleep")
       } 
    if (actualSleepHours > idealSleepHours) {
        console.log('More sleep than you need')
       } 
    if (actualSleepHours < idealSleepHours) {
         console.log("You need more rest!!! You got " 
         + (idealSleepHours - actualSleepHours) 
         + ' hours less than what you need for the week.')
       };
  }
  
  calculateSleepDebt();



  