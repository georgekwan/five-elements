import rl from "readline-sync";
("use strict");
const yesNo = ["y", "n"];
console.log("test");
function gameStart(playGame) {
  console.log("\n----------------\nThe commands are:", yesNo);
  const playGame = rl.question(
    "are you ready for an adventure? (y/n)",
    playGame
  );
  console.log("\n");
  if (playGame === "y") {
    console.log(
      "You awoke at home, but your mother was not to be seen, and you are concerned for her since you are hungry."
    );
    console.log("\n");
    console.log(
      "So you decided to walk outdoors and look around for your mom."
    );
    console.log("\n");
    console.log(
      `Because your mom has gone missing, you've chosen to walk into the wilderness and look for her.`
    );
  } else if (playGame === "n") {
    // need to add something after answered no
    return;
  } else {
    console.log("Invalid input! Please enter (y)es or (n)o.");
  }
}

function enterForest(eatMush) {
  console.log(
    `You spotted a nice-looking mushroom not long after entering the wilderness, and you're starving.`
  );
  console.log("Are you going to eat it? (y/n)", eatMush);
  console.log("\n");
  if (eatMush === "y") {
    console.log(
      `You weren't feeling well, so you opted to relax behind a massive tree.`
    );
    console.log("\n");
    console.log(
      `You see something on the other side of the tree as you get closer to it.`
    );
    console.log("\n");
  } else {
    console.log("Taking a look around");
  }
}

function massiveTree(doorKnock) {
  console.log(`So you went to have a peek and discovered a crimson door.`);
  console.log("Do you want to knock? (y/n)", doorKnock);
  if (doorKnock === "y") {
    console.log("You knocked but no one answered.");
    console.log("\n");
    console.log(
      "There is a strong blast of wind and thunder. It appears that a storm is on the way."
    );
    console.log("\n");
    console.log("You are scare, so you are attempting to open the door.");
    console.log(
      "And because the door was not secured, you chose to enter, expecting that the storm would pass quickly."
    );
  } else {
    console.log("You choose to ignore it by taking a nap.");
    console.log("\n");
    console.log("You went home after taking a dump at your favourite spot.");
    console.log("\n");
    console.log(
      "You take another nap, hoping your mother will return to feed you."
    );
  }
}

console.log(gameStart("n"));
console.log(enterForest("y"));
console.log(massiveTree("y"));
