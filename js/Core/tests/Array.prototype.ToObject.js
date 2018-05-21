var o = ["one",2,"THREE",4, 5, "Five"].ToObject();
Assert(Type(o) === "Object", "Array.prototype.ToObject(1)");
Assert(o.THREE === 4, "Array.prototype.ToObject(2)");
Assert(o["5"] === "Five", "Array.prototype.ToObject(3)");
