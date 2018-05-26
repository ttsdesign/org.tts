require("../src/index.js");

Test.Equal("TestString".Base64.Encode().Base64.Decode(), "TestString", "String.prototype.Base64");
