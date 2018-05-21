
var builds = [
	"core.js",
	"tests.js"
];

//////////////////////////////////////////////////////////////////////////////////
///// Nothing to Edit Below ////////////////////////////////////////////////////
const { exec } = require('child_process');

Build();

function Build () {
	if (builds.length > 0) {
		var build = builds.shift();
		console.log("Building "+build+"...");
		exec("node build/"+build, (error, stdout, stderr) => {
			if (error) {
				console.error(`exec error: ${error}`);
				return;
			}
			Build();
		});
	}
}
