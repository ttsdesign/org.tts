var arr = Array.from((function () {return arguments})("one", 2, function Three () {}));
Assert(Type(arr) === "Array", "Array.from(1)");
Assert(arr.length === 3, "Array.from(2)");

var arr = Array.from({a:"one", b: 2, CC: function Three () {}});
Assert(Type(arr) === "Array", "Array.from(3)");
Assert(arr.length === 3, "Array.from(4)");

var arr = Array.from(["one", 2, function Three () {}]);
Assert(Type(arr) === "Array", "Array.from(5)");
Assert(arr.length === 3, "Array.from(6)");

var arr = Array.from("one", 2, function Three () {});
Assert(Type(arr) === "Array", "Array.from(7)");
Assert(arr.length === 3, "Array.from(8)");
