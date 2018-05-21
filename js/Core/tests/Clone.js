var s = "Sample Text";
var ss = Clone(s);
Assert(s === ss, "Clone(1)");
s+="s";
Assert(s !== ss, "Clone(2)");

Assert(Clone({a:1,b:2}).b === 2, "Clone(3)");
Assert(Clone({a:1,b:{a:1, b:{c:3}}}).b.b.c === 3, "Clone(4)");

