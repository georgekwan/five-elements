'use strict';
import fetch from 'node-fetch';
import rl from 'readline-sync';
import cfonts from 'cfonts';
import chalk from 'chalk';
// import { coinFlip, diceRoll, fiveElements } from './games.js';

let gameOneResult;
let gameTwoResult;
let gameThreeResult;
let items = [];
do {
  cfonts.say('Heads or Tails', {
    font: 'block',
    align: 'center',
    colors: ['system'],
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
  });
  console.log(
    chalk.bold('\n----------------\nThe commands are (h)eads or (t)ails')
  );
  let playerInput = rl.keyIn('\nDo you pick heads or tails? (h/t) ', {
    hideEchoBack: false,
    mask: '',
    limit: 'ht',
  });

  fetch('http://localhost:4003/gameOne?playerInput=' + playerInput)
    .then(response => response.json())
    .then(json => console.log(json));
  gameOneResult = coinFlip(playerInput.toLowerCase);
  if (gameOneResult === 1) {
    items.push('gold coin');
  }
} while (gameOneResult === 0);

do {
  cfonts.say('Dice Roll Battle', {
    font: 'block',
    align: 'center',
    colors: ['system'],
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
  });
  let playerInput = rl.keyIn('\nAre you ready to roll? (r) ', {
    hideEchoBack: false,
    mask: '',
    limit: 'r',
  });

  fetch('http://localhost:4003/gameTwo?playerInput=' + playerInput)
    .then(response => response.json())
    .then(json => console.log(json));
  gameTwoResult = diceRoll(playerInput.toLowerCase);
  if (gameTwoResult === 2) {
    items.push('golden collar');
  }
} while (gameTwoResult !== 2);

do {
  cfonts.say('Five Elements', {
    font: 'block',
    align: 'center',
    colors: ['system'],
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
  });
  console.log(
    chalk.bold(
      '\n----------------\nThe commands are (e)arth, (f)ire, (w)ater,(l)ightning, win(d)'
    )
  );
  let playerInput = rl.keyIn(
    '\nWhich magic would you like to use? (e/f/w/l/d) ',
    {
      hideEchoBack: false,
      mask: '',
      limit: 'efwldb',
    }
  );

  fetch('http://localhost:4003/gameThree?playerInput=' + playerInput)
    .then(response => response.json())
    .then(json => console.log(json));
  gameThreeResult = fiveElements(playerInput);
  // console.log(playerInput);
  // console.log(gameThreeResult);
  if (gameThreeResult === 2) {
    items.push('golden bone');
  }
} while (gameThreeResult !== 2);

console.log(chalk.yellow.bold(`You have collected ` + items));
