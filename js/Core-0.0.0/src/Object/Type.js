if (!Object.prototype.hasOwnProperty('Type')) {
	Object.defineProperty(Object.prototype, 'Type', {
		configurable: false,
		enumerable: false,
		value: function() {
			return Object.prototype.toString.call(this).split(" ")[1].replace("]", "");
		}
	});
}

if (!Object.hasOwnProperty('Type')) {
	Object.defineProperty(Object, 'Type', {
		configurable: false,
		enumerable: false,
		value: function(v) {
			return Object.prototype.toString.call(v).split(" ")[1].replace("]", "");
		}
	});
}