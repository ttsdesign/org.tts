if (!Array.prototype.hasOwnProperty("RemoveElement")) {
	Object.defineProperty(Array.prototype, "RemoveElement", {
		configurable: false,
		enumerable: false,
		value: function () {
			var elements = [];
			Array.from(arguments).forEach(function (e) {
				elements.push(JSON.stringify(e));
			});

			for (var i=this.length-1; i>=0; i--) {
				var ee = JSON.stringify(this[i]);
				elements.some(function (e) {
					if (ee === e) {
						this.RemoveIndex(i);
						return true;
					}
				}, this);
			}
			return this;
		}
	});
}