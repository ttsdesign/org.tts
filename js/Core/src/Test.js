require("./lodash.js");

(function(NS) {

	function Assert (condition, message) {
		if (condition) return;
		message = message || 'Assertion failed';
		throw typeof Error !== 'undefined' ? new Error(message) : message;
	}


	function Test (assert) {
		assert = assert || Test.Assert;

		Object.defineProperty(this, "Assert", {enumerable: false, configurable: true, 
			get: function () {return assert},
			set: function (a) {assert = a; return this}
		});

		Object.defineProperty(this, "Ok", {enumerable: false, configurable: false, value: function (actual, message) {
			assert(actual, message)
		}});

		Object.defineProperty(this, "Equal", {enumerable: false, configurable: false, value: function (actual, expected, message) {
			assert(actual === expected, message)
		}});

		Object.defineProperty(this, "IsEqual", {enumerable: false, configurable: false, value: function (actual, expected, message) {
			assert(IsEqual(actual, expected), message)
		}});

		return this;
	}

	Object.defineProperty(Test, "Assert", {configurable: false, enumerable: false, value: Assert});

	if (!NS.hasOwnProperty("Test")) {
		Object.defineProperty(NS, "Test", {configurable: false, enumerable: false, value: Test	});
	}

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));