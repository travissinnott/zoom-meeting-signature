'use strict';

const expect = require('chai').expect;
const signature = require('./signature.js');

const API_KEY = 'af20jlslmmc920aj9';
const API_SECRET = 'qj038jskjzf9f2890jfslifj0soo20cmnsa';

describe('Zoom Meeting Signature Generator', function(){


	it('matches the correct string format', function() {
		const meetingNumber = 12345678;
		const time = new Date().getTime();
		let sig = signature.generate(12345678, API_KEY, API_SECRET, signature.roles.PARTICIPANT, time);

		expect(sig).to.be.a('string');

		let parts = signature.parse(sig);
		
		expect(parts).to.be.an('array').lengthOf(5);
		expect(parts[0]).to.equal(API_KEY);
		expect(parts[1]).to.equal(''+meetingNumber);
		expect(parts[2]).to.equal(''+time);
		expect(parts[3]).to.equal(''+signature.roles.PARTICIPANT);
		expect(parts[4]).to.be.a('string');
	});

})
