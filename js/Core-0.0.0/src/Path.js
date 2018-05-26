/*
* isAbsolute()
* Join()
* Normalize()
* Relative(from, to)
* Resolve()
*/
(function(NS) {
	var _Path = {
		"Directory": function (path) {
			if (path.Contains("/")) {
				return path.substring(0, path.lastIndexOf("/"));
			}
			if (path.Contains("\\")) {
				return path.substring(0, path.lastIndexOf("\\"));
			}
			return "";
		},
		"Extension": function (path) {
			var filename = this.File(path);
			if (typeof filename !== "undefined") {
				if (filename.Contains(".")) {
					return filename.split(".").pop();
				}
			}
			return "";
		},
		"File": function (path) {
			if (path.Contains("/")) {
				return path.split("/").pop();
			} else if (path.Contains("\\")) {
				return path.split("\\").pop();
			}
			return path;
		},
		"Filename": function (path) {
			path = (path.Contains(".")) ? path.substring(0, path.lastIndexOf(".")) : path;
			if (path.Contains("/")) {
				return path.split("/").pop();
			} else if (path.Contains("\\")) {
				return path.split("\\").pop();
			}
			return path;
		}
	};


	if (!NS.hasOwnProperty("Path")) {
		Object.defineProperty(NS, "Path", {
			configurable: false,
			enumerable: false,
			get: function () {
				return _Path
			}
		});
	}

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));


/*
function Normalize (path, stripTrailing) {
  if (typeof path !== 'string') {
    throw new TypeError('expected path to be a string');
  }

  if (path === '\\' || path === '/') return '/';

  var len = path.length;
  if (len <= 1) return path;

  // ensure that win32 namespaces has two leading slashes, so that the path is
  // handled properly by the win32 version of path.parse() after being normalized
  // https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
  var prefix = '';
  if (len > 4 && path[3] === '\\') {
    var ch = path[2];
    if ((ch === '?' || ch === '.') && path.slice(0, 2) === '\\\\') {
      path = path.slice(2);
      prefix = '//';
    }
  }

  var segs = path.split(/[/\\]+/);
  if (stripTrailing !== false && segs[segs.length - 1] === '') {
    segs.pop();
  }
  return prefix + segs.join('/');
};
*/