const fs = require("fs");
const process = require("process");
const axios = require("axios");

/*read the file at path and print it out*/

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      //handle possible error
      console.log("ERROR:", err);
      //kill the process and tel lthe shell it errored
      process.exit(1);
    } else {
      writeCat(data, out);
    }
    //otherwise sucess
    console.log(`file contents: ${data}`);
  });
  console.log("reading file");
}
//file won't have been read yet at this point

/* read page at URL and print it out. */

async function webCat(url) {
  try {
    let resp = await axios.get(url);
    writeCat(resp.dta, out);
    console.log(resp.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

/** handle output: write to file if out given, else print**/

function writeCat(text, out) {
  if (out) {
    fs.writeFile(out, text, "utf8", function (err) {
      if (err) {
        console.error(`Couldn't write ${out}: ${err}`);
      }
    });
  } else {
    console.log(text);
  }
}

let path;
let out;
//console.log("printing process.argv", process.argv);
if (process.argv[2] === "--out") {
  out = process.argv[3];
  path = process.argv[4];
} else {
  path = proces.argv[2];
}

if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  cat(path);
}
