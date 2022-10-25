'use strict';
import { winCoinFlip, shinyCoinCollect, tinyCreatureLeft } from './story.js';
import chalk from 'chalk';
export let diceRollMessage, magicMessage;

let playerInput = 'h';
export let playerGuess = playerInput === 'h' ? 'heads' : 'tails';
export let compGuess = Math.random() > 0.5 ? 'heads' : 'tails';

export function coinFlip(playerGuess, compGuess) {
  console.log(chalk.blue.bold(`You guess: ${playerGuess}`));
  console.log(chalk.red.bold(`The coin flip result is: ${compGuess}`));
  if (playerGuess !== compGuess) {
    return 0;
  } else {
    return 1;
  }
}
coinFlip(playerGuess, compGuess);
let coinFlipMessageLoss, coinFlipMessageWin;
export function coinFlipMessage(compGuess, playerGuess) {
  if (coinFlip === 0) {
    coinFlipMessageLoss = `***The coin result is ${compGuess} but you guessed ${playerGuess}, try again :(***`;
    console.log(chalk.red.bold(coinFlipMessageLoss));
    return coinFlipMessageLoss;
  } else {
    coinFlipMessageWin =
      `***The coin result is ${compGuess} and you guessed ${playerGuess}, you win :)***` +
      console.log(chalk.green.bold(coinFlipMessageWin));
    return coinFlipMessageWin;
  }
}

export function diceRoll() {
  let playerRoll = Math.floor(Math.random() * 40 + 1);
  let compRoll = Math.floor(Math.random() * 40 + 1);
  console.log('Player ' + playerRoll + ' vs.' + 'Grumpy ' + compRoll);

  return {
    playerRoll: playerRoll,
    compRoll: compRoll,
  };

  // if (playerRoll === compRoll) {
  //   diceRollMessage = `*** Grumpy's dice result is ${compRoll} but your roll is ${playerRoll}, it is a draw, try again :O ***`;
  //   console.log(chalk.yellow.bold(diceRollMessage));
  //   return 0;
  // } else if (playerRoll < compRoll) {
  //   diceRollMessage = `--- Grumpy's dice result is ${compRoll} but your roll is ${playerRoll}, try again :( ---`;
  //   console.log(chalk.red.bold(diceRollMessage));
  //   return 1;
  // } else {
  //   diceRollMessage = `+++ Grumpy's dice result is ${compRoll} and your roll is ${playerRoll}, you win :) +++`;

  //   console.log(chalk.green.bold(diceRollMessage));
  //   return 2;
  // }
}

export function fiveElements(gamerInput) {
  // associative array if possible
  // let getUserChoice = {
  //   "e" => 'earth',
  //   "w"=> 'water',
  //   "f"=> 'fire',
  //   "d"=> 'wind',
  //   "l"=> 'lightning',
  //   "b"=> 'bomb',
  // };
  // return getUserChoice[gamerInput];

  function getUserChoice() {
    switch (gamerInput) {
      case 'e':
        return 'earth';
        break;
      case 'w':
        return 'water';
        break;
      case 'f':
        return 'fire';
        break;
      case 'd':
        return 'wind';
        break;
      case 'l':
        return 'lightning';
        break;
      case 'b':
        return 'bomb';
        break;
    }
  }
  // use random array if possible
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5);
    switch (randomNumber) {
      case 0:
        return 'earth';
        break;
      case 1:
        return 'water';
        break;
      case 2:
        return 'fire';
        break;
      case 3:
        return 'wind';
        break;
      case 4:
        return 'lightning';
        break;
    }
  }

  console.log(getUserChoice());
  console.log(getComputerChoice());
  return {
    userChoice: getUserChoice(),
    compChoice: getComputerChoice(),
  };

  // function determineWinner(userChoice, compChoice) {
  //   if (userChoice === compChoice) {
  //     magicMessage = `*** You were both using ${userChoice}. It is a draw; try again :O ***`;
  //     console.log(chalk.yellow.bold(magicMessage));
  //     return 0;
  //   }

  //   if (userChoice === 'earth' || userChoice === 'wind') {
  //     if (compChoice === 'fire') {
  //       magicMessage = `--- Ouch! Raizel burnt you with ${compChoice} :( ---`;
  //       console.log(chalk.red.bold(magicMessage));
  //       return 1;
  //     } else {
  //       magicMessage = `+++ Great job!!! Raizel is now in pain because you used ${userChoice} on her!!! +++`;
  //       console.log(chalk.green.bold(magicMessage));
  //       return 2;
  //     }
  //   }
  //   if (userChoice === 'water' || userChoice === 'wind') {
  //     if (compChoice === 'earth') {
  //       magicMessage = `--- Ouch! Raizel assorbed your ${userChoice} element with ${compChoice} :( ---`;
  //       console.log(chalk.red.bold(magicMessage));
  //       return 1;
  //     } else {
  //       magicMessage = `+++ Great job!!! You used ${userChoice} to knock Raizel out!!! +++`;
  //       console.log(chalk.green.bold(magicMessage));
  //       return 2;
  //     }
  //   }
  //   if (userChoice === 'fire' || userChoice === 'lightning') {
  //     if (compChoice === 'water') {
  //       magicMessage = `--- Ouch! Raizel putted out your ${userChoice} with ${compChoice} :( ---`;
  //       console.log(chalk.red.bold(magicMessage));
  //       return 1;
  //     } else {
  //       magicMessage = `+++ Great job!!! Raizel was burned because you threw ${userChoice} at her!!! +++`;
  //       console.log(chalk.green.bold(magicMessage));
  //       return 2;
  //     }
  //   }
  //   if (userChoice === 'earth' || userChoice === 'fire') {
  //     if (compChoice === 'lightning') {
  //       magicMessage = `--- Ouch! You took some damaged from Raizel's ${compChoice} element :( ---`;
  //       console.log(chalk.red.bold(magicMessage));
  //       return 1;
  //     } else {
  //       magicMessage = `+++ Great job!!! You knocked down Raizel with your ${userChoice} power!!! +++`;
  //       console.log(chalk.green.bold(magicMessage));
  //       return 2;
  //     }
  //   }
  //   if (userChoice === 'lightning' || userChoice === 'water') {
  //     if (compChoice === 'wind') {
  //       magicMessage = `--- Ouch! You took some damaged from Raizel's ${compChoice} element :( ---`;
  //       console.log(chalk.red.bold(magicMessage));
  //       return 1;
  //     } else {
  //       magicMessage = `+++ Great job!!! Raizel was striked by your ${userChoice}!!! +++`;
  //       console.log(chalk.green.bold(magicMessage));
  //       return 2;
  //     }
  //   }
  //   if (userChoice === 'bomb') {
  //     magicMessage = `++++ Raizel was severely injured by your ${userChoice}. ++++`;
  //     console.log(chalk.green.bold(magicMessage));
  //     return 2;
  //   }
  // }
  // const userChoice = getUserChoice();
  // const compChoice = getComputerChoice();
  // function playGame() {
  // const userChoice = getUserChoice();
  // const compChoice = getComputerChoice();
  // console.log(chalk.blackBright.bold(`\nChubby threw: ${userChoice}`));
  // console.log(chalk.blackBright.bold(`\nRaizel threw: ${compChoice}`));
  //
  // console.log(magicMessage);
  // console.log(determineWinner(userChoice, compChoice));
  //   return determineWinner(userChoice, compChoice);
  // }
  // return playGame();
}
