/*** Example(Default) ***/
var s = "Sample Text";
var ss = s.Base64.Encode();
console.log(ss);
console.log(ss.Base64.Decode());

/*** Example(Default) ***/
console.log("Hi".Base64.Encode());
console.log("SGk=".Base64.Decode());
