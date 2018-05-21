var a = [1,2,3,4];
var b = [3,4,5,6];
Assert(Array.Intersection(a, b).length === 2, "Array.Intersection(1)");
Assert(Array.Intersection([], b).length === 4, "Array.Intersection(2)");
Assert(Array.Intersection([], []).length === 0, "Array.Intersection(3)");

Assert(a.Intersection(b).length === 2, "Array.prototype.Intersection(1)");
Assert(a.Intersection([]).length === 0, "Array.prototype.Intersection(2)");
Assert([].Intersection(a).length === 4, "Array.prototype.Intersection(3)");
