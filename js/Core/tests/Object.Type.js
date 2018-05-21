Assert(Object.Type("Test") == "String", "Object.Type(String)");
Assert(Object.Type(true) == "Boolean", "Object.Type(Boolean)");
Assert(Object.Type((5)) == "Number", "Object.Type(Number)");
Assert(Object.Type([1,2]) == "Array", "Object.Type(Array)");
Assert(Object.Type({a:1, b:2}) == "Object", "Object.Type(Object)");
Assert(Object.Type((function TestFunc () {})) == "Function", "Object.Type(Function)");
