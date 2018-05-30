require("../src/index.js");

var d = new Date();
Test.IsEqual(d.Span(d-Date.DAY), {Days: 1, Hours: 24, Minutes: 24*60, Seconds: 24*60*60, Value: 24*60*60*1000}, "Date.Span");
Test.Ok(d.Span(d-Date.DAY*2).Days > 1, "Date.Span");
