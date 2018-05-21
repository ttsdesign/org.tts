require("../src/index.js");

Test.IsEqual(({"one": 1, 2: "Two"}).Join(), '"2":"Two", "one":1', "Object.prototype.Join");
Test.IsEqual(({"one": 1, 2: "Two"}).Join(";"), '"2":"Two";"one":1', "Object.prototype.Join");
Test.IsEqual(({"one": 1, 2: "Two"}).Join("&", "="), '"2"="Two"&"one"=1', "Object.prototype.Join");
