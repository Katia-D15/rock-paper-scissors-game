const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const gameArea = document.getElementsByClassName('game-area')[0];
const user = document.getElementsByClassName('user')[0];
const computer = document.getElementsByClassName('computer')[0];
const choices=["rock","paper","scissors"];
const scoreArea = document.getElementsByClassName('score-area')[0];




/**
 * Function that defines the image and the choice made by the user when he clicks on the rock button
 */


function rockUser(){
    user.innerHTML="";
    let sentence = document.createElement('p')
    sentence.textContent='You choose rock';

    let img = document.createElement('img');
    img.src='assets/images/rock.jpg';
    img.alt ='Rock';

    user.appendChild(img);
    user.appendChild(sentence)


}

/**
 * Function that defines the image and the choice made by the user when he clicks on the paper button
 */

function paperUser(){
    user.innerHTML="";
    let sentence = document.createElement('p')
    sentence.textContent='You choose paper';

    let img = document.createElement('img');
    img.src='assets/images/paper.jpg';
    img.alt ='Paper';

    user.appendChild(img);
    user.appendChild(sentence)
   

}

/**
 * Function that defines the image and the choice made by the user when he clicks on the scissors button
 */

function scissorsUser(){
    user.innerHTML="";
    let sentence = document.createElement('p')
    sentence.textContent='You choose scissors';

    let img = document.createElement('img');
    img.src='assets/images/scissors.jpg';
    img.alt ='Scissors';

    user.appendChild(img);
    user.appendChild(sentence)
  
}


/**
 * function that defines the choice of computer
 */

function computerChoices(){
    computer.innerHTML="";

    let computerChoice=choices[Math.floor(Math.random()*3)];

    let img = document.createElement('img');
    let sentence = document.createElement('p');
    
    

    if(computerChoice==='rock'){
        img.src='assets/images/rock.jpg';
        img.alt='Rock';
        sentence.textContent='Computer choose rock';
        
    } else if(computerChoice==='paper'){
        img.src='assets/images/paper.jpg'
        img.alt='Paper';
        sentence.textContent='Computer choose paper';

    }else if(computerChoice==='scissors'){
        img.src='assets/images/scissors.jpg'
        img.alt='Scissors';
        sentence.textContent='Computer choose scissors';
    }
    computer.appendChild(img);
    computer.appendChild(sentence);

    return computerChoice;
}

/**
 * function that compares the user's choice with the computer's choice
 */

function playGame(userChoice){
    //Computer choice
    let computerChoice = computerChoices();


    
    //User choice
    if(userChoice==="rock"){
        rockUser();
    }else if(userChoice==="paper"){
        paperUser();
    }else if(userChoice==="scissors"){
        scissorsUser();
    }


    //Compare choices
    if(userChoice===computerChoice){
        
    } else if(
        (userChoice==="rock" && computerChoice==="scissors") ||
        (userChoice==="paper" && computerChoice==="rock") ||
        (userChoice==="scissors" && computerChoice==="paper")
    ){
        
        userScore();
    }else {
        computerScore();
    }
}

/**
 * function that defines the user's score
 */
function userScore(){
    let userPoints=parseInt(document.getElementById('user-score').innerText);
    document.getElementById('user-score').innerText=userPoints+1;
}

/**
 * function that defines the computer's score
 */
function computerScore(){
    let computerPoints=parseInt(document.getElementById('computer-score').innerText);
    document.getElementById('computer-score').innerText=computerPoints+1;
}

/**
 * function that defines the number of attempts
 */




