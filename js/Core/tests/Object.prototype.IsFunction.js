Assert((function TestFunc () {}).IsFunction() == true, "Object.prototype.IsFunction(1)");
Assert("Test String".IsFunction() == false, "Object.prototype.IsFunction(2)");
