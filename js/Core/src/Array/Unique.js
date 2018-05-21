if (!Array.prototype.hasOwnProperty("Unique")) {
	Object.defineProperty(Array.prototype, "Unique", {
		configurable: false,
		enumerable: false,
		value: function() {
			var u = [];
			this.forEach(function (e, i) {
				if (!u.Contains(e)) {
					u.push(e);
				}
			});
			return u;
		}
	});
}