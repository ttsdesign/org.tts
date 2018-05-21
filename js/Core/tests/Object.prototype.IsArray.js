Assert("Test".IsArray() == false, "IsArray(String)");
Assert(true.IsArray() == false, "IsArray(Boolean)");
var n = 15;
Assert(n.IsArray() == false, "IsArray(Number)");
Assert([1,2].IsArray() == true, "IsArray(Array)");
Assert({a:1, b:2}.IsArray() == false, "IsArray(Object)");
function TestFunc () {}
Assert(TestFunc.IsArray() == false, "IsArray(Function)");
