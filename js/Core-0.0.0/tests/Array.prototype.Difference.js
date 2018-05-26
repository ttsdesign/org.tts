require("../src/index.js");

Test.IsEqual([1,2,3,4].Difference([3,4,5,6]), [5,6], "Array.Difference");
