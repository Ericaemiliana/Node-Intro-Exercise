const fs = require("fs");
const process = require("process");
//read the file at path and print it out
function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      //handle possible error
      console.log("ERROR:", err);
      //kill the process and tel lthe shell it errored
      process.exit(1);
    }
    //otherwise sucess
    console.log(`file contents: ${data}`);
  });
  console.log("reading file");
}
//file won't have been read yet at this point
cat(process.argv[2]);
console.log(process.argv);
