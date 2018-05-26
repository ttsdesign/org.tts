require("../src/index.js");

var a = [1,2,3,4];
var b = [3,4,5,6];
Test.Equal(Array.Intersection(a, b).length, 2, "Array.Intersection(1)");
Test.Equal(Array.Intersection(b, b).length, 4, "Array.Intersection(2)");
Test.Equal(Array.Intersection([], []).length, 0, "Array.Intersection(3)");

Test.Equal(a.Intersection(b).length, 2, "Array.prototype.Intersection(1)");
Test.Equal(a.Intersection([]).length, 0, "Array.prototype.Intersection(2)");
Test.Equal(a.Intersection(a).length, 4, "Array.prototype.Intersection(3)");
