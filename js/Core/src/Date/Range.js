if (!Date.hasOwnProperty("Range")) {
	Object.defineProperty(Date, "Range", {
		configurable: false,
		enumerable: false,
		value: function () {
			var beg, end;
			if (arguments.length == 0) {return undefined}
			if (arguments.length == 1) {
				if (typeof arguments[0] == "number") {
					beg = new Date();
					end = new Date(beg - arguments[0]);
				} else {return undefined}
			}
			if (arguments.length > 1) {
				if (arguments[0].IsType("Date")) {beg = arguments[0]}
				else {beg = new Date(arguments[0])}
				if (arguments[1].IsType("Date")) {end = arguments[1]}
				else {end = new Date(arguments[1])}
			}
			if (beg > end) {
				var t = beg;
				beg = end;
				end = t;
			}

			Object.defineProperty(this, "Beg", {
				configurable: false,
				enumerable: false,
				get: function () {
					return beg;
				},
				set: function (d) {
					if (d.IsType("Date")) {
						beg = d;
					} else if (d.IsType("Number")) {
						beg = new Date(d);
					} else if (d.Istype("String")) {
						if (!isNaN(Date.parse(d))) {
							beg = new Date(d);
						}
					}
				}
			});

			Object.defineProperty(this, "End", {
				configurable: false,
				enumerable: false,
				get: function () {
					return end;
				},
				set: function (d) {
					if (d.IsType("Date")) {
						end = d;
					} else if (d.IsType("Number")) {
						end = new Date(d);
					} else if (d.Istype("String")) {
						if (!isNaN(Date.parse(d))) {
							end = new Date(d);
						}
					}
				}
			});

			Object.defineProperty(this, "Within", {
				configurable: false,
				enumerable: false,
				value: function (d) {
					if (d > beg && d < end) {
						return true;
					}
					return false;
				}
			});

			return this;
		}
	});
}
