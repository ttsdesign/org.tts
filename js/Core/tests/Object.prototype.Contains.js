require("../src/index.js");

Test.Ok("Sample Text".Contains("ample"), "Object.prototype.Contains");
Test.Not("Sample Text".Contains("Smple"), "Object.prototype.Contains");
Test.Ok(["Sample", "Text"].Contains("Sample"), "Object.prototype.Contains");
Test.Not(["Sample", "Text"].Contains("ample"), "Object.prototype.Contains");
Test.Ok({one: "Sample", two: "Text"}.Contains("one"), "Object.prototype.Contains");
Test.Not({one: "Sample", two: "Text"}.Contains("three"), "Object.prototype.Contains");
