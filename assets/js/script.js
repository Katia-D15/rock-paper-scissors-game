//Select HTML elements

const gameArea = document.getElementsByClassName('game-area')[0];
const user = document.getElementsByClassName('user')[0];
const computer = document.getElementsByClassName('computer')[0];
const choices=["rock","paper","scissors"];
const scoreArea = document.getElementsByClassName('score-area')[0];
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.getElementById("result");



const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

//Event Listeners
rock.addEventListener("click",chooseRock);
paper.addEventListener("click",choosePaper);
scissors.addEventListener("click",chooseScissors);

function chooseRock(){
    playGame("rock");
    rockUser();
    numberTries();
    console.log("user choose rock");
}

function choosePaper(){
    playGame("paper");
    paperUser();
    numberTries();
    console.log("user choose paper");
}

function chooseScissors(){
    playGame("scissors");
    scissorsUser();
    numberTries();
    console.log("user choose scissors");
    
}


/**
 * Function that defines the image and the choice made by the user when he clicks on the rock button
 */


function rockUser() {
    user.innerHTML="";
    let sentence = document.createElement('p');
    sentence.textContent='You choose rock';

    let img = document.createElement('img');
    img.src='assets/images/rock.jpg';
    img.alt ='Rock';

    user.appendChild(img);
    user.appendChild(sentence);


}

/**
 * Function that defines the image and the choice made by the user when he clicks on the paper button
 */

function paperUser(){
    user.innerHTML="";
    let sentence = document.createElement('p');
    sentence.textContent='You choose paper';

    let img = document.createElement('img');
    img.src='assets/images/paper.jpg';
    img.alt ='Paper';

    user.appendChild(img);
    user.appendChild(sentence);
   

}

/**
 * Function that defines the image and the choice made by the user when he clicks on the scissors button
 */

function scissorsUser(){
    user.innerHTML="";
    let sentence = document.createElement('p');
    sentence.textContent='You choose scissors';

    let img = document.createElement('img');
    img.src='assets/images/scissors.jpg';
    img.alt ='Scissors';

    user.appendChild(img);
    user.appendChild(sentence);
  
}




/**
 * function that defines the choice of computer
 */

function getcomputerChoice(){
    computer.innerHTML="";

    let choiceComputer = choices[Math.floor(Math.random()*3)];
    
    let img = document.createElement('img');
    let sentence = document.createElement('p');
    
    
    if(choiceComputer==='rock'){
        img.src='assets/images/rock.jpg';
        img.alt='Rock';
        sentence.textContent='Computer choose rock';
        console.log("computer choice: rock");
        
    } else if(choiceComputer==='paper'){
        img.src='assets/images/paper.jpg';
        img.alt='Paper';
        sentence.textContent='Computer choose paper';
        console.log("computer choice: paper");

    }else if(choiceComputer==='scissors'){
        img.src='assets/images/scissors.jpg';
        img.alt='Scissors';
        sentence.textContent='Computer choose scissors';
        console.log("computer choice: scissors");
    }
    computer.appendChild(img);
    computer.appendChild(sentence);


    return choiceComputer;
    
}

/**
 * function that compares the user's choice with the computer's choice
 */

function winner(userChoice,computerChoice){
    console.log("Comparing choices:",userChoice,computerChoice);
    if(userChoice===computerChoice){
        console.log("draw");
        return "draw";
    } 
    else if(
        (userChoice==="rock" && computerChoice==="scissors") ||
        (userChoice==="paper" && computerChoice==="rock") ||
        (userChoice==="scissors" && computerChoice==="paper")
    ){
        console.log("user win");
        return "user";
    } else{
        console.log("computer win");
        return "computer";
    }

}


/**
 * Function that defines the logic of the game
 */

function playGame(userChoice){
    const computerChoice = getcomputerChoice();
    const result = winner(userChoice, computerChoice);
    score(result);

}


/**
 * function that defines the score
 */
let userScore = 0;
let computerScore =0;

function score(result){
    if(result === "user"){
        userScore++;
        userScoreSpan.textContent = userScore;
        resultDiv.textContent="You win!";
    }else if(result === "computer"){
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        resultDiv.textContent="Computer wins!"; 
    }else{
        resultDiv.textContent="It's a draw!";
    }
}


/**
 * function that defines the number of attempts
 */
function numberTries(){
    let tries = parseInt(document.getElementById('tries').innerText);
    if(tries<=5 && tries>1){
        document.getElementById('tries').innerText=--tries;
    }else if(tries===1){
        document.getElementById('tries').innerText=0;
        let phrase = document.createElement('p');
        phrase.textContent="Finish Game";   
        document.getElementById('tries').appendChild(phrase);
        endGame();
        
    }
}

/**
 * Function that defines if user won, draw or lost the game
 */

function finish(){
    if(userScore===computerScore){

        let finalSentence=document.createElement('strong');
        finalSentence.textContent="Draw!!!";
        document.getElementById('tries').appendChild(finalSentence);

    }else if(userScore > computerScore){
        
        let finalSentence=document.createElement('strong');
        finalSentence.textContent="You won!!!";
        document.getElementById('tries').appendChild(finalSentence);
        
    }else if(userScore < computerScore){
        
        let finalSentence=document.createElement('strong');
        finalSentence.textContent="You lost!!!";
        document.getElementById('tries').appendChild(finalSentence);
        
    }
}
/**
 * function that defines the end of game and disabled the buttons
 */
function endGame(){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    finish();     
}






