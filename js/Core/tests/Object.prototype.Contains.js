Assert("Sample Text".Contains("ample") === true, "Object.prototype.Contains(1)");
Assert("Sample Text".Contains("Smple") === false, "Object.prototype.Contains(2)");
Assert(["Sample", "Text"].Contains("Sample") === true, "Object.prototype.Contains(3)");
Assert(["Sample", "Text"].Contains("ample") === false, "Object.prototype.Contains(4)");
Assert({one: "Sample", two: "Text"}.Contains("one") === true, "Object.prototype.Contains(5)");
Assert({one: "Sample", two: "Text"}.Contains("three") === false, "Object.prototype.Contains(6)");
