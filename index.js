'use strict';
import fetch from 'node-fetch';
import rl from 'readline-sync';
import cfonts from 'cfonts';
import chalk from 'chalk';

// let gameOneResult;
// let gameTwoResult;
// let gameThreeResult;
let items = [];
// do {
//   cfonts.say('Heads or Tails', {
//     font: 'block',
//     align: 'center',
//     colors: ['system'],
//     letterSpacing: 1,
//     lineHeight: 1,
//     space: true,
//   });
//   console.log(
//     chalk.bold('\n----------------\nThe commands are (h)eads or (t)ails')
//   );
//   let playerInput = rl.keyIn('\nDo you pick heads or tails? (h/t) ', {
//     hideEchoBack: false,
//     mask: '',
//     limit: 'ht',
//   });

//   fetch('http://localhost:4003/gameOne?playerInput=' + playerInput)
//     .then(response => response.json())
//     .then(json => console.log(json));
//   gameOneResult = coinFlip(playerInput.toLowerCase);
//   if (gameOneResult === 1) {
//     items.push('gold coin');
//   }
// } while (gameOneResult === 0);

// do {
//   cfonts.say('Dice Roll Battle', {
//     font: 'block',
//     align: 'center',
//     colors: ['system'],
//     letterSpacing: 1,
//     lineHeight: 1,
//     space: true,
//   });
//   let playerInput = rl.keyIn('\nAre you ready to roll? (r) ', {
//     hideEchoBack: false,
//     mask: '',
//     limit: 'r',
//   });

//   fetch('http://localhost:4003/gameTwo?playerInput=' + playerInput)
//     .then(response => response.json())
//     .then(json => console.log(json));
//   gameTwoResult = diceRoll(playerInput.toLowerCase);
//   if (gameTwoResult === 2) {
//     items.push('golden collar');
//   }
// } while (gameTwoResult !== 2);

// do {
//   cfonts.say('Five Elements', {
//     font: 'block',
//     align: 'center',
//     colors: ['system'],
//     letterSpacing: 1,
//     lineHeight: 1,
//     space: true,
//   });
//   console.log(
//     chalk.bold(
//       '\n----------------\nThe commands are (e)arth, (f)ire, (w)ater,(l)ightning, win(d)'
//     )
//   );
//   let playerInput = rl.keyIn(
//     '\nWhich magic would you like to use? (e/f/w/l/d) ',
//     {
//       hideEchoBack: false,
//       mask: '',
//       limit: 'efwldb',
//     }
//   );

//   fetch('http://localhost:4003/gameThree?playerInput=' + playerInput)
//     .then(response => response.json())
//     .then(json => console.log(json));
//   gameThreeResult = fiveElements(playerInput);
//   // console.log(playerInput);
//   // console.log(gameThreeResult);
//   if (gameThreeResult === 2) {
//     items.push('golden bone');
//   }
// } while (gameThreeResult !== 2);

// console.log(chalk.yellow.bold(`You have collected ` + items));
let goldCoins = [];
async function gameThree() {
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

  gameFour(result);
}
gameThree();
function gameFour(rs) {
  function determineWinner() {
    if (rs.userChoice === rs.compChoice) {
      return 1;
    }

    if (rs.userChoice === 'earth' || rs.userChoice === 'wind') {
      if (rs.compChoice === 'fire') {
        return 12;
      } else {
        // ma
        return 32;
      }
    }
    if (rs.userChoice === 'water' || rs.userChoice === 'wind') {
      if (rs.compChoice === 'earth') {
        return 13;
      } else {
        return 33;
      }
    }
    if (rs.userChoice === 'fire' || rs.userChoice === 'lightning') {
      if (rs.compChoice === 'water') {
        return 14;
      } else {
        return 34;
      }
    }
    if (rs.userChoice === 'earth' || rs.userChoice === 'fire') {
      if (rs.compChoice === 'lightning') {
        return 15;
      } else {
        return 35;
      }
    }
    if (rs.userChoice === 'lightning' || rs.userChoice === 'water') {
      if (rs.compChoice === 'wind') {
        return 16;
      } else {
        return 36;
      }
    }
    if (rs.userChoice === 'bomb') {
      return 777;
    }
  }

  function playGame() {
    console.log(chalk.blackBright.bold(`\nChubby casted: ${rs.userChoice}`));
    console.log(chalk.blackBright.bold(`\nRaizel casted: ${rs.compChoice}`));

    let gameMessages = [];
    gameMessages[1] = `*** You were both using ${rs.userChoice}. It is a draw; try again :O ***`;
    gameMessages[12] = `--- Ouch! Raizel burnt you with ${rs.compChoice} :( ---`;
    gameMessages[32] = `+++ Great job!!! Raizel is now in pain because you used ${rs.userChoice} on her!!! +++`;
    gameMessages[13] = `--- Ouch! Raizel absorbed your ${rs.userChoice} element with ${rs.compChoice} :( ---`;
    gameMessages[33] = `+++ Great job!!! You used ${rs.userChoice} to knock Raizel out!!! +++`;
    gameMessages[14] = `--- Ouch! Raizel putted out your ${rs.userChoice} with ${rs.compChoice} :( ---`;
    gameMessages[34] = `+++ Great job!!! Raizel was burned because you threw ${rs.userChoice} at her!!! +++`;
    gameMessages[15] = `--- Ouch! You took some damaged from Raizel's ${rs.compChoice} element :( ---`;
    gameMessages[35] = `+++ Great job!!! You knocked down Raizel with your ${rs.userChoice} power!!! +++`;
    gameMessages[16] = `--- Ouch! You took some damaged from Raizel's ${rs.compChoice} element :( ---`;
    gameMessages[36] = `+++ Great job!!! Raizel was striked by your ${rs.userChoice}!!! +++`;
    gameMessages[777] = `++++ Raizel was severely injured by your ${rs.userChoice}. ++++`;

    function gameMessageResult() {
      switch (determineWinner(rs)) {
        case 1:
          return gameMessages[1];
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
    function countGolds() {
      if (determineWinner() >= 30) {
        goldCoins.push = ['1'];
      } else if (determineWinner() >= 10 && determineWinner() <= 19) {
        goldCoins.pop();
      } else {
        console.log(`You currently have ${goldCoins.length} gold coins`);
      }
    }

    console.log(chalk.bold(gameMessages[determineWinner()]));
    console.log(`You have ${goldCoins.length} gold coins`);
  }

  return playGame();
}
