var a = [5, 2, 1, 3, 4];
a.RemoveIndex(2);
Assert(a.length === 4, "Array.prototype.RemoveIndex(1)");
Assert(a[3] === 4, "Array.prototype.RemoveIndex(2)");
a.RemoveIndex(0);
Assert(a.length === 3, "Array.prototype.RemoveIndex(3)");
Assert(a[0] === 2, "Array.prototype.RemoveIndex(4)");
