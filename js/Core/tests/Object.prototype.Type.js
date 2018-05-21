Assert("Test".Type() == "String", "Type(String)");
Assert(true.Type() == "Boolean", "Type(Boolean)");
var n = 15;
Assert(n.Type() == "Number", "Type(Number)");
Assert([1,2].Type() == "Array", "Type(Array)");
Assert({a:1, b:2}.Type() == "Object", "Type(Object)");
function TestFunc () {};
Assert(TestFunc.Type() == "Function", "Type(Function)");
