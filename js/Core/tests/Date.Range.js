var r = new Date.Range(0);
Assert(r.Beg.valueOf() === r.End.valueOf(), "Date.Range(1)");
Assert(r.Within(new Date()) === false, "Date.Range(2)");
r = new Date.Range(1526547053735, 1526287985966);
Assert(r.Within(1526547053735-Date.DAY) === true, "Date.Range(3)");
Assert(r.Within(new Date()) === false, "Date.Range(4)");

