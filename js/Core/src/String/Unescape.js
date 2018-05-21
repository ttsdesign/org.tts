if (!String.prototype.hasOwnProperty("Unescape")) {
	Object.defineProperty(String.prototype, "Unescape", {
		configurable: false,
		enumerable: false,
		value: function () {
			return this.replace(/&amp;/g, "&")
				.replace(/&quot;/g, '"')
				.replace(/&#x27;/g, "'")
				.replace(/&lt;/g, "<")
				.replace(/&gt;/g, ">")
				.replace(/&#x2F;/g, "/")
				.replace(/&#x5C;/g, "\\")
				.replace(/&#96;/g, "\`")
		}
	});
}