Assert("Sample Text".endsWith("ext") == true, "String.protoype.endsWith(1)");
Assert("Sample Text".EndsWith("ext") == true, "String.protoype.EndsWith(2)");
Assert("Sample Text".endsWith("ax") == false, "String.protoype.endsWith(3)");
Assert("Sample Text".EndsWith("ax") == false, "String.protoype.EndsWith(4)");

