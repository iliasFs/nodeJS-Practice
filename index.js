const fs = require("fs");

fs.readFile("files/starter.txt", "utf8", (err, data) => {
  if (err) throw err;

  //it will read Buffer. so we need to convert it to string
  console.log(data);
  //so the right way is
  //console.log(data.toString());

  //OR we can add another argument in the .readFile the utf8 and we dont need data.toString().
});
