if (process.cwd().endsWith("build")) {process.chdir("..")}

fs = require("fs");
let pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
require("../"+pkg.main);
let examplesDir = pkg.directories.examples + "/";

if (!fs.existsSync("dist/Examples")) {fs.mkdirSync("dist/Examples")}
fs.copyFileSync("tools/REPL.js", "dist/Examples/REPL.js");

let template = fs.readFileSync("tools/REPL.template.html", "utf8");
fs.readdirSync(examplesDir).forEach(function (f) {
	if (fs.statSync(examplesDir+f).isFile()) {
		let examples = ExtractExamples(examplesDir+f);

		let body = "";
		Object.keys(examples).forEach(function (name) {
			body+= "<div class=\"CodeExample\" name=\""+name+"\">"+examples[name]+"</div>\r\n";
		});
		fs.writeFileSync("dist/Examples/"+f.replace(/\.js$/, ".html"), template.replace(/\<\!--\$BODY\$--\>/, body), "utf8");
	}
});



/*
var menus = [];
Fs.readdirSync("dist/Examples").forEach(function (f) {
	if (Fs.statSync("dist/Examples/"+f).isFile()) {
		if (!f.Contains(".template") && !f.endsWith(".js") && f != "REPL.html" && f != "home.html" && f != "index.html") {
			menus.push('<a href="'+f+'" target="main">'+f.replace(/\.html$/, "")+'</a>');
		}
	}
});

template = template.replace(/\<\!--\$MENU\$--\>/, menus.join("\r\n<br>\r\n"));
Fs.writeFileSync("dist/Examples/index.html", template.replace(/\<\!--\$MENU\$--\>/, menus.join("\r\n<br>\r\n")), "utf8");
*/

function ExtractExamples (file) {
	let src = fs.readFileSync(file, "utf8");

	let names = [];
	src.match(/\/\*+\sExample\((.+)\)\s\*+\//g).forEach(function (s) {
		names.push(s.match(/\((.+)\)/)[1]);
	});

	let _examples = [];
	let ex = src.split(/\/\*+\sExample\(.+\)\s\*+\//);
	for (let i=1; i < ex.length; i++) {
		_examples.push(ex[i].replace(/^\r\n/, "").replace(/\r\n$/, ""));
	}

	let examples = {};
	for (i=0; i<_examples.length; i++) {
		if (Object.keys(examples).indexOf(names[i]) > -1) {names[i] += i}
		examples[names[i]] = _examples[i]
	}
	return examples;	
}
