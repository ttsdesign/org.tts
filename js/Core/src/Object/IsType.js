if (!Object.prototype.hasOwnProperty('IsType')) {
	Object.defineProperty(Object.prototype, 'IsType', {
		configurable: false,
		enumerable: false,
		value: function(type) {
			return "[object "+type+"]" == Object.prototype.toString.call(this)
		}
	});
}