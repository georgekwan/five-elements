import {
  gameStart,
  lookMom,
  enterForest,
  massiveTree,
  caveEntry,
  challengeOne,
  challengeTwo,
} from "./projectOne.js";

export function chubAdven() {
  console.log("Welcome");
  gameStart();

  let eatMush;
  let crimsonDoor;
  do {
    do {
      lookMom();
      eatMush = enterForest();
      // This needs to be fixed, problem was created after call function seperated from its own file
    } while (eatMush !== "y");
    crimsonDoor = massiveTree();
  } while (crimsonDoor !== "y");
  caveEntry();
  challengeOne();
  challengeTwo();
  console.log("The end");
}

// chubAdven();
