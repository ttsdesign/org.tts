require("../src/index.js");

Test.Equal("http://*/*".ToMatch(), "(?:^http://[^/]+/.*$)", "String.prototype.ToMatch");
Test.Equal("https://*.google.com/foo*bar".ToMatch(), "(?:^https://(?:[^/]+\\.)?google\\.com/foo.*bar$)", "String.prototype.ToMatch");
