require("../src/index.js");

Test.Ok(IsEqual(5, 5), "IsEqual");
Test.Ok(IsEqual("Sample Text", "Sample Text"), "IsEqual");
Test.Ok(IsEqual("Sample Text", Clone("Sample Text")), "IsEqual");
Test.Ok(IsEqual({a:1,b:2}, {a:1,b:2}), "IsEqual");
Test.Ok(IsEqual({a:1,b:2}, {b:2,a:1}), "IsEqual");

