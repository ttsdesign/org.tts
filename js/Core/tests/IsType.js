require("../src/index.js");

Test.Ok(IsType("Test", "String"), "IsType(String)");
Test.Ok(IsType(true, "Boolean"), "IsType(Boolean)");
Test.Ok(IsType((15), "Number"), "IsType(Number)");
Test.Ok(IsType([1,2], "Array"), "IsType(Array)");
Test.Ok(IsType({a:1, b:2}, "Object"), "IsType(Object)");
Test.Ok(IsType((function TestFunc () {}), "Function"), "IsType(Function)");

Test.Not(IsType("Test", "Boolean"), "IsType(Boolean1)");
Test.Not(IsType(true, "Number"), "IsType(Number1)");
Test.Not(IsType((15), "Array"), "IsType(Array1)");
Test.Not(IsType([1,2], "Object"), "IsType(Object1)");
Test.Not(IsType({a:1, b:2}, "Function"), "IsType(Function1)");
Test.Not(IsType((function TestFunc () {}), "String"), "IsType(String1)");
