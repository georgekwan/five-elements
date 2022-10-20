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
} from "./story.js";

const app = express();
const port = 4003;

app.use(express.json()); // send array or object to the backend

// app.get("/", (req, res) => {
//   console.log("some ting wong");
//   testingMessage();
//   res.send(testingMessage());
// });

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

app.get("/goRight", (req, res) => {
  const answer = req.query.answer;
  let message;
  if (answer === "r") {
    message = goRightYes;
  } else {
    message = goRightNo;
  }
  res.send(message);
});

export let playerGuess = playerInput === "h" ? "heads" : "tails";
export let compGuess = Math.random() * 1 > 0.5 ? "heads" : "tails";

app.get("/playGuess", (req, res) => {
  const answer = req.query.answer;
  let message;

  // if (answer === "r") {
  //   message = goRightYes;
  // } else {
  //   message = goRightNo;
  // }
  res.send(message);
});

// app.post("/projectOne", (req, res) => {
//   console.log("Item added");
//   const item = request.body;
//   items.push(item);
//   res.send();
// });

app.listen(port, () => console.log(`My game server running on port ${port}!`));
