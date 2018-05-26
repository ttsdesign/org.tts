(function(NS) {
	
	function _LOG () {
		this.OUT.log.apply(this.OUT, arguments);
	}

	var _LOGGER = {
		OUT: (NS.GetContext() == "Google") ? Logger : console
	};

	
	if (!NS.hasOwnProperty("LOG")) {
		Object.defineProperty(NS, "LOG", {
			configurable: false,
			enumerable: false,
			value: _LOG.bind(_LOGGER)
		});
	}

	if (!NS.hasOwnProperty("LOGGER")) {
		Object.defineProperty(NS, "LOGGER", {
			configurable: false,
			enumerable: false,
			get: function () {
				return _LOGGER
			}
		});
	}


}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
