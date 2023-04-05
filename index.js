const fsPromises = require("fs").promises;
const path = require("path");

// fs.readFile("files/starter.txt", "utf8", (err, data) => {
//   if (err) throw err;

//   //it will read Buffer. so we need to convert it to string
//   console.log(data);
//   //so the right way is
//   //console.log(data.toString());

//   //OR we can add another argument in the .readFile the utf8(witch defines the encoding) and we dont need data.toString().
// });

//exit on uncaught errors
process.on("uncaughtExeption", (err) => {
  console.error(`There was an ancaught error: ${err}`);

  process.exit(1);
});

//instead of hardoding the path "files/starter.txt" there is a better way.

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;

//     console.log(data);
//   }
// );

//WRITE FILE and fighting with asynchronicity

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Complete!");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\n Yes it is ",
//       (err) => {
//         if (err) throw err;
//         console.log("Append Complete!");
//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           "newReply",
//           (err) => {
//             if (err) throw err;
//             console.log("Rename Complete!");
//           }
//         );
//       }
//     );
//   }
// );

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);

    await fsPromises.unlink(path.join(__dirname, "files", "promiseWrite.txt"));

    await fsPromises.writeFile(
      path.join(__dirname, "files", "PromiseWrite.txt"),
      data
    );

    await fsPromises.appendFile(
      path.join(__dirname, "files", "PromiseWrite.txt"),
      "Balls"
    );

    await fsPromises.rename(
      path.join(__dirname, "files", "PromiseWrite.txt"),
      "promiseComplete.txt"
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};

fileOps();
