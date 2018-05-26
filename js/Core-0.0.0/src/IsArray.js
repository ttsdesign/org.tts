(function(NS) {
	if (!NS.hasOwnProperty('IsArray')) {
		Object.defineProperty(NS, 'IsArray', {
			configurable: false,
			enumerable: false,
			value: function(a) {
				if ("isArray" in Array) {
					return Array.isArray(a);
				}
				return !!a && '[object Array]' == Object.prototype.toString.call(a)
			}
		});
	}
}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));