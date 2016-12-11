var packager = require('electron-packager');
var path = require('path');
var os = require('os');

options = {
	"dir": ".",
	"out": path.resolve(os.homedir(), "firmware_flasher"),
	"platform": "win32,darwin",
	"arch": "ia32",
	"overwrite": true,
	"asar": {
		"unpackDir": "dfu"
	},
	"ignore": ["wix", ".*md", ".idea"]
}

packager(options, function done_callback (err, appPaths) {
	if(err) {
		console.log(err);		
	}
});