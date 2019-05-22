const { spawn } = require('child_process');

let controllerPath = 'C:\\RFIDIFControl\\RFIDIFControl.exe';

function runCmd(arg) {
   // let cmd = controllerPath + ' ' + arg;
	let child = spawn(controllerPath, [arg]);

	child.stdout.on('data', (data) => {
	  console.log(`child stdout:\n${data}`);
	});

	child.stderr.on('data', (data) => {
	  console.error(`child stderr:\n${data}`);
	});

	child.on('exit', function (code, signal) {
	  console.log('child process exited with ' +
	              `code ${code} and signal ${signal}`);
	});
}
  
window.rfidControl = function (state) {
	if (state == 'checkin') {
		runCmd('SelectActivate')
	} else {
		runCmd('SelectDeactivate')
	}
}
