if (process.cwd().endsWith("build")) {process.chdir("..")}

path = require("path");
fs = require("fs");
uglifyjs = require("uglify-es");

let pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
let libSrc = fs.readFileSync(pkg.main.replace(/\.js$/, "."+pkg.version+".min.js"), "utf8");

let tests = [];
fs.readdirSync("tests").forEach(function (f) {
	if (fs.statSync("tests/"+f).isFile()) {
		tests.push("Tests[\""+f.substr(0, f.lastIndexOf(".")) + "\"] = function () {\r\n\t" + fs.readFileSync("tests/"+f, "utf8").replace(/.*?\s*\=*\s*require\(.*?\);/g, "").replace(/\r*\n\r*\n/g, "\r\n").replace(/^\r*\n/, "").replace(/\n$/, "").replace(/\n/g, "\n\t") + "\r\n}");
	}
});

var output = libSrc + "\r\n\r\n" + "var Tests = {};" + "\r\n\r\n" + tests.join("\r\n") + "\r\n" + "Object.keys(Tests).forEach(function (f) {\r\n\tTests[f]();\r\n});\r\nLOG(\"Results: Pass(\"+Test.Passes+\")/Fail(\"+Test.Fails+\")\");";
fs.writeFileSync(pkg.main.replace(/\.js$/, "."+pkg.version+".js").replace(/\.js$/, ".test.js"), output, "utf8");
