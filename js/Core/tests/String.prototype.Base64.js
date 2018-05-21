var b = "TestString".Base64.Encode();
Assert(b.Base64.Decode() == "TestString", "String.prototype.Base64");
