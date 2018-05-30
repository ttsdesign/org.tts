
var sources = {
	"lang": [
		"src/Clone.js",
		"src/GetContext.js",
		"src/IsArray.js",
		"src/IsDefined.js",
		"src/IsEqual.js",
		"src/IsFunction.js",
		"src/IsType.js",
		"src/lodashImports.js",
		"src/Logger.js",
		"src/noop.js",
		"src/Type.js"
	],
	"String": [
		"src/String/Base64.js",
		"src/String/EndsWith.js",
		"src/String/Escape.js",
		"src/String/Hash.js",
		"src/String/IsEmpty.js",
		"src/String/Match.js",
		"src/String/StartsWith.js",
		"src/String/ToMatch.js",
		"src/String/Unescape.js"
	],
	"Array": [
		"src/Array/from.js",
		"src/Array/RemoveElement.js",
		"src/Array/RemoveIndex.js",
		"src/Array/ToObject.js",
		"src/Array/Unique.js"
	],
	"Object": [
		"src/Object/Clone.js",
		"src/Object/Contains.js",
		"src/Object/Extend.js",
		"src/Object/IsArray.js",
		"src/Object/IsFunction.js",
		"src/Object/IsType.js",
		"src/Object/Join.js",
		"src/Object/Type.js"
	],
	"Date": [
		"src/Date/Constants.js",
		"src/Date/Range.js",
		"src/Date/Span.js"
	],
	"Util": [
		"src/Path.js",
		"src/QueryString.js",
		"src/Test.js"
	]
};

////////////////////////////////////////////////////////////////////////////////
///// Nothing to Edit Below ////////////////////////////////////////////////////
if (process.cwd().endsWith("build")) {process.chdir("..")}

path = require("path");
fs = require("fs");
uglifyjs = require("uglify-es");

let pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
let outputFile = pkg.main.replace(/\.js$/, "."+pkg.version+".js");

var code = {global:{}, ns:{}};
Object.keys(sources).forEach(function (m) {
	sources[m].forEach(function (f) {
		var source = fs.readFileSync(f, "utf8");
		source = source.replace(/.*?\s*\=*\s*require\(.*?\);/g, "");

		if ((source.match(/\(function( )*\(NS\)( )*\{/) != null) && (source.match(/\}( )*\(typeof window !== "undefined" \? window : \(typeof global !== "undefined"\) \? global : this\)\);/) != null)) {
			code.ns[f.substr(f.lastIndexOf("/")+1)] = uglifyjs.minify(source.replace(/\(function( )*\(NS\)( )*\{/, "").replace(/\}( )*\(typeof window !== "undefined" \? window : \(typeof global !== "undefined"\) \? global : this\)\);/, ""), {compress: {keep_fnames:true, dead_code:false}, mangle: {keep_fnames:true}});
		} else {
			code.global[f.substr(f.lastIndexOf("/")+1)] = uglifyjs.minify(source, {compress: {keep_fnames:true, dead_code:false}, mangle: {keep_fnames:true}});
		}
	});
});


var output = "";
Object.keys(code.global).forEach(function (f) {
	output += "/* "+f+" */\n";
	output += code.global[f].code + "\n";
});

output += "(function(NS) {\n";
Object.keys(code.ns).forEach(function (f) {
	output += "\t/* "+f+" */\n";
	output += "\t"+code.ns[f].code + "\n";
});
output += "}(typeof window !== \"undefined\" ? window : (typeof global !== \"undefined\") ? global : this));\n";

var preamble = "/* "+pkg.name+" v"+pkg.version+"\r\n*  "+pkg.title+"\r\n*  "+pkg.description+"\r\n*  "+pkg.author.name+" ("+pkg.author.email+")\r\n*/\r\n";
fs.writeFileSync(outputFile, output, "utf8");
fs.writeFileSync(outputFile.replace(/\.js$/, ".min.js"), preamble+uglifyjs.minify(output, {compress: {keep_fnames:true}, mangle: {keep_fnames:true}}).code, "utf8");
fs.copyFileSync(outputFile.replace(/\.js$/, ".min.js"), pkg.main);

if (process.argv.includes("install")) {
	let installDir = process.env.NODE_PATH.split(";").pop();
	fs.copyFileSync(pkg.main, installDir+"/"+path.basename(pkg.main));
}
