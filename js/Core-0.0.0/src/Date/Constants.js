(function(NS) {

	if (!NS.Date.hasOwnProperty("SECOND")) {
		Object.defineProperty(NS.Date, "SECOND", {
			configurable: false,
			enumerable: false,
			value: 1000
		});
	}

	if (!NS.Date.hasOwnProperty("MINUTE")) {
		Object.defineProperty(NS.Date, "MINUTE", {
			configurable: false,
			enumerable: false,
			value: 1000*60
		});
	}

	if (!NS.Date.hasOwnProperty("HOUR")) {
		Object.defineProperty(NS.Date, "HOUR", {
			configurable: false,
			enumerable: false,
			value: 1000*60*60
		});
	}

	if (!NS.Date.hasOwnProperty("DAY")) {
		Object.defineProperty(NS.Date, "DAY", {
			configurable: false,
			enumerable: false,
			value: 1000*60*60*24
		});
	}

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
