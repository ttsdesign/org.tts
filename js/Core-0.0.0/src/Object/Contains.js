if (!Object.prototype.hasOwnProperty("Contains")) {
	Object.defineProperty(Object.prototype, "Contains", {
		configurable: false,
		enumerable: false,
		value: function (s) {
			if (IsType(this, "String") || IsType(this, "Array")) {
				return (this.indexOf(s) != -1);
			}
			return Object.keys(this).includes(s)
		}
	})
}