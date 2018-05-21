const Fs = require("fs");

GetFiles(__dirname).forEach(function (f) {
	//console.log(f);
	require(f);
});

function GetFiles (dir) {
	let files = [];
	Fs.readdirSync(dir).forEach(function (f) {
		if (Fs.statSync(dir+"/"+f).isDirectory()) {
			files = files.concat(GetFiles(dir+"/"+f));
		}
		if (Fs.statSync(dir+"/"+f).isFile()) {
			if (files != "index.js") {
				files.push(dir+"/"+f);
			}
		}
	});
	return files;
}


/*
require("./GetContext.js");
require("./lodashImports.js");
require("./Logger.js");
require("./IsArray.js");
require("./IsDefined.js");
require("./IsFunction.js");
require("./Istype.js");
require("./noop.js");
require("./Path.js");
require("./QueryString.js");
require("./Test.js");
require("./Type.js");
require("./String/Base64.js");
require("./String/EndsWith.js");
require("./String/Escape.js");
require("./String/Hash.js");
require("./String/IsEmpty.js");
require("./String/Match.js");
require("./String/StartsWith.js");
require("./String/ToMatch.js");
require("./String/Unescape.js");
require("./Array/from.js");
require("./Array/RemoveElement.js");
require("./Array/RemoveIndex.js");
require("./Array/ToObject.js");
require("./Array/Unique.js");
require("./Object/Type.js");
require("./Object/Clone.js");
require("./Object/Contains.js");
require("./Object/Extend.js");
require("./Object/IsArray.js");
require("./Object/IsFunction.js");
require("./Object/IsType.js");
require("./Object/Join.js");
require("./Date/Constants.js");
require("./Date/Range.js");
require("./Date/Span.js");
*/
