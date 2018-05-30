require("../src/index.js");

var d = "Defined";
Test.Ok(IsDefined(d), "IsDefined");
Test.Ok(IsDefined(5), "IsDefined");
var nd;
Test.Not(IsDefined(nd), "IsDefined");
Test.Not(IsDefined(undefined), "IsDefined");
Test.Not(IsDefined(null), "IsDefined");

