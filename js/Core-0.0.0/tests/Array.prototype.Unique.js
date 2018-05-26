require("../src/index.js");

Test.IsEqual([1,2,2,3,3,4].Unique(), [1,2,3,4], "Array.prototype.Unique");
Test.IsEqual([].Unique(), [], "Array.prototype.Unique");

