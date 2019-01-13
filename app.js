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
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore; 
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You beat Me!` 
  actionMessage_p.innerHTML = `Make Your Move.`
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 750);
}

function lose(userChoice, computerChoice) { 
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore; 
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. I beat you.`
  actionMessage_p.innerHTML = `Try Again...`
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 750);
}

function draw(userChoice, computerChoice){ 
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `It's a Draw....`
  actionMessage_p.innerHTML = `Make The Next Move...`
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 750); 
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
  rock_div.addEventListener('click',() => game("r"));

  paper_div.addEventListener('click',() => game("p"));

  scissors_div.addEventListener('click',() => game("s"));
}




main(); 