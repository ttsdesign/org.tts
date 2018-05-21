if (!String.prototype.hasOwnProperty("Escape")) {
	Object.defineProperty(String.prototype, "Escape", {
		configurable: false,
		enumerable: false,
		value: function () {
			return this.replace(/&/g, "&amp;")
				.replace(/"/g, "&quot;").replace(/\'/g, "&#x27;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/\//g, "&#x2F;")
				.replace(/\\/g, "&#x5C;")
				.replace(/\`/g, "&#96;")
		}
	});
}