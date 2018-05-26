(function(NS) {
	if (!NS.hasOwnProperty('IsFunction')) {
		Object.defineProperty(NS, 'IsFunction', {
			configurable: false,
			enumerable: false,
			value: function(obj) {
				return '[object Function]' == Object.prototype.toString.call(obj)
			}
		});
	}
}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));