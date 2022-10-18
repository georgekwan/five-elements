import express, { response } from "express";
const app = express();
const port = 4003;
app.get("/", (req, res) => {
  response.send("Hello there!!!");
});
app.listen(port, () => console.log(`My game server running on port ${port}!`));
