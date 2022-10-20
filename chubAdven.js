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
