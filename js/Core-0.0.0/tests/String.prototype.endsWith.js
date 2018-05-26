require("../src/index.js");

Test.Equal("Sample Text".startsWith("Sam"), "String.protoype.startsWith");
Test.Equal("Sample Text".StartsWith("Sam"), "String.protoype.StartsWith");
Test.Equal(!"Sample Text".startsWith("Sb"), "String.protoype.startsWith");
Test.Equal(!"Sample Text".StartsWith("Sb"), "String.protoype.StartsWith");

