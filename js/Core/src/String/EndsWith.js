if (!String.prototype.hasOwnProperty("endsWith")) {
	Object.defineProperty(String.prototype, "endsWith", {
		configurable: false,
		enumerable: false,
		value: function (s) {
			return this.match(s + "$") == s
		}
	});
}

if (!String.prototype.hasOwnProperty("EndsWith")) {
	Object.defineProperty(String.prototype, "EndsWith", {
		configurable: false,
		enumerable: false,
		value: String.prototype.endsWith
	});
}
