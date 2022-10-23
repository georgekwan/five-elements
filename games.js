import { winCoinFlip, shinyCoinCollect, tinyCreatureLeft } from "./story.js";
import chalk from "chalk";
export let coinFlipMessage, diceRollMessage, magicMessage;
export let items = [];

export function coinFlip(playerInput) {
  let playerGuess = playerInput === "h" ? "heads" : "tails";
  let compGuess = Math.random() > 0.5 ? "heads" : "tails";
  console.log(chalk.blue.bold(playerGuess));
  console.log(chalk.red.bold(compGuess));
  if (playerGuess !== compGuess) {
    coinFlipMessage = `***The coin result is ${compGuess} but you guessed ${playerGuess}, try again :(***`;
    console.log(chalk.red.bold("loss"));
    return 0;
  } else {
    coinFlipMessage =
      `***The coin result is ${compGuess} and you guessed ${playerGuess}, you win :)***` +
      winCoinFlip +
      shinyCoinCollect +
      tinyCreatureLeft;
  }
}
export function diceRoll() {
  let playerRoll = Math.floor(Math.random() * 40 + 1);
  let compRoll = Math.floor(Math.random() * 40 + 1);
  console.log("Player " + playerRoll + " vs." + "Grumpy " + compRoll);

  if (playerRoll === compRoll) {
    diceRollMessage = `***Grumpy's dice result is ${compRoll} but your roll is ${playerRoll}, it is a draw, try again :(***`;
    console.log(chalk.gray.bold("draw"));
    return 0;
  } else if (playerRoll < compRoll) {
    diceRollMessage = `***Grumpy's dice result is ${compRoll} but your roll is ${playerRoll}, try again :(***`;
    console.log(chalk.red.bold("loss"));
    return 1;
  } else {
    diceRollMessage = `***Grumpy's dice result is ${compRoll} and your roll is ${playerRoll}, you win :)***`;
    items.push("golden collar");
    console.log(chalk.green.bold("win"));
    return 2;
  }
}

export function earthFireWater(gamerInput) {
  const getUserChoice = () => {
    // gamerInput = gamerInput();
    switch (gamerInput) {
      case "e":
        return "earth";
        break;
      case "w":
        return "water";
        break;
      case "f":
        return "fire";
        break;
      case "b":
        return "bomb";
        break;
    }
  };
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "earth";
        break;
      case 1:
        return "water";
        break;
      case 2:
        return "fire";
        break;
    }
  }

  function determineWinner(userChoice, compChoice) {
    let magicMessage;
    if (userChoice === compChoice) {
      magicMessage = "It is a draw, try again :(";
      console.log(chalk.gray.bold("draw"));
    }

    if (userChoice === "earth") {
      if (compChoice === "fire") {
        magicMessage = `Ouch! Raizel burnt you with ${compChoice} :(`;
        console.log(chalk.red.bold("loss"));
        return 0;
      } else {
        magicMessage = `Great job!!! Raizel is now in pain because you used ${userChoice} on her!!!`;
        console.log(chalk.green.bold("win"));
        return 1;
      }
    }
    if (userChoice === "water") {
      if (compChoice === "earth") {
        magicMessage = `***Ouch! Raizel assorbed your ${userChoice} with ${compChoice} :(***`;
        console.log(chalk.red.bold("loss"));
        return 0;
      } else {
        magicMessage = `***Great job!!! You used ${userChoice} to knock Raizel out!!!***`;
        console.log(chalk.green.bold("win"));
        return 1;
      }
    }
    if (userChoice === "fire") {
      if (compChoice === "water") {
        magicMessage = `***Ouch! Raizel putted out your ${userChoice} with ${compChoice} :(***`;
        console.log(chalk.red.bold("loss"));
        return 0;
      } else {
        magicMessage = `***Great job!!! Raizel was burned because you threw ${userChoice} at her!!!***`;
        console.log(chalk.green.bold("win"));
        return 1;
      }
    }

    if (userChoice === "bomb") {
      magicMessage = `***Raizel was severely injured by your ${userChoice}.***`;
      console.log(chalk.green.bold("win"));
      return 1;
    }
  }

  function playGame() {
    const userChoice = getUserChoice();
    const compChoice = getComputerChoice();
    console.log(`Chubby threw: ${userChoice}`);
    console.log(`Raizel threw: ${compChoice}`);
    console.log(determineWinner(userChoice, compChoice));
  }
  return playGame();
  // console.log(getUserChoice());
  // console.log(`*testing* Chubby threw: ${userChoice}`);
  // console.log(`*testing* Raizel threw: ${compChoice}`);
}
