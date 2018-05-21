if (!Object.prototype.hasOwnProperty('IsArray')) {
	Object.defineProperty(Object.prototype, 'IsArray', {
		configurable: false,
		enumerable: false,
		value: function() {
			if ("isArray" in Array) {
				return Array.isArray(this);
			}
			return '[object Array]' == Object.prototype.toString.call(this)
		}
	});
}
