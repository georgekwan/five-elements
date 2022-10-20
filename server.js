import express, { response } from "express";

// import { testingMessage } from "./story.js";
import { chubAdven } from "./chubAdven.js";

const app = express();
const port = 4003;

app.use(express.json());

// app.get("/", (req, res) => {
//   console.log("something");
//   testingMessage();
//   res.send(testingMessage());
// });

app.get("/chubby", (req, res) => {
  console.log("Game starts");
  console.log(req);
  res.send(chubAdven());
});

// app.post("/projectOne", (req, res) => {
//   console.log("Item added");
//   const item = request.body;
//   items.push(item);
//   res.send();
// });

app.listen(port, () => console.log(`My game server running on port ${port}!`));
