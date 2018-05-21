if (!Object.prototype.hasOwnProperty("Clone")) {
	Object.defineProperty(Object.prototype, "Clone", {
		configurable: false,
		enumerable: false,
		value: function (obj) {
			return Clone(this, obj);
		}
	});
}
