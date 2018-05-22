Fs = require("fs");
Path = require("path");
UglifyJs = require("uglify-js");
RequireImporter = require("./RequireImporter.js");
require("../libs/org.tts.js.core.js");

let newLine = "\r\n";

function TestBuilder (dir) {
	dir = dir || "";
	let error = "", tests = {}, requires = [];

	function AddRequire (statement) {
		statement = statement.trim();
		if (!requires.includes(statement)) {
			requires.push(statement)
		}
	}
	

	Object.defineProperty(this, "Error", {configurable: false, enumerable: false, get: function () {
		return error
	}});

	Object.defineProperty(this, "Defaults", {configurable: false, enumerable: false, value: function (file) {
		let defaults = {
			testName: Path.basename(file)
		};
		return defaults;
	}});
	


	Object.defineProperty(this, "AddFile", {configurable: false, enumerable: false, value: function (file, options) {
		error = undefined;

		let settings = this.Defaults(file).Extend(options);

		if (!Fs.existsSync(file)) {
			return error = "Test file does not exist", false;
		}
		
		var source = [];
		Fs.readFileSync(file, "utf8").split(newLine).forEach(function (line) {
			if (line.match(/.*require\(.*\).*/) !== null) {
				AddRequire(line);
			} else {
				source.push(line);
			}
		});

		try {
			tests[settings.testName] = Function(source.join(newLine))
		} catch (e) {
			console.log(e);
			return error = e, false
		}

		return true
	}});

	Object.defineProperty(this, "Generate", {configurable: false, enumerable: false, value: function (file) {
		error = undefined;

		let output = [];
		output.push("Tests = {};" + newLine);
		Object.keys(tests).forEach(function (test) {
			output.push("Tests[\""+test+"\"] = " + tests[test].toString().replace("anonymous", "") + ";" + newLine);
		});
		output = [UglifyJs.minify(output.join(newLine), {output: {beautify: true}}).code];

		output.unshift(newLine);
		requires.reverse().forEach(function (r) {
			output.unshift(RequireImporter(require.resolve(r.replace(/.*require\((\"|\')/, "").replace(/(\"|\')\);*.*$/, ""), {paths: [process.cwd()+"/"+dir]}))+";");
		});


		if (typeof file === "undefined") {
			return output.join(newLine);			
		}

		Fs.writeFileSync(file, output.join(newLine), "utf8");

	}});


	return this;

}

module.exports = TestBuilder;

/*
		var testSource = settings.testName + " = " + testFunction.toString().replace("anonymous", "");
		return UglifyJs.minify(testSource, {output: {beautify: true}}).code; //testFunction.toString().replace("anonymous", ""), {output: {beautify: true}}).code;

*/