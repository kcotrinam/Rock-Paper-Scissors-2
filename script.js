"use strict";
const options = ["rock", "paper", "scissors"]
const imagesPlayerOption = ["img/right-rock.png", "img/right-paper.png", "img/right-scissors.png"],
        imagesComputerOption = ["img/left-rock.png", "img/left-paper.png", "img/left-scissors.png"];
const playerOptions = [...document.querySelectorAll('.img-item')]
const playerChoiceImage = document.querySelector("#player-choice")

const pcImageChoice = document.querySelector("#pc-choice");


    
let playerChoice
let computerChoice

playerOptions.map(option => {
    option.addEventListener('click', e => {
        playerChoice = e.target.alt
        playerChoiceImage.src = `img/right-${playerChoice}.png`
        showComputerChoice();
    })
    
})







const showComputerChoice = () => {
    const computerRandomChoice = options[Math.floor(Math.random() * options.length)];
    switch (computerRandomChoice) {
        case 'rock':
            pcImageChoice.src = `img/left-${computerRandomChoice}.png`;
            computerChoice = computerRandomChoice
            break;
        case 'paper':
            pcImageChoice.src = `img/left-${computerRandomChoice}.png`;
            computerChoice = computerRandomChoice
            break;
        default:
            pcImageChoice.src = `img/left-${computerRandomChoice}.png`;
            computerChoice = computerRandomChoice
            break;
    }
        
    
}

document.addEventListener('DOMContentLoaded', () =>{

})