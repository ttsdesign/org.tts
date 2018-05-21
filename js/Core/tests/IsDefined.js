var d = "Defined";
Assert(IsDefined(d) === true, "IsDefined(1)");
Assert(IsDefined(5) === true, "IsDefined(2)");
var nd;
Assert(IsDefined(nd) === false, "IsDefined(3)");
Assert(IsDefined(undefined) === false, "IsDefined(4)");
Assert(IsDefined(null) === false, "IsDefined(5)");

