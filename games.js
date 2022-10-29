'use strict';

import chalk from 'chalk';

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
      case 'o':
        return 'forfeit';
        break;
      case 'b':
        return 'bomb';
        break;
    }
  }
  // use random array if possible
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
fiveElements('f');
