require("../src/index.js");

var d = new Date();
Test.IsEqual(d.Span(d-Date.DAY), {days: 1, hours: 24, minutes: 24*60, seconds: 24*60*60}, "Date.Span");
Test.Ok(d.Span(d-Date.DAY*2).Days > 1, "Date.Span");
