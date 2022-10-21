import express from "express";

// import { testingMessage } from "./story.js";
// import { gameStart } from "./projectOne.js";
import {
  eatMushYes,
  eatMushNo,
  gameStartStory,
  niceMushroom,
  wokeUpHome,
  crimsonYes,
  crimsonNo,
  goRightYes,
  goRightNo,
  winCoinFlip,
  shinyCoinCollect,
  tinyCreatureLeft,
} from "./story.js";

const app = express();
const port = 4003;

app.use(express.json()); // send array or object to the backend

// app.get("/", (req, res) => {
//   console.log("some ting wong");
//   testingMessage();
//   res.send(testingMessage());
// });
let items = [];

app.get("/gameStart", (req, res) => {
  const message = gameStartStory;
  res.send(message);
});

app.get("/wokeUpHome", (req, res) => {
  const message = wokeUpHome;
  res.send(message);
});

app.get("/enterForest", (req, res) => {
  const message = niceMushroom;
  res.send(message);
});

app.get("/eatMush", (req, res) => {
  const answer = req.query.answer;
  let message;
  if (answer === "y") {
    message = eatMushYes;
  } else {
    message = eatMushNo;
  }
  res.send(message);
});

app.get("/crimsonDoor", (req, res) => {
  const answer = req.query.answer;
  let message;
  if (answer === "y") {
    message = crimsonYes;
  } else {
    message = crimsonNo;
  }
  res.send(message);
});

app.get("/caveEntry", (req, res) => {
  const answer = req.query.answer;
  let message;
  if (answer === "r") {
    message = goRightYes;
  } else {
    message = goRightNo;
  }
  res.send(message);
});

app.get("/gameOneInstruc", (req, res) => {
  const message = gameOneInstru;
  res.send(message);
});

app.get("/gameOne", (req, res) => {
  const playerInput = req.query.answer;
  let message;
  // console.log("\n----------------\nThe commands are (h)eads or (t)ails");

  // let playerInput = rl.keyIn("\nDo you pick heads or tails? (h/t) ", {
  //   hideEchoBack: false,
  //   mask: "",
  //   limit: "ht",
  // });

  let playerGuess = playerInput === "h" ? "heads" : "tails";
  let compGuess = Math.random() * 1 > 0.5 ? "heads" : "tails";

  while (compGuess !== playerGuess) {
    message = `\n***The coin result is ${compGuess} but you guessed ${playerGuess}, try again :(***`;
    // console.log("\n----------------\nThe commands are (h)eads or (t)ails");

    // playGuess = rl.keyIn("\nDo you pick heads or tails? (h/t) ", {
    //   hideEchoBack: false,
    //   mask: "",
    //   limit: "ht",
    // });
    playerGuess = playerInput === "h" ? "heads" : "tails";

    compGuess = Math.random() * 1 > 0.5 ? "heads" : "tails";
  }
  message =
    `***The coin result is ${compGuess} and you guessed ${playerGuess}, you win :)***` +
    winCoinFlip +
    shinyCoinCollect +
    tinyCreatureLeft;
  items.push("shiny coin");

  res.send(message);
});

app.listen(port, () => console.log(`My game server running on port ${port}!`));
