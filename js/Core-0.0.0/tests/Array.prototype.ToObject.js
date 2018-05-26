require("../src/index.js");

Test.IsEqual(["one",2,"THREE",4, 5, "Five"].ToObject(), {one:2, THREE:4, "5":"Five"}, "Array.prototype.ToObject");
Test.IsEqual(["one",2,"THREE",4, 5, "Five"].ToObject()["THREE"], 4, "Array.prototype.ToObject");
