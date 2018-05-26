require("../src/index.js");

var r = new Date.Range(new Date(0), new Date(0));
Test.IsEqual(r.Beg.valueOf(), r.End.valueOf(), "Date.Range");
Test.Ok(!r.Within(new Date()), "Date.Range");
r = new Date.Range(1526547053735, 1526287985966);
Test.Ok(r.Within(1526547053735-Date.DAY), "Date.Range");

