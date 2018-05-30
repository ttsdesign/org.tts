require("../src/index.js");

var arr = Array.from((function () {return arguments})("one", 2, function Three () {}));
Test.Equal(Type(arr), "Array", "Array.from");
Test.Equal(arr.length, 3, "Array.from");

var arr = Array.from({a:"one", b: 2, CC: function Three () {}});
Test.Equal(Type(arr), "Array", "Array.from");
Test.Equal(arr.length, 3, "Array.from");

var arr = Array.from(["one", 2, function Three () {}]);
Test.Equal(Type(arr), "Array", "Array.from");
Test.Equal(arr.length, 3, "Array.from");

var arr = Array.from("one", 2, function Three () {});
Test.Equal(Type(arr), "Array", "Array.from");
Test.Equal(arr.length, 3, "Array.from");
