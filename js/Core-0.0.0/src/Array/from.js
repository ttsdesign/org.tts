if (!Array.hasOwnProperty("from")) {
	Object.defineProperty(Array, "from", {
		configurable: false,
		enumerable: false,
		value: function (v) {
			var a = [];
			for (var k in v) {
				if (k in v) {
					a.push(v[k]);
				} else {
					a.push(k);
				}
			}
			return a;
		}
	});
}