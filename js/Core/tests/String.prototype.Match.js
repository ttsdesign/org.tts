Assert("Sample Text".Match("ample") == true, "String.prototype.Match(1)");
Assert("Sample Text".Match("^ample") == false, "String.prototype.Match(2)");
Assert("Sample Text".Match("^Sample") == true, "String.prototype.Match(3)");
Assert("Sample Text".Match(/ample/) == true, "String.prototype.Match(4)");
Assert("Sample Text".Match(/^ample/) == false, "String.prototype.Match(5)");
Assert("Sample Text".Match(/^Sample/) == true, "String.prototype.Match(6)");
