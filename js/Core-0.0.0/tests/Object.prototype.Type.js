require("../src/index.js");

Test.Equal("Test".Type(), "String", "Type(String)");
Test.Equal(true.Type(), "Boolean", "Type(Boolean)");
Test.Equal(15..Type(), "Number", "Type(Number)");
Test.Equal([1,2].Type(), "Array", "Type(Array)");
Test.Equal({a:1, b:2}.Type(), "Object", "Type(Object)");
Test.Equal((function TestFunc () {}).Type(), "Function", "Type(Function)");
