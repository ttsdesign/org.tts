require("../src/index.js");

Test.IsEqual(Array.Union([1,2,3,4], [3,4,5,6]), [1,2,3,4,5,6], "Array.Union");
Test.IsEqual(Array.Union([], [3,4,5,6]), [3,4,5,6], "Array.Union");
Test.IsEqual(Array.Union([], []), [], "Array.Union");
