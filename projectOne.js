import rl from "readline-sync";
("use strict");

const yesNo = ["y", "n"];
function gameStart(playGame) {
  console.log("\n----------------\nThe commands are (y)es or (n)o:", yesNo);
  playGame = rl.question("are you ready for an adventure? (y/n) ");
  while (playGame != "y") {
    if (playGame === "y") {
      break;
    } else if (playGame === "n") {
      console.log(
        "\n----------------\nPlease enter (y)es when you are ready.:",
        yesNo
      );
      playGame = rl.question("are you ready for an adventure? (y/n) ");
    } else {
      console.log("Come on!!! Is it that hard to enter (y)es or (n)o?", yesNo);
      playGame = rl.question("Now... are you ready for an adventure?! (y/n) ");
    }
  }
  console.log(
    "\nYou are a bichon shih tzu. You enjoy sleeping and eating on a daily basis. Your mother always says you're fearless and enjoy adventure, but the only places you've been are around the neighbourhood and the off-leash park. But one day everything changes..."
  );
}

function lookMom() {
  console.log(
    "\nYou awoke at home, but your mother was not to be seen, and you are concerned for her since you are hungry."
  );
  console.log(
    "\nSo you decided to walk outdoors and look around for your mom."
  );
  console.log(
    "\nBecause your mom has gone missing, you've chosen to walk into the wilderness and look for her."
  );
}

function enterForest(eatMush) {
  console.log(
    "\nYou spotted a nice-looking mushroom not long after entering the wilderness, and you're starving."
  );
  console.log("\n----------------\nThe commands are (y)es or (n)o:", yesNo);
  eatMush = rl.question("Are you going to eat it? (y/n) ");
  console.log("\n");
  while (eatMush != "y") {
    if (eatMush === "y") {
      console.log(
        "\nYou weren't feeling well, so you opted to relax behind a massive tree."
      );
      console.log(
        "\nYou see something on the other side of the tree as you get closer to it."
      );
      break;
    } else {
      console.log("\nTaking a look around");
      // this part needs to connect to "You choose to ignore it by taking a nap."
      massiveTree;
    }
  }
}

function massiveTree(crimsonDoor) {
  console.log("\nSo you went to have a peek and discovered a crimson door.");
  console.log("\n----------------\nThe commands are (y)es or (n)o:", yesNo);
  crimsonDoor = rl.question("Do you want to knock? (y/n) ");
  if (crimsonDoor === "y") {
    console.log("\nYou knocked but no one answered.");
    console.log(
      "\nThere is a strong blast of wind and thunder. It appears that a storm is on the way."
    );
    console.log("\nYou are scare, so you are attempting to open the door.");
    // undefined issue
    console.log(
      "\nAnd because the door was not secured, you chose to enter, expecting that the storm would pass quickly."
    );
  } else {
    console.log("\nYou choose to ignore it by taking a nap.");

    console.log("\nYou went home after taking a dump at your favourite spot.");

    console.log(
      "\nYou take another nap, hoping your mother will return to feed you."
    );
  }
}

// console.log(gameStart("y"));
// console.log(enterForest("y"));
// console.log(massiveTree("y"));

// This needs to be fix
function chubAdven(playGame, eatMush, crimsonDoor) {
  while (true) {
    console.log("Welcome");
    gameStart(playGame);
    lookMom();
    enterForest(eatMush);
    massiveTree(crimsonDoor);
    console.log("The end");
    break;
  }
  return;
}

chubAdven();
