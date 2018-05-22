Fs = require("fs");
Path = require("path");
UglifyJs = require("uglify-js");
require("../libs/org.tts.js.core.js");

let newLine = "\r\n";

function Importer (file) {
	let f = "";
	if (Fs.existsSync(file)) {
		f = Function("module = { exports: {} };\n(function (exports, require, module, __filename, __dirname) {" + newLine + Fs.readFileSync(file, "utf8") + newLine + "})(module, module.exports);" + newLine + "return module.exports")
		return "(function () {" + UglifyJs.minify(f.toString(), {compress: {keep_fnames:true, dead_code:false}, mangle: {keep_fnames:true}}).code + "}())";
	}
	return "";
}

module.exports = Importer;
