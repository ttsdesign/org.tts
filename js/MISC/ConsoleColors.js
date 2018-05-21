
(function(NS) {

	if (typeof process === "undefined" || "[object process]" !== Object.prototype.toString.call(process)) {
		return;
	}

	let Chars = {
		"Control": {
			"Reset": "\x1b[0m",
			"Bright": "\x1b[1m",
			"Dim": "\x1b[2m",
			"Underscore": "\x1b[4m",
			"Blink": "\x1b[5m",
			"Reverse": "\x1b[7m",
			"Hidden": "\x1b[8m"
		},
		"Fg": {
			"Black": "\x1b[30m",
			"Red": "\x1b[31m",
			"Green": "\x1b[32m",
			"Yellow": "\x1b[33m",
			"Blue": "\x1b[34m",
			"Magenta": "\x1b[35m",
			"Cyan": "\x1b[36m",
			"White": "\x1b[37m",
		},
		"Bg": {
			"Black": "\x1b[40m",
			"Red": "\x1b[41m",
			"Green": "\x1b[42m",
			"Yellow": "\x1b[43m",
			"Blue": "\x1b[44m",
			"Magenta": "\x1b[45m",
			"Cyan": "\x1b[46m",
			"White": "\x1b[47m"
		}
	};

	let config = {};
	Object.defineProperty(config, "BgColors", {configurable: false, enumerable: false, get: function () {
		return Object.keys(Chars.Bg);
	}});
	Object.defineProperty(config, "BgWrap", {configurable: false, enumerable: false, value: function (color, s) {
		if (!Object.keys(Chars.Bg).includes(color)) {
			return s;
		}
		return Chars.Bg[color] + s + Chars.Control["Reset"];
	}});
	Object.defineProperty(config, "Controls", {configurable: false, enumerable: false, get: function () {
		return Object.keys(Chars.Control);
	}});
	Object.defineProperty(config, "FgColors", {configurable: false, enumerable: false, get: function () {
		return Object.keys(Chars.Fg);
	}});
	Object.defineProperty(config, "FgWrap", {configurable: false, enumerable: false, value: function (color, s) {
		if (!Object.keys(Chars.Fg).includes(color)) {
			return s;
		}
		return Chars.Fg[color] + s + Chars.Control["Reset"];
	}});
	Object.defineProperty(config, "Reset", {configurable: false, enumerable: false, value: function () {
		console.log(Chars.Control["Reset"]);
	}});
	Object.defineProperty(config, "SetBg", {configurable: false, enumerable: false, value: function (color) {
		if (Object.keys(Chars.Bg).includes(color)) {
			console.log(Chars.Bg[color])
		}
	}});
	Object.defineProperty(config, "SetFg", {configurable: false, enumerable: false, value: function (color) {
		if (!Object.keys(Chars.Fg).includes(color)) {
			console.log(Chars.Fg[color])
		}
	}});


	if ("console" in NS) {
		if (!NS.console.hasOwnProperty("config")) {
			Object.defineProperty(NS.console, "config", {
				configurable: false,
				enumerable: false,
				value: config
			});
		}
	}

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));

