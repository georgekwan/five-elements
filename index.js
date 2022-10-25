'use strict';
import fetch from 'node-fetch';
import rl from 'readline-sync';
import cfonts from 'cfonts';
import chalk from 'chalk';
let goldCoins = ['0', '0', '0', '0', '0'];

do {
  // console.log(
  //   cfonts.say('Five Elements', {
  //     font: 'block',
  //     align: 'center',
  //     colors: ['system'],
  //     letterSpacing: 1,
  //     lineHeight: 1,
  //     space: true,
  //   })
  // );
  async function fiveElementClient() {
    console.log(`**Testing** You have ${goldCoins.length} gold coins`);
    let playerInput = rl.keyIn(
      '\nWhich magic would you like to use? (e/f/w/l/d) ',
      {
        hideEchoBack: false,
        mask: '',
        limit: 'efwldb',
      }
    );

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
  fiveElementClient();
  function gameDecision(rs) {
    console.log(chalk.blackBright.bold(`\nChubby casted: ${rs.userChoice}`));
    console.log(chalk.blackBright.bold(`\nRaizel casted: ${rs.compChoice}`));

    function determineWinner() {
      if (rs.userChoice === rs.compChoice) {
        return 999;
      }

      if (rs.userChoice === 'earth') {
        if (rs.compChoice === 'fire' || rs.compChoice === 'lightning') {
          goldCoins.pop();
          return 12;
        } else {
          // ma
          goldCoins.push = ['0'];
          return 32;
        }
      }
      if (rs.userChoice === 'water') {
        if (rs.compChoice === 'earth' || rs.compChoice === 'wind') {
          goldCoins.pop();
          return 13;
        } else {
          goldCoins.push = ['0'];
          return 33;
        }
      }
      if (rs.userChoice === 'fire') {
        if (rs.compChoice === 'water' || rs.compChoice === 'lightning') {
          goldCoins.pop();
          return 14;
        } else {
          goldCoins.push = ['0'];
          return 34;
        }
      }
      if (rs.userChoice === 'wind') {
        if (rs.compChoice === 'earth' || rs.compChoice === 'fire') {
          goldCoins.pop();
          return 15;
        } else {
          goldCoins.push = ['0'];
          return 35;
        }
      }
      if (rs.userChoice === 'lightning') {
        if (rs.compChoice === 'wind' || rs.compChoice === 'water') {
          goldCoins.pop();
          return 16;
        } else {
          goldCoins.push = ['0'];
          return 36;
        }
      }
      if (rs.userChoice === 'bomb') {
        goldCoins.push = ['0'];
        return 777;
      }
    }

    function countGoldCoins() {
      if (determineWinner() >= 30 && determineWinner() <= 800) {
        return (goldCoins.push = ['0']);
      } else {
        return goldCoins.pop();
      }
    }
    countGoldCoins();
    function gameMessageOutput() {
      let gameMessages = [];
      gameMessages[999] = `*** You were both using ${rs.userChoice}. It is a draw; try again :O ***`;
      gameMessages[12] = `--- Ouch! Raizel has struck you with ${rs.compChoice} :( ---`;
      gameMessages[32] = `+++ Great job!!! Raizel is now in pain because you used ${rs.userChoice} on her!!! +++`;
      gameMessages[13] = `--- Ouch! Raizel counter your ${rs.userChoice} element with ${rs.compChoice} :( ---`;
      gameMessages[33] = `+++ Great job!!! Your ${rs.userChoice} has knock Raizel out!!! +++`;
      gameMessages[14] = `--- Ouch! Raizel putted out your ${rs.userChoice} with ${rs.compChoice} :( ---`;
      gameMessages[34] = `+++ Great job!!! Raizel was burned because you threw ${rs.userChoice} at her!!! +++`;
      gameMessages[15] = `--- Ouch! You took some damaged from Raizel's ${rs.compChoice} element :( ---`;
      gameMessages[35] = `+++ Great job!!! You knocked down Raizel with your ${rs.userChoice} element!!! +++`;
      gameMessages[16] = `--- Ouch! You took some damaged from Raizel's ${rs.compChoice} element :( ---`;
      gameMessages[36] = `+++ Great job!!! Raizel was struck by your ${rs.userChoice}!!! +++`;
      gameMessages[777] = `++++ Boom!!! Raizel was severely injured by your ${rs.userChoice}. ++++`;

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
        }
      }

      return chalk.bold(gameMessages[determineWinner()]);
    }

    console.log(`You have ${goldCoins.length} gold coins`);
    console.log(gameMessageOutput());
  }
} while (goldCoins.length <= 0);
