const fs = require("fs");
fs.readFile('one.txt', 'utf8', function(err, data){
    if(err){
        console.log("ERROR:", err);
    }
}
){}