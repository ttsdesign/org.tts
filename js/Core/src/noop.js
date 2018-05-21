(function(NS) {
	if (!NS.hasOwnProperty('noop')) {
		Object.defineProperty(NS, 'noop', {
			configurable: false,
			enumerable: false,
			value: function() {

			}
		});
	}
}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));