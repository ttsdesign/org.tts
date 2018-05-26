require("../src/index.js");

var d = "Defined";
Test.Equal(IsDefined(d) === true, "IsDefined");
Test.Equal(IsDefined === true, "IsDefined");
var nd;
Test.Equal(IsDefined(nd) === false, "IsDefined");
Test.Equal(IsDefined(undefined) === false, "IsDefined");
Test.Equal(IsDefined(null) === false, "IsDefined");

