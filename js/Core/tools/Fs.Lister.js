fs = require("fs"),
path = require("path");

let dir = process.cwd(), outputFile = undefined, excludes = [];

if (process.argv.length > 1) {
	//if (path.isAbsolute(process.argv[2])) {
		dir = process.argv[2]
	//} else {
	//	dir = process.cwd() + "/" + process.argv[2]
	//}
}
if (process.argv.length > 2) {
	//if (path.isAbsolute(process.argv[3])) {
		outputFile = process.argv[3]
	//} else {
	//	outputFile = process.cwd() + "/" + process.argv[3]
	//}
}
for (let i=4; i<process.argv.length; i++) {
	excludes.push(process.argv[i])
}

let files = GetFiles(dir);
if (typeof outputFile !== "undefined") {
	let re = new RegExp(dir.replace("\\", "\\\\"), 'g');
	fs.writeFileSync(outputFile, files.join("\r\n").replace(re, ""), "utf8")
}

function GetFiles (dir) {
	if (!dir.endsWith("/")) {dir+="/"}
	let files = [];
	fs.readdirSync(dir).forEach(function (f) {
		if (fs.statSync(dir+f).isDirectory()) {
			files = files.concat(GetFiles(dir+f))
		}
		if (fs.statSync(dir+f).isFile()) {
			if (!excludes.includes(f)) {
				files.push(dir+f)
			}
		}
	});
	return files
}
