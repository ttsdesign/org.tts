require("../src/index.js");

Test.Equal("Sample Text".Match("ample"), "String.prototype.Match");
Test.Equal(!"Sample Text".Match("^ample"), "String.prototype.Match");
Test.Equal("Sample Text".Match("^Sample"), "String.prototype.Match");
Test.Equal("Sample Text".Match(/ample/), "String.prototype.Match");
Test.Equal(!"Sample Text".Match(/^ample/), "String.prototype.Match");
Test.Equal("Sample Text".Match(/^Sample/), "String.prototype.Match");
