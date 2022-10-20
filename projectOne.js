import rl from "readline-sync";

import {
  gameStartStory,
  wokeUpHome,
  niceMushroom,
  eatMushYes,
  eatMushNo,
  crimsonYes,
  crimsonNo,
  goRightYes,
  goRightNo,
  winCoinFlip,
  shinyCoinCollect,
  tinyCreatureLeft,
} from "./story.js";
("use strict");

let items = [];

export function gameStart() {
  console.log("\n----------------\nThe commands are (y)es");

  let playGame = rl.keyIn(
    "Are you ready for to go on an adventure as Chubby? (y) ",
    { hideEchoBack: false, mask: "", limit: "y" }
  );

  // while (playGame != "y") {
  //   yesCommands();
  //   playGame = rl.keyIn("Are you ready for an adventure? ", {
  //     hideEchoBack: false,
  //     mask: "",
  //     limit: "y",
  //   });
  // }

  gameStartStory();
}

export function lookMom() {
  return wokeUpHome();
  rl.keyInPause("Hit any key continue...");
}

export function enterForest() {
  niceMushroom(); //return strings
  
console.log("\n----------------\nThe commands are (y)es or (n)o";)
  let eatMush = rl.keyIn("\nAre you eating that beautiful mushroom?! (y/n) ", {
    hideEchoBack: false,
    mask: "",
    limit: "yn",
  });
  console.log("\n");

  if (eatMush === "y") {
    eatMushYes();
  } else {
    eatMushNo();
  }
  return eatMush;
}

export function massiveTree() {
  
  console.log("\n----------------\nThe commands are (y)es or (n)o")
  let crimsonDoor = rl.keyIn("\nDo you want to knock? (y/n) ", {
    hideEchoBack: false,
    mask: "",
    limit: "yn",
  });

  if (crimsonDoor === "y") {
    crimsonYes();
    rl.keyInPause("Hit any key continue...");// this needs to go on the client side
  } else {
    crimsonNo();
    rl.keyInPause("Hit any key continue...");
  }
  return crimsonDoor;
}

export function caveEntry() {
  console.log("\n----------------\nThe commands are (r)ight or (l)eft");

  let goRight = rl.keyIn(
    "\nShould you go right and follow the music or go left? (r/l) ",
    {
      hideEchoBack: false,
      mask: "",
      limit: "rl",
    }
  );

  if (goRight === "r") {
    goRightYes;
  } else {
    goRightNo;
    
   
}

export function challengeOne() {
  console.log(
    `\nTiny creature: The game is simple. It's heads or tails. To win, you must guess right twice.`
  );
  console.log("\n----------------\nThe commands are (h)eads or (t)ails");

  let playerInput = rl.keyIn("\nDo you pick heads or tails? (h/t) ", {
    hideEchoBack: false,
    mask: "",
    limit: "ht",
  });

  let playerGuess = playerInput === "h" ? "heads" : "tails"; // This goes to server.js
  let compGuess = Math.random() * 1 > 0.5 ? "heads" : "tails"; // This goes to server.js
  

  while (compGuess !== playerGuess) {
    console.log(
      `\n***The coin result is ${compGuess} but you guessed ${playerGuess}, try again :(***`
    );
    console.log("\n----------------\nThe commands are (h)eads or (t)ails");

    playGuess = rl.keyIn("\nDo you pick heads or tails? (h/t) ", {
      hideEchoBack: false,
      mask: "",
      limit: "ht",
    });
    playerGuess = playerInput === "h" ? "heads" : "tails";
    console.log(playerGuess);
    compGuess = Math.random() * 1 > 0.5 ? "heads" : "tails";
    console.log(compGuess);
  }
  console.log(
    `***The coin result is ${compGuess} and you guessed ${playerGuess}, you win :)***`
  );

  winCoinFlip;
  shinyCoinCollect;
  items.push("shiny coin");
  tinyCreatureLeft;
  
}
// last left off
export function challengeTwo() {
  let fightflee;
  do {
    console.log(`\nA Grumpy creature appears.
    \nGrumpy creature: Stop, you! I have to catch you so that Raizel will reward me.`);
    console.log(
      "\n----------------\nThe commands are (f)ight or any key to f(l)ee"
    );

    fightflee = rl.keyIn("\nShould you fight or flee? (f/l) ", {
      hideEchoBack: false,
      mask: "",
      limit: "fl",
    });
    if (fightflee === "l") {
      console.log(
        "\nYou tried to go back to where you came from, but the place seemed familiar, and the Grumpy creature appeared to be no longer after you."
      );
      rl.keyInPause("Hit any key continue...");
    }
    // needs to be fixed
  } while (fightflee === "l");

  console.log(
    "\nSo you choose to fight. To win, you must win three games of Rock, Paper, Scissors. If you win, you will receive an item; if you lose, one of your items will be removed."
  );

  // if (RPS === false) {
  //   console.log(
  //     "\nFortunately, the Grumpy Creature was so delighted about stealing your coin that it forgot about catching you."
  //   );
  // } else {
  //   console.log("\nThe Grumpy Creature disappear and it has dropped an item.");
  //   console.log("***You collected a golden collar***");
  //   items.push("golden collar");
  // }
}
