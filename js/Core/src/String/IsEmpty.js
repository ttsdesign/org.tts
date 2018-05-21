if (!String.prototype.hasOwnProperty("IsEmpty")) {
	Object.defineProperty(String.prototype, "IsEmpty", {
		configurable: false,
		enumerable: false,
		value: function () {
			return (this.length === 0)
		}
	});
}