(function(NS) {
	if (!NS.hasOwnProperty('Assert')) {
		Object.defineProperty(NS, 'Assert', {
			configurable: false,
			enumerable: false,
			value: function (condition, message) {
				if (condition) return;
				message = message || 'Assertion failed';
				throw typeof Error !== 'undefined' ? new Error(message) : message;
			}
		});
	}
}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));