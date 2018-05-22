
Path = require("path");
Fs = require("fs");

var tests = [];
var source = Fs.readFileSync("tests/Path.js", "utf8");

var f = Function(source);
console.log(f.name);
f.name = "ThaTest";
Fs.writeFileSync("ThaTests.js", "Tests[\"ThaTest\"] = " + f.toString(), "utf8");

//console.log(f.toString());

