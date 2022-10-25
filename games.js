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
