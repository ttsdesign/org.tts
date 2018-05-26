require("../src/index.js");

Test.Ok("Sample Text".endsWith("ext"), "String.protoype.endsWith");
Test.Ok("Sample Text".EndsWith("ext"), "String.protoype.EndsWith");
Test.Ok(!"Sample Text".endsWith("ax"), "String.protoype.endsWith");
Test.Ok(!"Sample Text".EndsWith("ax"), "String.protoype.EndsWith");
