require("../src/index.js");

Test.Ok(!IsArray("Test"), "IsArray(String)");
Test.Ok(!IsArray(true), "IsArray(Boolean)");
Test.Ok(!IsArray(15), "IsArray(Number)");
Test.Ok(IsArray([1,2]), "IsArray(Array)");
Test.Ok(!IsArray({a:1, b:2}), "IsArray(Object)");
Test.Ok(!IsArray(function () {}), "IsArray(Function)");