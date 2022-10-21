import express from "express";

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

import { coinFlip, message } from "./games.js";

const app = express();
const port = 4003;

app.use(express.json()); // send array or object to the backend

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
  const playerInput = req.query.playerInput;
  coinFlip(playerInput);
  res.send(message);
});

app.listen(port, () => console.log(`My game server running on port ${port}!`));
