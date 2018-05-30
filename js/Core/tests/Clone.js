require("../src/index.js");

Test.IsEqual("Sample Text", Clone("Sample Text"), "Clone");
Test.IsEqual(Clone({a:1,b:2}), {a:1,b:2}, "Clone");
