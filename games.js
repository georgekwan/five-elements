'use strict';

import chalk from 'chalk';

export function fiveElements(gamerInput) {
  function getUserChoice() {
    // prettier-ignore
    const elementChoice = {
      'e': 'earth',
      'w': 'water',
      'f': 'fire',
      'd': 'wind',
      'l': 'lightning',
      'o': 'forfeit',
      'b': 'bomb',
    };
    return elementChoice[gamerInput];
  }

  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5);
    const compRandomChoice = {
      0: 'earth',
      1: 'water',
      2: 'fire',
      3: 'wind',
      4: 'lightning',
    };
    return compRandomChoice[randomNumber];
  }

  console.log(getUserChoice());
  console.log(getComputerChoice());
  return {
    userChoice: getUserChoice(),
    compChoice: getComputerChoice(),
  };
}
