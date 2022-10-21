import fetch from "node-fetch";

import rl from "readline-sync";

import { coinFlip } from "./games.js";

let result;
do {
  let playerInput = rl.keyIn("\nDo you pick heads or tails? (h/t) ", {
    hideEchoBack: false,
    mask: "",
    limit: "ht",
  });

  fetch("http://localhost:4003/gameOne?playerInput=" + playerInput)
    .then((response) => response.json())
    .then((json) => console.log(json));
  result = coinFlip(playerInput);
} while (result === 0);
