if (!Date.prototype.hasOwnProperty("Span")) {
	Object.defineProperty(Date.prototype, "Span", {
		configurable: false,
		enumerable: false,
		value: function(d) {
			if (typeof d === "undefined" || (!d.IsType("Date") && !d.IsType("Number"))) {
				return undefined;
			}
			var _span = Math.abs(this - d);
			var Span = {
				"Days": _span/(1000*60*60*24),
				"Hours": _span/(1000*60*60),
				"Minutes": _span/(1000*60),
				"Seconds": _span/1000,
				"Value": _span
			};
			return Span;
		}
	});
}