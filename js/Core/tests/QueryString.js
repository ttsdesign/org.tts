require("../src/index.js");

Test.Equal(QueryString.Encode({one:1, "2":"TWO"}), "2=TWO&one=1", "QueryString.Encode");
Test.Equal(QS.Encode({one:1, "2":"TWO"}, ";", ":"), "2:TWO;one:1", "QS.Encode");
Test.Equal(QS.Stringify(1, "&", "=", "data"), "data=1", "QS.Stringify");
Test.Equal(QueryString.Stringify({one:1, "2":"TWO"}), "2=TWO&one=1", "QueryString.Stringify");


Test.Equal(Type(QueryString.Decode("2=TWO&one=1")), "Object", "QueryString.Decode");
Test.Equal(QS.Parse("2=TWO&one=1").one, "1", "QS.Parse");
Test.Equal(Type(QueryString.Decode("2:TWO;one=1"), ";", ":"), "Object", "QueryString.Decode");
Test.Equal(QS.Parse("2:TWO;one:1", ";", ":").one, "1", "QS.Parse");

Test.Equal(QS.Parse("c=1&c=2").c.length, 2, "QS.Parse");
Test.Equal(Object.keys(QueryString.Decode("c=1&c=2&d=d", "&", "=", {maxKeys:1})).length, 1, "QueryString.Decode");
