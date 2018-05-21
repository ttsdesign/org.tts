var a = [1, 2, 3, 4];
a.RemoveElement(2);
Assert(a.length === 3, "Array.prototype.RemoveElement(1)");
a.RemoveElement(5);
Assert(a.length === 3, "Array.prototype.RemoveElement(2)");
