if (!Object.prototype.hasOwnProperty("Join")) {
	Object.defineProperty(Object.prototype, "Join", {
		configurable: false,
		enumerable: false,
		value: function (separator, joiner) {
			separator = (typeof separator === 'undefined') ? ', ' : separator;
			joiner = (typeof joiner === 'undefined') ? ':' : joiner;
			var a = [];
			Object.keys(this).forEach(function (key) {
				a.push(JSON.stringify(key) + joiner + JSON.stringify(this[key]))
			}, this);
			return a.join(separator)
		}
	})
}