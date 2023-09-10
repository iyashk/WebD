const express = require("express");
const app = express();
const path = require("path");
const logEvents = require("./middleware/logEvents");
const PORT = process.env.PORT || 3500;
const { logger } = require("./middleware/logEvents");
app.use(logger);

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));
app.get("^/$|/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});
app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "./new-page.html");
});
app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`serverl istening on ${PORT}`));
