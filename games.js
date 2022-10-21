import { winCoinFlip, shinyCoinCollect, tinyCreatureLeft } from "./story.js";
export let message;
export let items = [];
export function coinFlip(playerInput) {
  let playerGuess = playerInput === "h" ? "heads" : "tails";
  let compGuess = Math.random() > 0.5 ? "heads" : "tails";
  console.log(playerGuess);
  console.log(compGuess);
  if (playerGuess !== compGuess) {
    message = `\n***The coin result is ${compGuess} but you guessed ${playerGuess}, try again :(***`;
  } else {
    message =
      `***The coin result is ${compGuess} and you guessed ${playerGuess}, you win :)***` +
      winCoinFlip +
      shinyCoinCollect +
      tinyCreatureLeft;
    items.push("shiny coin");
  }
}
