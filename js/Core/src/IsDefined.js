(function(NS) {
	if (!NS.hasOwnProperty('IsDefined')) {
		Object.defineProperty(NS, 'IsDefined', {
			configurable: false,
			enumerable: false,
			value: function(v) {
				if (typeof v !== "undefined" && v != null) {
					return true;
				}
				return false;
			}
		});
	}
}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));