if (!Object.prototype.hasOwnProperty('IsFunction')) {
	Object.defineProperty(Object.prototype, 'IsFunction', {
		configurable: false,
		enumerable: false,
		value: function() {
			return '[object Function]' == Object.prototype.toString.call(this)
		}
	});
}