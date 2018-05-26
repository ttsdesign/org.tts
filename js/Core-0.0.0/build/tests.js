
var sources = [
	 "dist/org.tts.js.core-$VERSION$.min.js"
];
var outputFile = "dist/Tests-$VERSION$.js";
var testHelpersFile = "build/test_helpers.js";

//////////////////////////////////////////////////////////////////////////////////
///// Nothing to Edit Below ////////////////////////////////////////////////////
Path = require("path");
Fs = require("fs");
Uglify = require("uglify-js");

var version = Fs.readFileSync(".version", "utf8").trim();

var helpersCode = "Object.keys(Tests).forEach(function (f) {\r\n\tTests[f]();\r\n});"

var sourcesCode = [];
sources.forEach(function (f) {
	sourcesCode.push(Fs.readFileSync(f.replace(/\$VERSION\$/, version), "utf8"))
});

var tests = [];
Fs.readdirSync("tests").forEach(function (f) {
	if (Fs.statSync("tests/"+f).isFile()) {
		tests.push("Tests[\""+f.split(".")[0] + "\"] = function () {\r\n\t" + Fs.readFileSync("tests/"+f, "utf8").replace(/\r*\n\r*\n/g, "\r\n").replace(/\n$/, "").replace(/\n/g, "\n\t") + "\r\n}");
	}
});

outputFile = outputFile.replace(/\$VERSION\$/, version);
var output = sourcesCode.join("\r\n\r\n") + "\r\n\r\n" + "var Tests = {};" + "\r\n\r\n" + tests.join("\r\n") + "\r\n" + helpersCode;
Fs.writeFileSync(outputFile, output, "utf8");
