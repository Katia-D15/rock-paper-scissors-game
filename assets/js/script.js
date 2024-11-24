const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const gameArea = document.getElementsByClassName('game-area')[0];
const user = document.getElementsByClassName('user')[0];
const computer = document.getElementsByClassName('computer')[0];
const userImage = document.getElementById('user-image');
const choices=["rock","paper","scissors"];
const scoreArea = document.getElementsByClassName('score-area')[0];




/**
 * Function that defines the image and the choice made by the user when he clicks on the rock button
 */


function rockUser(){
    userChoice="rock";
    user.innerHTML='';
    let sentence = document.createElement('p')
    sentence.textContent='You choose rock';

    let img = document.createElement('img');
    img.src='assets/images/rock.jpg';
    img.alt ='Rock';

    

    user.appendChild(img);
    user.appendChild(sentence)

    playGame();

}

/**
 * Function that defines the image and the choice made by the user when he clicks on the paper button
 */

function paperUser(){
    userChoice="paper";
    user.innerHTML='';
    let sentence = document.createElement('p')
    sentence.textContent='You choose paper';

    let img = document.createElement('img');
    img.src='assets/images/paper.jpg';
    img.alt ='Paper';

    

    user.appendChild(img);
    user.appendChild(sentence)
   
    playGame();

}

/**
 * Function that defines the image and the choice made by the user when he clicks on the scissors button
 */

function scissorsUser(){
    userChoice="scissors";
    user.innerHTML='';
    let sentence = document.createElement('p')
    sentence.textContent='You choose scissors';

    let img = document.createElement('img');
    img.src='assets/images/scissors.jpg';
    img.alt ='Scissors';

    

    user.appendChild(img);
    user.appendChild(sentence)
  
    playGame();
}



