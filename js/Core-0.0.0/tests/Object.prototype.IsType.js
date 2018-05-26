require("../src/index.js");

Test.Ok("Test".IsType("String"), "Object.prototype.IsType(String)");
Test.Ok(true.IsType("Boolean"), "Object.prototype.IsType(Boolean)");
Test.Ok((15).IsType("Number"), "Object.prototype.IsType(Number)");
Test.Ok([1,2].IsType("Array"), "Object.prototype.IsType(Array)");
Test.Ok({a:1, b:2}.IsType("Object"), "Object.prototype.IsType(Object)");
Test.Ok((function TestFunc () {}).IsType("Function"), "Object.prototype.IsType(Function)");

Test.Ok("Test".IsType("Number"), "Object.prototype.IsType(Number)");
Test.Ok(true.IsType("String"), "Object.prototype.IsType(Boolean)");
Test.Ok((15).IsType("Object"), "Object.prototype.IsType(Object)");
Test.Ok([1,2].IsType("Boolean"), "Object.prototype.IsType(Boolean)");
Test.Ok({a:1, b:2}.IsType("Function"), "Object.prototype.IsType(Function)");
Test.Ok((function TestFunc () {}).IsType("Array"), "Object.prototype.IsType(Array)");
