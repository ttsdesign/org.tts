var t = require("./Sample2.js");

Test.Equal(Path.Directory("/srv/http/cgi-bin/cart.cgi"), "/srv/http/cgi-bin", "Path.Directory");
Test.Equal(Path.Directory("\\srv\\http\\cgi-bin\\cart.cgi"), "\\srv\\http\\cgi-bin", "Path.Directory");
Test.Equal(Path.Directory("cart.cgi"), "", "Path.Directory");

Test.Equal(Path.Extension("/srv/http/cgi-bin/cart.cgi"), "cgi", "Path.Extension");
Test.Equal(Path.Extension("\\srv\\http\\cgi-bin\\cart.cgi"), "cgi", "Path.Extension");
Test.Equal(Path.Directory("cart"), "", "Path.Extension");

Test.Equal(Path.File("/srv/http/cgi-bin/cart.cgi"), "cart.cgi", "Path.File");
Test.Equal(Path.File("\\srv\\http\\cgi-bin\\cart.cgi"), "cart.cgi", "Path.File");
Test.Equal(Path.File("cart"), "cart", "Path.File");

Test.Equal(Path.Filename("/srv/http/cgi-bin/cart.cgi"), "cart", "Path.Filename");
Test.Equal(Path.Filename("\\srv\\http\\cgi-bin\\cart.cgi"), "cart", "Path.Filename");
Test.Equal(Path.Filename("cart"), "cart", "Path.Filename");

