import rl from "readline-sync";
// const rl = require("readline-sync");
("use strict");
let items = [];

function gameStart() {
  console.log("\n----------------\nThe commands are (y)es or (n)o");

  let playGame = rl.keyIn(
    "Are you ready for to go on an adventure as Chubby? (y/n) ",
    { hideEchoBack: false, mask: "", limit: "yn" }
  );

  while (playGame != "y") {
    console.log("\n----------------\nPlease enter (y)es when you are ready.");
    playGame = rl.keyIn("Are you ready for an adventure? (y/n) ", {
      hideEchoBack: false,
      mask: "",
      limit: "yn",
    });
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

function enterForest() {
  console.log(
    "\nYou spotted a nice-looking mushroom not long after entering the wilderness, and you're starving."
  );
  console.log("\n----------------\nThe commands are (y)es or (n)o");

  let eatMush = rl.keyIn("\nAre you eating that beautiful mushroom?! (y/n) ", {
    hideEchoBack: false,
    mask: "",
    limit: "yn",
  });
  console.log("\n");

  // while (eatMush != "y" && eatMush != "n") {
  //   if (eatMush != "y" && eatMush != "n") {
  //     console.log("\nHey little buddy, make up your mind!!! (y)es or (n)o?");
  //     eatMush = rl.question("Are you eating that beautiful mushroom?! (y/n) ");
  //   }
  // }

  if (eatMush === "y") {
    console.log(
      "\nYou weren't feeling well, so you opted to relax behind a massive tree.\n\nYou see something on the other side of the tree as you get closer to it."
    );
    console.log("\nSo you went to have a peek and discovered a crimson door.");
  } else {
    console.log(
      "\nTaking a look around.\n\nYou've decided to stay at home because the outside is too frightening for you; you'll try again tomorrow."
    );
  }

  return eatMush;
}

function massiveTree() {
  console.log("\n----------------\nThe commands are (y)es or (n)o");

  let crimsonDoor = rl.keyIn("\nDo you want to knock? (y/n) ", {
    hideEchoBack: false,
    mask: "",
    limit: "yn",
  });

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
  }
  return crimsonDoor;
}

function caveEntry() {
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
    console.log("\nYou chose to take the path where the music is playing.");
  } else {
    console.log(
      "\nThis path is tedious since there is no music and it is dark. You came to a dead end.\n\nHold on... you see something on the wall. Someone engraved “A89C90” upside down. What does that mean?\n\nIt's most likely nothing, so you turn around and decide to pursue the correct path."
    );
    console.log(
      "\nHold on...\nyou see something on the wall.\nSomeone engraved “A89C90” upside down. What does that mean?"
    );
    console.log(
      `\nIt's most likely nothing, so you turn around and decide to pursue the correct path.`
    );
  }
  console.log(
    `\nYou proceeded down the tunnel. It's been a while, and you're curious, so you decided to look back. The path appears to be the same as continuing on.\nSo you proceed down the tube until a little creature that resembles a person arrives.
    \nTiny creature: You know you don't belong here...
    \nChubby: Where am I? I am lost
    \nTiny creature: I might tell you but first you have to play a game with me, if you win, I will tell you.\nYou agreed to play the game out of desperation.`
  );
}

function challengeOne() {
  console.log(
    `\nTiny creature: The game is simple. It's heads or tails. To win, you must guess right twice.`
  );
  console.log("\n----------------\nThe commands are (h)eads or (t)ails");

  let playGuess = rl.keyIn("\nDo you pick heads or tails? (h/t) ", {
    hideEchoBack: false,
    mask: "",
    limit: "ht",
  });

  let coinGuess = playGuess === "h" ? "heads" : "tails";
  let coinResult = Math.random() * 1 > 0.5 ? "heads" : "tails";

  while (coinResult !== coinGuess) {
    console.log(
      `\n***The coin result is ${coinResult} but you guessed ${coinGuess}, try again :(***`
    );
    console.log("\n----------------\nThe commands are (h)eads or (t)ails");

    playGuess = rl.keyIn("\nDo you pick heads or tails? (h/t) ", {
      hideEchoBack: false,
      mask: "",
      limit: "ht",
    });
    coinGuess = playGuess === "h" ? "heads" : "tails";
    console.log(coinGuess);
    coinResult = Math.random() * 1 > 0.5 ? "heads" : "tails";
    console.log(coinResult);
  }
  console.log(
    `***The coin result is ${coinResult} and you guessed ${coinGuess}, you win :)***`
  );

  console.log(`\nTiny creature: That was great; I don't usually get visitors, but since you won, I'll honour my promise. Raizel, Daughter of the Soul Eater, owns this world and enjoys collecting young pups. Many puppies end up down here and never make it back to their owners.
  \n(foot step noise)
  \nTiny creature(whisper): I shouldn't say too much about her; Here, keep this coin you will need it to get out. Best of luck little guy!`);
  console.log(`\n***You have collected a shiny coin***`);
  items.push("shiny coin");

  console.log(
    "\nThe tiny creature vanished with a poof! And you keep going down into the gloomy tunnel."
  );
}

function challengeTwo() {
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

function chubAdven() {
  console.log("Welcome");
  gameStart();
  let crimsonDoor;
  do {
    let eatMush;
    do {
      lookMom();
      eatMush = enterForest();
    } while (eatMush !== "y");
    crimsonDoor = massiveTree();
  } while (crimsonDoor !== "y");
  caveEntry();
  challengeOne();
  challengeTwo();
  console.log("The end");
}
chubAdven();
