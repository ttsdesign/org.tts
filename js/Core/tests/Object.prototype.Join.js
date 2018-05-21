Assert(({"one": 1, 2: "Two"}).Join() === '"2":"Two", "one":1', "Object.prototype.Join(1)");
Assert(({"one": 1, 2: "Two"}).Join(";") === '"2":"Two";"one":1', "Object.prototype.Join(2)");
Assert(({"one": 1, 2: "Two"}).Join("&", "=") === '"2"="Two"&"one"=1', "Object.prototype.Join(3)");
