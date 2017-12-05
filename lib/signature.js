'use strict'

const crypto = require('crypto');

const REPLACE_MAP = {
	'+': '-',
	'/': '_'
}

const generate = function(meetingNumber, apiKey, apiSecret, role, time=(new Date()).getTime()){
	const hmac = crypto.createHmac('sha256', apiSecret);

	const data = new Buffer([apiKey, meetingNumber, time, role].join()).toString('base64');

	hmac.update(data, 'utf8');

	const sig = [apiKey, meetingNumber, time, role, hmac.digest('base64')].join('.');

	return new Buffer(sig).toString('base64').replace(/[+/]/g, (match, offset, string) => {
		return REPLACE_MAP[match];
	}).replace(/=+$/, '');
}

const parse = function(signature){
	const sig = new Buffer(signature.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')
	return sig.split('.')
}

const roles = {
	PARTICIPANT: 0,
	HOST: 1
}

module.exports = {
	generate, 
	parse,
	roles
};