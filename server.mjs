'use strict';
import express from 'express';

import { fiveElements } from './games.js';

const app = express();
const port = 4080;

app.use(express.json()); // send array or object to the backend

app.get('/gameThree', (req, res) => {
  const gamerInput = req.query.playerInput;
  console.log(gamerInput);

  if (gamerInput) {
    const results = fiveElements(gamerInput);
    console.log('🪵 ----------------------------------------------------🪵');
    console.log('🪵 ~ file: server.js:18 ~ app.get ~ results:', results);
    console.log('🪵 ----------------------------------------------------🪵');
    res.send(results);
  } else {
    res.status(400).send('Missing playerInput parameter');
  }
});

app.listen(port, () => console.log(`My game server running on port ${port}!`));
