require("../src/index.js");

try {
	noop()
} catch (e) {
	LOG("noop("+e+")")
}
