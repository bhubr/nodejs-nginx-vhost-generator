const Handlebars = require('handlebars');
const fs = require('fs');
const nginxTemplate = (fs.readFileSync(__dirname + '/nginx.hbs.conf').toString());
const template = Handlebars.compile(nginxTemplate);
const RESTRICTED_IPS_JSON = __dirname + '/restrictedIps.json';
let restrictedIps;

if(process.argv.length < 5) {
	console.log('Usage:\n\nnode app <root> <sub> <port> [authorizedIps]\n');
	process.exit(1);
}
const [x, y, root, sub, port, ips] = process.argv;
if(! ips) {
	restrictedIps = [];
}
else if(['yes', '1'].indexOf(ips) !== -1) {
	if(fs.existsSync(RESTRICTED_IPS_JSON)) {
		restrictedIps = require(RESTRICTED_IPS_JSON);
	}
	else {
		console.error('Restricted IP file not found: ' + RESTRICTED_IPS_JSON + ' ==> ABORTING!');
		process.exit(1);
	}
}
else {
	restrictedIps = ips.split(',');
}
console.log(template({ root, sub, port, restrictedIps }));
