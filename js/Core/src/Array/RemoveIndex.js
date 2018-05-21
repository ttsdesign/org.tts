if (!Array.prototype.hasOwnProperty("RemoveIndex")) {
	Object.defineProperty(Array.prototype, "RemoveIndex", {
		configurable: false,
		enumerable: false,
		value: function () {
			var indexes = Array.from(arguments).sort(function (a, b) {return b-a});
			indexes.forEach(function (i) {
				var b = this.splice(i);
				Array.prototype.push.apply(this, b.splice(1));
			}, this);
			return this;
		}
	});
}