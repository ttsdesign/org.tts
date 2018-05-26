require("../src/index.js");

Test.Equal(Type("Test"), "String", "Type(String)");
Test.Equal(Type(true), "Boolean", "Type(Boolean)");
Test.Equal(Type(15), "Number", "Type(Number)");
Test.Equal(Type([1,2]), "Array", "Type(Array)");
Test.Equal(Type({a:1, b:2}), "Object", "Type(Object)");
Test.Equal(Type(function () {}), "Function", "Type(Function)");
