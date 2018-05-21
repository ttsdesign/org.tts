require("../src/index.js");

Test.IsEqual([1, 2, 3, 4].RemoveElement(2), [1,3,4], "Array.prototype.RemoveElement");
Test.IsEqual([1, 2, 3, 4].RemoveElement(3), [1,2,4], "Array.prototype.RemoveElement");
