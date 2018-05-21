QUnit = require("qunit");
Path = require("../src/Fs/Path.js");

console.log("HI");

QUnit.test("Path", function (assert) {
	assert.ok(1=="1", "Passed");
	assert.deepequal(Path.Directory("/srv/http/cgi-bin/cart.cgi"), "/srv/http/cgi-bins", "Directory");

});

/*

Assert(Path.Directory("/srv/http/cgi-bin/cart.cgi") == "/srv/http/cgi-bin", "Path.Directory(1)");
Assert(Path.Directory("\\srv\\http\\cgi-bin\\cart.cgi") == "\\srv\\http\\cgi-bin", "Path.Directory(2)");
Assert(Path.Directory("cart.cgi") == "", "Path.Directory(3)");

Assert(Path.Extension("/srv/http/cgi-bin/cart.cgi") == "cgi", "Path.Extension(1)");
Assert(Path.Extension("\\srv\\http\\cgi-bin\\cart.cgi") == "cgi", "Path.Extension(2)");
Assert(Path.Directory("cart") == "", "Path.Extension(3)");

Assert(Path.File("/srv/http/cgi-bin/cart.cgi") == "cart.cgi", "Path.File(1)");
Assert(Path.File("\\srv\\http\\cgi-bin\\cart.cgi") == "cart.cgi", "Path.File(2)");
Assert(Path.File("cart") == "cart", "Path.File(3)");

Assert(Path.Filename("/srv/http/cgi-bin/cart.cgi") == "cart", "Path.Filename(1)");
Assert(Path.Filename("\\srv\\http\\cgi-bin\\cart.cgi") == "cart", "Path.Filename(2)");
Assert(Path.Filename("cart") == "cart", "Path.Filename(3)");
*/
