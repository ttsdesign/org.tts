Assert(Array.Union([1,2,3,4], [3,4,5,6]).length === 6, "Array.Union(1)");
Assert(Array.Union([], [3,4,5,6]).length === 4, "Array.Union(2)");
Assert(Array.Union([], []).length === 0, "Array.Union(3)");
