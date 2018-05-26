require("../src/index.js");

Test.Ok((function TestFunc () {}).IsFunction(), "Object.prototype.IsFunction");
Test.Ok(!"Test String".IsFunction(), "Object.prototype.IsFunction");
