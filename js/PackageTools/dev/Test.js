const Fs = require("fs");
const TestBuilder = require("./TestBuilder.js");


let builder = new TestBuilder();
if (!builder.AddFile("dev/Test.Path.js")) {
	console.log(builder.Error)
}
builder.Generate("dev/Tests.js");

