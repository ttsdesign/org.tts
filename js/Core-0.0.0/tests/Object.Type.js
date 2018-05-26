require("../src/index.js");

Test.Equal(Object.Type("Test"), "String", "Object.Type(String)");
Test.Equal(Object.Type(true), "Boolean", "Object.Type(Boolean)");
Test.Equal(Object.Type(), "Number", "Object.Type(Number)");
Test.Equal(Object.Type([1,2]), "Array", "Object.Type(Array)");
Test.Equal(Object.Type({a:1, b:2}), "Object", "Object.Type(Object)");
Test.Equal(Object.Type((function TestFunc () {})), "Function", "Object.Type(Function)");
