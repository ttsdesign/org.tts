Fs = require("fs");
require("../dist/org.tts.js.core-1.0.js");
Example = require("./Example.js");

Fs.readdirSync("examples").forEach(function (f) {
	if (Fs.statSync("examples/"+f).isFile()) {
		var examples = require("../examples/"+f);
		examples.Output("dist/Examples/"+f.replace(/\js$/, "html"));
	}
});

var template = Fs.readFileSync("dist/Examples/index.template.html", "utf8");
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


