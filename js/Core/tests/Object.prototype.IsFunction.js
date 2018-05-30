require("../src/index.js");

Test.Ok((function TestFunc () {}).IsFunction(), "Object.prototype.IsFunction");
Test.Not("Test String".IsFunction(), "Object.prototype.IsFunction");
