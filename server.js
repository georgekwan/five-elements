'use strict';
import express from 'express';

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
} from './story.js';

import {
  coinFlip,
  diceRoll,
  coinFlipMessage,
  diceRollMessage,
  magicMessage,
  fiveElements,
  compGuess,
  playerGuess,
} from './games.js';

const app = express();
const port = 4003;

const playerName = 'some one koo';

app.use(express.json()); // send array or object to the backend

app.post('/playerName', (req, res) => {
  res.send(playerName);
});

app.get('/playerName', (req, res) => {
  const playerName = req.body;
  playerName;
  res.send();
});

// app.get('/gameStart', (req, res) => {
//   const message = gameStartStory;
//   res.send(message);
// });

// app.get('/wokeUpHome', (req, res) => {
//   const message = wokeUpHome;
//   res.send(message);
// });

// app.get('/enterForest', (req, res) => {
//   const message = niceMushroom;
//   res.send(message);
// });

// app.get('/eatMush', (req, res) => {
//   const answer = req.query.answer;
//   let message;
//   if (answer === 'y') {
//     message = eatMushYes;
//   } else {
//     message = eatMushNo;
//   }
//   res.send(message);
// });

// app.get('/crimsonDoor', (req, res) => {
//   const answer = req.query.answer;
//   let message;
//   if (answer === 'y') {
//     message = crimsonYes;
//   } else {
//     message = crimsonNo;
//   }
//   res.send(message);
// });

// app.get('/caveEntry', (req, res) => {
//   const answer = req.query.answer;
//   let message;
//   if (answer === 'r') {
//     message = goRightYes;
//   } else {
//     message = goRightNo;
//   }
//   res.send(message);
// });

// app.get('/gameOneInstruc', (req, res) => {
//   const message = gameOneInstru;
//   res.send(message);
// });

app.get('/gameOne', (req, res) => {
  const playerInput = req.query.playerInput;
  console.log(playerInput);
  let coinToss = coinFlip(playerInput);
  res.send(coinToss);
});

app.get('/gameOneMessage', (req, res) => {
  const message = coinFlipMessage(playerGuess, compGuess);
  res.send(message);
});

app.get('/gameTwo', (req, res) => {
  const playerInput = req.query.playerInput;
  console.log(playerInput);
  const results = diceRoll();
  console.log(results);
  res.send(results);
});

app.get('/gameThree', (req, res) => {
  const gamerInput = req.query.playerInput;
  console.log(gamerInput);
  const results = fiveElements(gamerInput);
  console.log(results);
  res.send(results);
  // add setDelay
});

app.listen(port, () => console.log(`My game server running on port ${port}!`));
