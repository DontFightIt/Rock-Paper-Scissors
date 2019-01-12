let userScore = 0; 
let computerScore = 0; 
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score"); 
const scoreBoard_div = document.querySelector(".score-board"); 
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s"); 
const actionMessage_p = document.getElementById("action-message")

function getComputerChoice(){ 
  const choices = ['r', 'p', 's'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

function convertToWord(letter){ 
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";

}


function win(userChoice, computerChoice) { 
  userScore++;
  userScore_span.innerHTML = userScore; 
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You beat Me!`
  actionMessage_p.innerHTML = `Make Your Move.`
}

function lose(userChoice, computerChoice) { 
  computerScore++;
  userScore_span.innerHTML = userScore; 
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. I beat you.`
  actionMessage_p.innerHTML = `Try Again...`
}

function draw(userChoice, computerChoice) { 
  userScore_span.innerHTML = userScore; 
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `It's a Draw...`
  actionMessage_p.innerHTML = `Make The Next Move...`
}




function game(userChoice) {
  const computerChoice = getComputerChoice(); 
  switch (userChoice + computerChoice) { 
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice); 
      break; 
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}


function main(){ 
  rock_div.addEventListener('click', function() {
    game("r"); 
  })

  paper_div.addEventListener('click', function() {
    game("p")
  })

  scissors_div.addEventListener('click', function() {
    game("s")
  });
}




main(); 