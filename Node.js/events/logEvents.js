const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync("./logs")) {
      fs.mkdir("./logs", (err) => {
        if (err) {
          console.log("file already exists");
        }
        console.log("directory created");
      });
      await fsPromises.appendFile(
        path.join(__dirname, "logs", "eventLog.txt"),
        logItem
      );
    } else {
      await fsPromises.appendFile(
        path.join(__dirname, "logs", "eventLog.txt"),
        logItem
      );
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
