var d = new Date();
Assert(d.Span(d-Date.DAY).Days === 1, "Date.Span(1)");
Assert((new Date(0)).Span(new Date(Date.DAY)).Days === 1, "Date.Span(2)");
Assert((new Date(0)).Span(-1*(new Date(Date.DAY))).Days === 1, "Date.Span(3)");
Assert(d.Span(d-Date.DAY*2).Days > 1, "Date.Span(4)");
