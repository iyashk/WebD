const logEvents = require("./logEvents");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("log", (msg) => {
  logEvents(msg);
});

setInterval(() => {
  myEmitter.emit("log", "Log Event Emitted!");
}, 2000);
