require("../src/index.js");

var a = [1,2,3,4];
var b = [3,4,5,6];
Test.IsEqual(Array.DifferenceBoth(a, b), [1,2,5,6], "Array.DifferenceBoth");
