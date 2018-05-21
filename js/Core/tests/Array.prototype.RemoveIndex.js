require("../src/index.js");

Test.Equal([5, 2, 1, 3, 4].RemoveIndex(1), [5,1,3,4], "Array.prototype.RemoveIndex");
Test.Equal([5, 2, 1, 3, 4].RemoveIndex(0), [2,1,3,4], "Array.prototype.RemoveIndex");
