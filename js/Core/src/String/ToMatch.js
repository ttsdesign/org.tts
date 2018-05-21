if (!String.prototype.hasOwnProperty("ToMatch")) {
	Object.defineProperty(String.prototype, "ToMatch", {
		configurable: false,
		enumerable: false,
		value: function () {
			var input = this;
			var match_pattern = '(?:^';
			var regEscape = function (s) {
				return s.replace(/[[^$.|?*+(){}\\]/g, '\\$&');
			}
			var result = /^(\*|https?|file|ftp|chrome-extension):\/\//.exec(input);
			if (!result) return null;
			input = input.substr(result[0].length);
			match_pattern += result[1] === '*' ? 'https?://' : result[1] + '://';

			if (result[1] !== 'file') {
				if (!(result = /^(?:\*|(\*\.)?([^\/*]+))(?=\/)/.exec(input))) return null;
				input = input.substr(result[0].length);
				if (result[0] === '*') { 
					match_pattern += '[^/]+';
				} else {
					if (result[1]) { 
						match_pattern += '(?:[^/]+\\.)?';
					}
					
					match_pattern += regEscape(result[2]);
				}
			}
			match_pattern += input.split('*').map(regEscape).join('.*');
			match_pattern += '$)';
			return match_pattern;
		}
	});
}
