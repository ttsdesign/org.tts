var examples = new Example(Path.File(__filename));
examples.Example = `var s = "Sample Text";
var ss = s.Base64.Encode();
console.log(ss);
console.log(ss.Base64.Decode());
`;
examples.Example = 'console.log("Hi".Base64.Encode());'
examples.Example = 'console.log("SGk=".Base64.Decode());'


module.exports = examples;
