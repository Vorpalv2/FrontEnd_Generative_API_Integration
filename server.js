import "dotenv/config";
import { GoogleGenerative } from "./GoogleAI.js";
import express, { urlencoded } from "express";
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get(`/`, (req, res) => {
  res.render("./public/index.ejs");
});

app.post(`/submit`, async (req, res) => {
  let question = req.body.textbox;
  let answer = await GoogleGenerative(question);
  console.log(res.statusCode);
  res.json({
    question: answer,
  });

  console.log(res.statusCode);
});

app.listen(process.env.PORT, (req, res) => {
  console.log("server is up and running on port ", process.env.PORT);
});
