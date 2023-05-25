// var logger = require("./logger.js");
// logger.log("Hello world");

// const path = require("path");
// console.log(path.parse(__filename));

// const os = require("os");
// console.log(os.freemem());
// console.log(os.totalmem());

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/alien/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.send(`hello world ${id}`);
});

app.listen(9000, (req, res) => [console.log("running")]);
