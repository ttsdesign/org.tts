if (!String.prototype.hasOwnProperty("Match")) {
	Object.defineProperty(String.prototype, "Match", {
		configurable: false,
		enumerable: false,
		value: function (m) {
			return (this.match(m) != null);
		}
	});
}