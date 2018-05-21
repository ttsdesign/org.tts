
function require (file) {
	f = Function("const module = { exports: {} };\n(function (module, exports) {" + require("fs").readFileSync(require.resolve(file), "utf8") + 	"})(module, module.exports);\nreturn module.exports");
	return f();
}

