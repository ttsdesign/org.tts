require("../src/index.js");

Test.Ok("Sample Text".endsWith("ext"), "String.protoype.endsWith");
Test.Ok("Sample Text".EndsWith("ext"), "String.protoype.EndsWith");
Test.Not("Sample Text".endsWith("ax"), "String.protoype.endsWith");
Test.Not("Sample Text".EndsWith("ax"), "String.protoype.EndsWith");
