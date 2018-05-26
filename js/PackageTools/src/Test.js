fs = require("fs");
Importer = require("./Importer.js");

let importer = new Importer({requires: "remove"});

//let contents = importer.Import({file: "Sample.js", requires: "import"});
let contents = importer.Require({module: "./Sample2.js", requires: "import"});

fs.writeFileSync("Output.js", contents, "utf8");




