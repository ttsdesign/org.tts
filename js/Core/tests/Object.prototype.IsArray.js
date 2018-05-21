require("../src/index.js");

Test.Equal(!"Test".IsArray(), "IsArray(String)");
Test.Equal(!true.IsArray(), "IsArray(Boolean)");
Test.Equal(!15..IsArray(), "IsArray(Number)");
Test.Equal([1,2].IsArray(), "IsArray(Array)");
Test.Equal(!{a:1, b:2}.IsArray(), "IsArray(Object)");
Test.Equal(!(function TestFunc () {}).IsArray(), "IsArray(Function)");
