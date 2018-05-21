Assert("".IsEmpty() == true, "String.prototype.IsEmpty(1)");
Assert("Text String".IsEmpty() == false, "String.prototype.IsEmpty(2)");
Assert(String.prototype.IsEmpty.call(undefined) == false, "String.prototype.IsEmpty(3)");
