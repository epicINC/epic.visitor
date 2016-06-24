'use strict';

let Visitor = require('../index');




function test(type, data, eql, done)
{




		let tester = new Visitor();
		tester.once('object', (target, key, index, path) => 
		{
			console.log(target === data.h);
			done();

		});
		tester.visitor(data);

		return;
		/*
		let tester = new Visitor();
		tester.once(type, (target, key, index, path) => 
		{
			console.log(message);

			if (type !== 'undefined' && type !== 'null' && type != 'error')
				target.should.eql(eql);
			else if (target !== eql)
				throw new Error('undefined or null');

			done();
		});
		tester.visitor(data);
		*/
}

//let data = {a:undefined, b:[null], c:false, d:1, e:'test', f:() => {}, g: new Date(), h:new Error('test'), i:/test/, j: Symbol()};
let data = {a:undefined, b:[null], c:false, d:1, e:'test', f:() => {}, g: new Date(), h: new Error('test')};



		let tester = new Visitor();
		tester.once('object', (target, key, index, path) => 
		{
			console.log(target === data.h);
		});
		tester.visitor(data);

return;

describe('visitor', () =>
{





	it('object', done => test('object', data, data, done));
	return;
	it('array', done => test('array', data, data.b, done));
	it('undefined', done => test('undefined', data, data.a, done));
	//it('null', done => test('null', data, data.b[0], done));
	//it('boolean', done => test('boolean', data, data.c, done));
	//it('string', done => test('string', data, data.e, done));
	//it('function', done => test('function', data, data.f, done));
	//it('date', done => test('date', data, data.g, done));
	//it('error', done => test('error', data, data.h, done));
	//it('regexp', done => test('regexp', data, data.i, done));
	//it('symbol', done => test('symbol', data, data.j, done));



});