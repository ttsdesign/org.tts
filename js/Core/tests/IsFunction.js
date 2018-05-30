require("../src/index.js");

Test.Ok(IsFunction(function TestFunc () {}), "IsFunction");
Test.Not(IsFunction("Test String"), "IsFunction");
