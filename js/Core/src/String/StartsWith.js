if (!String.prototype.hasOwnProperty("startsWith")) {
	Object.defineProperty(String.prototype, "startsWith", {
		configurable: false,
		enumerable: false,
		value: function (s) {
			return this.indexOf(s) === 0
		}
	});
}

if (!String.prototype.hasOwnProperty("StartsWith")) {
	Object.defineProperty(String.prototype, "StartsWith", {
		configurable: false,
		enumerable: false,
		value: String.prototype.startsWith
	});
}