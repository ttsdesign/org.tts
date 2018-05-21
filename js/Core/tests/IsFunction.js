require("../src/index.js");

Test.Ok(IsFunction(function TestFunc () {}), "IsFunction");
Test.Ok(!IsFunction("Test String"), "IsFunction");
