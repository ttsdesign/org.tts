require("../src/index.js");

Test.Ok("".IsEmpty(), "String.prototype.IsEmpty");
Test.Ok(!"Text String".IsEmpty(), "String.prototype.IsEmpty");
Test.Ok(!String.prototype.IsEmpty.call(undefined), "String.prototype.IsEmpty");
