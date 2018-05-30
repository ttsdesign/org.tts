require("../src/index.js");

Test.Ok("Sample Text".startsWith("Sam"), "String.protoype.startsWith");
Test.Ok("Sample Text".StartsWith("Sam"), "String.protoype.StartsWith");
Test.Not("Sample Text".startsWith("Sb"), "String.protoype.startsWith");
Test.Not("Sample Text".StartsWith("Sb"), "String.protoype.StartsWith");

