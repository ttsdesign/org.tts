(function(NS) {
	if (!NS.hasOwnProperty('Type')) {
		Object.defineProperty(NS, 'Type', {
			configurable: false,
			enumerable: false,
			value: function(v) {
				return Object.prototype.toString.call(v).split(" ")[1].replace("]", "");
			}
		});
	}
}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));