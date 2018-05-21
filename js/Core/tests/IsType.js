Assert(IsType("Test", "String") == true, "IsType(String)");
Assert(IsType(true, "Boolean") == true, "IsType(Boolean)");
Assert(IsType((15), "Number") == true, "IsType(Number)");
Assert(IsType([1,2], "Array") == true, "IsType(Array)");
Assert(IsType({a:1, b:2}, "Object") == true, "IsType(Object)");
Assert(IsType((function TestFunc () {}), "Function") == true, "IsType(Function)");

Assert(IsType("Test", "Boolean") == false, "IsType(Boolean1)");
Assert(IsType(true, "Number") == false, "IsType(Number1)");
Assert(IsType((15), "Array") == false, "IsType(Array1)");
Assert(IsType([1,2], "Object") == false, "IsType(Object1)");
Assert(IsType({a:1, b:2}, "Function") == false, "IsType(Function1)");
Assert(IsType((function TestFunc () {}), "String") == false, "IsType(String1)");
