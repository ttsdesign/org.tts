Assert("&lt;i&gt;Italics Text&lt;&#x2F;i&gt; &amp;&amp; &lt;b&gt;Bold Test&lt;&#x2F;b&gt;".Unescape() == "<i>Italics Text</i> && <b>Bold Test</b>", "String.prototype.Unescape()");
