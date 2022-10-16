import rl from "readline-sync";
("use strict");

function gameStart(playGame) {
  console.log("\n----------------\nThe commands are (y)es or (n)o");
  playGame = rl.question(
    "\nAre you ready for to go on an adventure as Chubby? (y/n) "
  );
  while (playGame != "y") {
    if (playGame === "n") {
      console.log("\n----------------\nPlease enter (y)es when you are ready.");
      playGame = rl.question("Are you ready for an adventure? (y/n) ");
    } else {
      console.log("\nCome on!!! Is it that hard to enter (y)es or (n)o?");
      playGame = rl.question("Now... are you ready for an adventure?! (y/n) ");
    }
  }
  console.log(
    "\nYou are a bichon shih tzu. You enjoy sleeping and eating on a daily basis. Your mother always says you're fearless and enjoy adventure, but the only places you've been are around the neighbourhood and the off-leash park. But one day everything changes..."
  );
}

function lookMom() {
  console.log(
    "\nYou awoke at home, but your mother was not to be seen, and you are concerned for her since you are hungry.\n\nSo you decided to walk outdoors and look around for your mom.\n\nBecause your mom has gone missing, you've chosen to walk into the wilderness and look for her."
  );
}
let crimsonDoor = "y";
function enterForest(eatMush) {
  console.log(
    "\nYou spotted a nice-looking mushroom not long after entering the wilderness, and you're starving."
  );
  console.log("\n----------------\nThe commands are (y)es or (n)o");
  eatMush = rl.question("\nAre you going to eat it? (y/n) ");
  console.log("\n");
  while (eatMush != "y" && eatMush != "n") {
    if (eatMush != "y" && eatMush != "n") {
      console.log("\nHey little buddy, make up your mind!!! (y)es or (n)o?");
      eatMush = rl.question("Are you eating that beautiful mushroom?! (y/n) ");
    }
  }
  if (eatMush === "y") {
    console.log(
      "\nYou weren't feeling well, so you opted to relax behind a massive tree.\n\nYou see something on the other side of the tree as you get closer to it."
    );
    console.log("\nSo you went to have a peek and discovered a crimson door.");
  } else {
    console.log("\nTaking a look around");
    crimsonDoor = "n";
    // need to be fixed
  }
}

function massiveTree(crimsonDoor) {
  console.log("\n----------------\nThe commands are (y)es or (n)o");
  crimsonDoor = rl.question("Do you want to knock? (y/n) ");
  while (crimsonDoor != "y" && crimsonDoor != "n") {
    if (crimsonDoor) {
      console.log("\nCome on!!! Is it that hard to enter (y)es or (n)o?");
      crimsonDoor = rl.question(
        "\nAre you going to knock on the door?! (y/n) "
      );
    }
  }

  if (crimsonDoor === "y") {
    console.log(
      "\nYou knocked but no one answered.\n\nThere is a strong blast of wind and thunder. It appears that a storm is on the way.\n\nYou are scare, so you are attempting to open the door\n\nAnd because the door was not secured, you chose to enter, expecting that the storm would pass quickly."
    );
    console.log(
      "\nWhen you went inside, you shut the door and heard joyous music, as if there was a party farther down the tunnel.\n\nAnd you decided to follow the music to discover where it came from.\n\nYou noticed after 5 minutes of walking that you had completely forgotten you were sick from the mushroom, but there is a dividing point at the tunnel."
    );
  } else {
    console.log(
      "\nYou choose to ignore it by taking a nap.\n\nYou went home after taking a dump at your favourite spot.\n\nYou take another nap, hoping your mother will return to feed you."
    );

    // this needs to return to the beginning after player not knocking on the door
  }
}

function caveEntry(goRight) {
  console.log("\n----------------\nThe commands are (r)ight or (l)eft");
  goRight = rl.question(
    "\nShould you go right and follow the music or go left? (r/l) "
  );
  while (goRight != "r" && goRight != "l") {
    if (goRight === "r") {
      break;
    } else if (goRight === "l") {
      console.log(
        "\nThis path is tedious since there is no music and it is dark. You came to a dead end.\n\nHold on... you see something on the wall. Someone engraved “A89C90” upside down. What does that mean?\n\nIt's most likely nothing, so you turn around and decide to pursue the correct path."
      );
      break;
    } else {
      console.log(
        "\nCome on!!! Do you know where you are going? Pick (r)ight or (l)eft"
      );
      goRight = rl.question("Make up your mind! (r/l) ");
    }
  }
  console.log("\nYou chose to take the path where the music is playing.");
}
// console.log(gameStart("y"));
// console.log(enterForest("y"));
// console.log(massiveTree("y"));

// This needs to be fix
function chubAdven(playGame, eatMush, crimsonDoor, goRight) {
  while (true) {
    console.log("Welcome");
    gameStart(playGame);
    lookMom();
    enterForest(eatMush);
    massiveTree(crimsonDoor);
    caveEntry(goRight);
    console.log("The end");
    break;
  }
  return;
}

chubAdven();
