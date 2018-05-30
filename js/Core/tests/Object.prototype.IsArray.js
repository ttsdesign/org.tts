require("../src/index.js");

Test.Not("Test".IsArray(), "IsArray(String)");
Test.Not(true.IsArray(), "IsArray(Boolean)");
Test.Not(15..IsArray(), "IsArray(Number)");
Test.Ok([1,2].IsArray(), "IsArray(Array)");
Test.Not({a:1, b:2}.IsArray(), "IsArray(Object)");
Test.Not((function TestFunc () {}).IsArray(), "IsArray(Function)");
