// more efficient way to grab and process big data chuncks

const fs = require("fs");

const rs = fs.createReadStream("./files/lorem.txt", "utf8");

const ws = fs.createWriteStream("./files/new-lorem.txt");

// we need to listen the data coming up from the stream
// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });




//Another great way is below

rs.pipe(ws);
