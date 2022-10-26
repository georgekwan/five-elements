'use strict';
import fetch from 'node-fetch';
import rl from 'readline-sync';
import cfonts from 'cfonts';
import chalk from 'chalk';
let goldCoins = ['0', '0', '0', '0', '0'];
let keepPlaying = true;

async function fiveElementClient() {
  cfonts.say('Five|Elements', {
    font: 'tiny',
    align: 'left',
    colors: ['system'],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: '0',
    gradient: false,
    independentGradient: false,
    transitionGradient: false,
    env: 'node',
  });

  let playerInput = rl.keyIn(
    '\nSelect: (e)arth - (f)ire - (w)ater - (l)ightning - win(d)\nTo exit the game enter (x) \n\nWhich element would you like to use? (e/f/w/l/d/x) ',
    {
      hideEchoBack: false,
      mask: '',
      limit: 'efwldobx',
    }
  );
  if (playerInput == 'x') {
    keepPlaying = false;
    return;
  }
  const response = await fetch(
    `http://localhost:4003/gameThree?playerInput=` + playerInput
  );
  if (response.status !== 200) {
    console.log('That is not a valid key');
    return;
  }

  const result = await response.json(); // use then

  gameDecision(result);
}
// fiveElementClient();
async function mainLoop() {
  while (keepPlaying && goldCoins.length > 0) {
    await fiveElementClient();
  }
  console.log(
    chalk.yellow.bold(
      `\nYour final score is ${goldCoins.length} gold coin(s)\n\n*** Thank you for playing ***`
    )
  );
}
mainLoop();

function gameDecision(rs) {
  console.log(chalk.blue.bold(`\nChubby casted: ${rs.userChoice}`));
  console.log(chalk.red.bold(`\nRaizel casted: ${rs.compChoice}`));

  function determineWinner() {
    if (rs.userChoice === rs.compChoice) {
      return 999;
    }

    if (rs.userChoice === 'earth') {
      if (rs.compChoice === 'fire' || rs.compChoice === 'lightning') {
        return 12;
      } else {
        return 32;
      }
    }
    if (rs.userChoice === 'water') {
      if (rs.compChoice === 'earth' || rs.compChoice === 'wind') {
        return 13;
      } else {
        return 33;
      }
    }
    if (rs.userChoice === 'fire') {
      if (rs.compChoice === 'water' || rs.compChoice === 'lightning') {
        return 14;
      } else {
        return 34;
      }
    }
    if (rs.userChoice === 'wind') {
      if (rs.compChoice === 'earth' || rs.compChoice === 'fire') {
        return 15;
      } else {
        return 35;
      }
    }
    if (rs.userChoice === 'lightning') {
      if (rs.compChoice === 'wind' || rs.compChoice === 'water') {
        return 16;
      } else {
        return 36;
      }
    }
    if (rs.userChoice === 'forfeit') {
      return 11;
    }
    if (rs.userChoice === 'bomb') {
      return 777;
    }
  }

  function countGoldCoins() {
    const winners = determineWinner();
    if (winners >= 30 && winners <= 800) {
      // console.log('***test winner***');
      goldCoins.push('0');
    } else {
      // console.log('***test loser***');
      goldCoins.pop();
    }
    console.log(chalk.yellow.bold(`\nGold coin: ${goldCoins}`));
  }

  countGoldCoins();

  function gameMessageOutput() {
    let gameMessages = [];
    gameMessages[999] = `\n*** You were both using ${rs.userChoice}. It is a draw; try again :O ***`;
    gameMessages[12] = `\n--- Ouch! Raizel has struck you with ${rs.compChoice} :( ---`;
    gameMessages[32] = `\n+++ Great job!!! Raizel is now in pain because you used ${rs.userChoice} on her!!! +++`;
    gameMessages[13] = `\n--- Ouch! Raizel counter your ${rs.userChoice} element with ${rs.compChoice} :( ---`;
    gameMessages[33] = `\n+++ Great job!!! Your ${rs.userChoice} has knock Raizel out!!! +++`;
    gameMessages[14] = `\n--- Ouch! Raizel putted out your ${rs.userChoice} with ${rs.compChoice} :( ---`;
    gameMessages[34] = `\n+++ Great job!!! Raizel was burned because you threw ${rs.userChoice} at her!!! +++`;
    gameMessages[15] = `\n--- Ouch! You took some damaged from Raizel's ${rs.compChoice} element :( ---`;
    gameMessages[35] = `\n+++ Great job!!! You knocked down Raizel with your ${rs.userChoice} element!!! +++`;
    gameMessages[16] = `\n--- Ouch! You took some damaged from Raizel's ${rs.compChoice} element :( ---`;
    gameMessages[36] = `\n+++ Great job!!! Raizel was struck by your ${rs.userChoice}!!! +++`;
    gameMessages[777] = `\n++++ Boom!!! Raizel was severely injured by your ${rs.userChoice}. ++++`;
    gameMessages[11] = `\n--- You decided to forfeit the game :( ---`;

    function gameResultMessage() {
      switch (determineWinner(rs)) {
        case 999:
          return gameMessages[999];
          break;
        case 12:
          return gameMessages[12];
          break;
        case 32:
          return gameMessages[32];
          break;
        case 13:
          return gameMessages[13];
          break;
        case 33:
          return gameMessages[33];
          break;
        case 14:
          return gameMessages[14];
          break;
        case 34:
          return gameMessages[34];
          break;
        case 15:
          return gameMessages[15];
          break;
        case 35:
          return gameMessages[35];
          break;
        case 16:
          return gameMessages[16];
          break;
        case 36:
          return gameMessages[36];
          break;
        case 777:
          return gameMessages[777];
          break;
        case 11:
          return gameMessages[11];
          break;
      }
    }

    return chalk.bold(gameMessages[determineWinner()]);
  }

  console.log(gameMessageOutput());
  // console.log(determineWinner());
}
