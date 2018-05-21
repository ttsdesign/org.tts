Assert([1,2,2,3,3,4].Unique().length === 4, "Array.prototype.Unique(1)");
Assert([].Unique().length === 0, "Array.prototype.Unique(2)");
Assert([1,2,3,4].Unique().length === 4, "Array.prototype.Unique(3)");

