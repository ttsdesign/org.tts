require("../src/index.js");

Test.Equal("Test String".Hash(), "bd08ba3c982eaad768602536fb8e1184", "String.prototype.Hash");
Test.Equal(5..toString().Hash(), "e4da3b7fbbce2345d7772b0674a318d5", "String.prototype.Hash");
