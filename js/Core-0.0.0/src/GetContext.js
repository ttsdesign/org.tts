(function(NS) {
	if (!NS.hasOwnProperty("GetContext")) {
		Object.defineProperty(NS, "GetContext", {
			configurable: false,
			enumerable: false,
			value: function () {
				if (typeof window !== "undefined" && "[object Window]" == Object.prototype.toString.call(window)) {
					return "Browser";
				}
				if (typeof process !== "undefined" && "[object process]" == Object.prototype.toString.call(process)) {
					return "NodeJS";
				}
				if (typeof DriveApp !== "undefined" && "Drive" == DriveApp.toString()) {
					return "Google";
				}
				return "unknown";
			}
		});
	}
}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
