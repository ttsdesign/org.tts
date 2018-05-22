require("./org.tts.js.core.js");
//require("./GetContext.js");
//require("./Logger.js");
//require("./lodashImports.js");


(function(NS) {

	var count = 0, errFails = false, logFail = true, logPass = true;

	function LogTest (status, message) {
		count++;
		if (errFails && !status) {
			throw typeof Error !== 'undefined' ? new Error(message || "Assertion Failed") : message;
		}
		message = (status ? "(PASS)" : "(FAIL)") + count + ":" + (message || "Assertion failed");
		if (logPass && status) {
			LOG(message);
		}
		if (logFail && !status) {
			if (GetContext() === "NodeJS") {LOG("\x1b[31m"+message+"\x1b[0m")}
			else {LOG(message)}
		}
		return message;
	}


	var Test = {};

	Object.defineProperty(Test, "ErrorOnFail", {enumerable: false, configurable: false, 
		get: function () {return errFails},
		set: function (v) {errFails = v; return this}
	});

	Object.defineProperty(Test, "LogFail", {enumerable: false, configurable: false, 
		get: function () {return logFail},
		set: function (v) {logFail = v; return this}
	});

	Object.defineProperty(Test, "LogPass", {enumerable: false, configurable: false, 
		get: function () {return logPass},
		set: function (v) {logPass = v; return this}
	});

	Object.defineProperty(Test, "Count", {enumerable: false, configurable: false, 
		get: function () {return count},
		set: function (v) {count = v; return this}
	});


	Object.defineProperty(Test, "Equal", {enumerable: false, configurable: false, value: function (actual, expected, message) {
		return LogTest(actual === expected, message)
	}});

	Object.defineProperty(Test, "IsEqual", {enumerable: false, configurable: false, value: function (actual, expected, message) {
		return LogTest(IsEqual(actual, expected), message)
	}});

	Object.defineProperty(Test, "Ok", {enumerable: false, configurable: false, value: function (actual, message) {
		return LogTest(!!actual, message);
	}});

	if (!NS.hasOwnProperty("Test")) {
		Object.defineProperty(NS, "Test", {configurable: false, enumerable: false, value: Test	});
	}

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));