'use strict';

let util = require('../util');


describe('util', () =>
{
	it('#typeof: all types shouled equal result', () =>
	{

		var types = [
		undefined
		,null
		,this
		,true
		,new Boolean()
		,3
		,new Number(3)
		,"test"
		,new String("test")
		,function(){}
		,[]
		,new Array()
		,new Date()
		,new Error()
		,Symbol()
		,/test/
		];

		let result = ['undefined','null', 'object','boolean','boolean','number','number','string','string','function','array','array','date','error','symbol','regexp'];

		types.map((val) => util.typeof(val)).should.eql(result);
	});
});




