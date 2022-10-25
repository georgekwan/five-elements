'use strict';
import express from 'express';

import {
  coinFlip,
  diceRoll,
  coinFlipMessage,
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

app.get('/gameThree', (req, res) => {
  const gamerInput = req.query.playerInput;
  console.log(gamerInput);
  const results = fiveElements(gamerInput);
  console.log(results);
  res.send(results);
  // add setDelay
});

app.listen(port, () => console.log(`My game server running on port ${port}!`));
