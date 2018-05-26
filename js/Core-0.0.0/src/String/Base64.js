if (!String.prototype.hasOwnProperty("Base64")) {
	Object.defineProperty(String.prototype, "Base64", {
		configurable: false,
		enumerable: false,
		get: function () {
			var data = this;
			var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc = '', tmp_arr = [], b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			return {
				"Decode": function () {
					do {
						h1 = b64.indexOf(data.charAt(i++));
						h2 = b64.indexOf(data.charAt(i++));
						h3 = b64.indexOf(data.charAt(i++));
						h4 = b64.indexOf(data.charAt(i++));
						bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
						o1 = bits >> 16 & 0xff;
						o2 = bits >> 8 & 0xff;
						o3 = bits & 0xff;
						if (h3 == 64) {
							tmp_arr[ac++] = String.fromCharCode(o1);
						} else if (h4 == 64) {
							tmp_arr[ac++] = String.fromCharCode(o1, o2);
						} else {
							tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
						}
					} while (i < data.length);
					dec = tmp_arr.join('');
					return decodeURIComponent(escape(dec.replace(/\0+$/, '')));
				},
				"Encode": function () {
					data = unescape(encodeURIComponent(data));
					do {
						o1 = data.charCodeAt(i++);
						o2 = data.charCodeAt(i++);
						o3 = data.charCodeAt(i++);
						bits = o1 << 16 | o2 << 8 | o3;
						h1 = bits >> 18 & 0x3f;
						h2 = bits >> 12 & 0x3f;
						h3 = bits >> 6 & 0x3f;
						h4 = bits & 0x3f;
						tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
					} while (i < data.length);
					enc = tmp_arr.join('');
					var r = data.length % 3;
					return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
				}
			}
		}
	});
}
