require("../src/index.js");

Test.Ok("Sample Text".Match("ample"), "String.prototype.Match");
Test.Not("Sample Text".Match("^ample"), "String.prototype.Match");
Test.Ok("Sample Text".Match("^Sample"), "String.prototype.Match");
Test.Ok("Sample Text".Match(/ample/), "String.prototype.Match");
Test.Not("Sample Text".Match(/^ample/), "String.prototype.Match");
Test.Ok("Sample Text".Match(/^Sample/), "String.prototype.Match");
