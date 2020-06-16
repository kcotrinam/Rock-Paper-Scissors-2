"use strict";
const options = ["rock", "paper", "scissors"]
const imagesPlayerOption = ["img/right-rock.png", "img/right-paper.png", "img/right-scissors.png"],
        imagesComputerOption = ["img/left-rock.png", "img/left-paper.png", "img/left-scissors.png"]

const pcImageChoice = document.querySelector("#pc-choice")







const computerRandomChoice = options[Math.floor(Math.random() * options.length)]


const showComputerChoice = () => {
    switch (computerRandomChoice) {
        case 'rock':
            pcImageChoice.src = `img/left-${computerRandomChoice}.png`
            break;
        case 'paper':
            pcImageChoice.src = `img/left-${computerRandomChoice}.png`
            break
        default:
            pcImageChoice.src = `img/left-${computerRandomChoice}.png`
            break;
    }
        
    
}

document.addEventListener('DOMContentLoaded', () =>{
    showComputerChoice();
})