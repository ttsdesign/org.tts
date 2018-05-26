(function() {

	if (!Array.prototype.hasOwnProperty("ToObject")) {
		Object.defineProperty(Array.prototype, "ToObject", {
			configurable: false,
			enumerable: false,
			value: function (keys) {
				var obj = {};
				if (typeof keys !== "undefined" && IsArray(keys) && this.length == keys.length) {
					for (var i=0; i<keys.length; i++) {
						obj[keys[i]] = this[i];
					}					
				} else {
					for (var i=0; i<this.length-1; i+=2) {
						obj[this[i]] = this[i+1];
					}
				}
				return obj;
			}
		});
	}

}());
