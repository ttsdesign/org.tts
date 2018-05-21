(function(NS) {
	if (!NS.hasOwnProperty('IsType')) {
		Object.defineProperty(NS, 'IsType', {
			configurable: false,
			enumerable: false,
			value: function(obj, type) {
				return "[object "+type+"]" == Object.prototype.toString.call(obj)
			}
		});
	}
}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));