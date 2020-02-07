#!/usr/bin/env node

var HID = require('../');

// Linux: choose driverType
// default is 'hidraw', can also be 'libusb'
if( process.argv[2] ) {
    var type = process.argv[2];
    console.log("driverType:",type);
    HID.setDriverType( type );
}

console.log('devices:', HID.devices());

var devices = HID.devices()
for (var i = 0; i < devices.length; i++) {
	var d = devices[i];
	console.log(d.path, d.path.length);
}
