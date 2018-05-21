Assert(QueryString.Encode({one:1, "2":"TWO"}) === "2=TWO&one=1", "QueryString.Encode(1)");
Assert(QS.Encode({one:1, "2":"TWO"}, ";", ":") === "2:TWO;one:1", "QS.Encode(1)");
Assert(QS.Stringify(1, "&", "=", "data") === "data=1", "QS.Stringify(1)");
Assert(QueryString.Stringify({one:1, "2":"TWO"}) === "2=TWO&one=1", "QueryString.Stringify(1)");


Assert(Type(QueryString.Decode("2=TWO&one=1")) === "Object", "QueryString.Decode(1)");
Assert(QS.Parse("2=TWO&one=1").one === "1", "QS.Parse(1)");
Assert(Type(QueryString.Decode("2:TWO;one=1"), ";", ":") === "Object", "QueryString.Decode(2)");
Assert(QS.Parse("2:TWO;one:1", ";", ":").one === "1", "QS.Parse(2)");

Assert(QS.Parse("c=1&c=2").c.length === 2, "QS.Parse(3)");
Assert(Object.keys(QueryString.Decode("c=1&c=2&d=d", "&", "=", {maxKeys:1})).length === 1, "QueryString.Decode(3)");
