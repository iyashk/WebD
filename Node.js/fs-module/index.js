const fs = require("fs");
const path = require("path");
// fs.readFile("./files/starter.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });
// console.log("hello ra babu");

// fs.readFile("./files/lorem.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//   }
// );

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "content written to the file",
//   (err) => {
//     if (err) throw err;
//     console.log("inside file");
//   }
// );
// fs.appendFile(
//   path.join(__dirname, "files", "lorem.txt"),
//   "content appended to the file",
//   (err) => {
//     if (err) throw err;
//     console.log("inside file");
//   }
// );

// fs.rename(
//   path.join(__dirname, "files", "reply.txt"),
//   path.join(__dirname, "files", "rename.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("rename complete");
//   }
// );

const fsPromises = require("fs").promises;
const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
  } catch (err) {
    console.log(err);
  }
};

fileOps();
