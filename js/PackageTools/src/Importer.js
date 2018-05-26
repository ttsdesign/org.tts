fs = require("fs");
path = require("path");
UglifyJs = require("uglify-es");
require("org.tts.js-core");

let defaults = {
	newLine: "\r\n",
	tab: "\r\n",
	paths: [],
	compress: {
		keep_fnames: true,
		dead_code: false
	},
	mangle: {
		keep_fnames: true
	},
	output: {
		beautify: true
	},
	wrap: ["", ""],
	unwrap: ["", ""],
	requires: "remove" //[remove|import| ignore]
};

function Importer (options) {
	let settings = defaults.Extend(options);
	let error = undefined;
	
	Object.defineProperty(this, "Error", {configurable: false, enumerable: false, get: function () {
		return error
	}});

	Object.defineProperty(this, "Import", {enumerable: false, configurable: false, value: function (options) {
		options = settings.Extend(options);
		error = undefined;

		if (!fs.existsSync(options.file)) {
			return error = "File not found", undefined;
		}

		let f = fs.readFileSync(options.file, "utf8");

		if (options.requires == "remove") {
			f = f.replace(/.*?\s*\=*\s*require\(.*?\);/g, "");
		}

		if (options.requires == "import") {
			//let m = f.match(/(.*?=*.*?require\(.*?\))+/);
			let m = f.match(/.*\s*\=*\s*require\(.+?\);*/);
			while (m !== null) {
				let match = m[0];
				let module = match.match(/require\((.+?)\)/)[1].replace(/(\'|\")/g, "");

				let contents = this.Require({module: module, target: options.file, requires: "remove"});
				console.log(contents);
				//console.log(f);
				f = f.replace(/.*\s*\=*\s*require\(.+?\);*/, match.replace(/require\(.+?\);*/, contents));
				m = f.match(/.*\s*\=*\s*require\(.+?\);*/);
				//m = f.match(/((.*?=.*?)*?require\(.*?\))/);
//				var m = f.match(/((.*)( )*\= *require\(.*\))/);
			}
			
		}
		//console.log(f);
		if (typeof options.functionName !== "undefined") {
			f  = options.functionName + " = " +Function(f).toString().replace("anonymous", "");
		}

		return UglifyJs.minify(f, {compress: options.compress, mangle: options.mangle, output: options.output}).code;

	}});

	Object.defineProperty(this, "Resolve", {enumerable: false, configurable: false, value: function (options) {
		error = undefined;
		options = settings.Extend(options);

		if (typeof options.module !== "undefined") {
			if (typeof options.target !== "undefined" && fs.existsSync(options.target)) {
				if (fs.statSync(options.target).isDirectory()) {
					return require.resolve(options.module, [options.target].concat(options.paths))
				}
				if (fs.statSync(options.target).isFile()) {
					return require.resolve(options.module, [path.dirname(options.target)].concat(options.paths))
				}
			} else {
				return require.resolve(options.module, options.paths)
			}
		}
		return error = "Module not defined", undefined
	}});

	Object.defineProperty(this, "Require", {enumerable: false, configurable: false, value: function (options) {
		error = undefined;
		options = settings.Extend(options);

		let filePath = this.Resolve(options);
		console.log(`filePath=${filePath}`);
		let fileContents = this.Import(options.Extend({file: filePath}));
		console.log(`filePath=${filePath}`);
		console.log(fileContents);
		let f = Function("module = { exports: {} };"+options.newLine+"(function (exports, require, module, __filename, __dirname) {" + options.newLine +fileContents + options.newLine + "})(module.exports, (typeof require === \"undefined\") ? null : require, module, \""+filePath+"\", \""+path.dirname(filePath)+"\");" + options.newLine + "return module.exports").toString().replace("anonymous", "");
		//let f = Function("module = { exports: {} };"+options.newLine+"(function (exports, require, module, __filename, __dirname) {" + options.newLine +fileContents + options.newLine + "})(module.exports, (typeof require === \"undefined\") ? null : require, module, \""+filePath+"\", \""+path.dirname(filePath)+"\");" + options.newLine + "return module.exports");
		f = "(" + f + "())";
		return UglifyJs.minify(f, {compress: options.compress, mangle: options.mangle, output: options.output}).code;
	}});

	Object.defineProperty(this, "Unwrap", {enumerable: false, configurable: false, value: function (contents, pre, post, join) {
		error = undefined;
		pre = pre || settings.unwrap[0];
		post = post || settings.unwrap[1];
		let c = {pre: "", wrapped: contents, post: ""};
		if (contents.match(pre) != null && contents.match(post) != null) {
			[c.pre, c.wrapped] = c.wrapped.split(pre);
			[c.wrapped, c.post] = c.wrapped.split(post);
		}
		if (typeof join !== "undefined" && join === true) {
			c = c.pre + settings.newLine + c.wrapped + settings.newLine + c.post;
		}
		return c;
	}});

	Object.defineProperty(this, "Wrap", {enumerable: false, configurable: false, value: function (contents, pre, post) {
		error = undefined;
		pre = pre || settings.wrap[0];
		post = post || settings.wrap[1];
		contents = pre + settings.newLine + settings.tab + contents + settings.newLine + post + settings.newLine;
		return UglifyJs.minify(contents, {compress: settings.compress, mangle: settings.mangle, output: settings.output}).code;
	}});


	return this;

}

module.exports = Importer;
