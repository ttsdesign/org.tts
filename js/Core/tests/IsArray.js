Assert(IsArray("Test") == false, "IsArray(String)");
Assert(IsArray(true) == false, "IsArray(Boolean)");
Assert(IsArray(15) == false, "IsArray(Number)");
Assert(IsArray([1,2]) == true, "IsArray(Array)");
Assert(IsArray({a:1, b:2}) == false, "IsArray(Object)");
Assert(IsArray(function () {}) == false, "IsArray(Function)");