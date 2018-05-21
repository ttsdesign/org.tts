Assert("http://*/*".ToMatch() == "(?:^http://[^/]+/.*$)", "String.prototype.ToMatch(1)");
Assert("https://*.google.com/foo*bar".ToMatch() == "(?:^https://(?:[^/]+\\.)?google\\.com/foo.*bar$)", "String.prototype.ToMatch(2)");
