
Assert(IsEqual(5, 5), "IsEqual(1)");
Assert(IsEqual("Sample Text", "Sample Text"), "IsEqual(2)");
Assert(IsEqual("Sample Text", Clone("Sample Text")), "IsEqual(3)");
Assert(IsEqual({a:1,b:2}, {a:1,b:2}), "IsEqual(4)");
Assert(IsEqual({a:1,b:2}, {b:2,a:1}), "IsEqual(5)");

