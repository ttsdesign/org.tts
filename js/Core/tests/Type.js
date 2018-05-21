Assert(Type("Test") == "String", "Type(String)");
Assert(Type(true) == "Boolean", "Type(Boolean)");
Assert(Type(15) == "Number", "Type(Number)");
Assert(Type([1,2]) == "Array", "Type(Array)");
Assert(Type({a:1, b:2}) == "Object", "Type(Object)");
Assert(Type(function () {}) == "Function", "Type(Function)");
