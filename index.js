(function(factory) {

	if (typeof exports === "object")
		module.exports = factory(require('events')， require('epic.util'))
	else if (typeof define === "function" && define.amd)
		define(['events', 'epic.util'], factory)
	else {
		try {
			window.Visitor = factory(EventEmitter, util);
		}
		catch (e) {
			scope = self.Visitor = factory();
		}
	}
})(function(EventEmitter, util) {

	// types:
	/*
	undefined
	null
	boolean
	number
	string
	array
	function
	date
	error
	regexp
	symbol
	*/

	class Visitor extends EventEmitter {

		constructor () {
			super();

			this.on('error', this.error);
		}

		visitor (target, key, index, path) {
			let type = util.object.typeof(target);
			this.emit(type, target, key, index, path);
			this[type] && this[type](target, key, index, path);
		}

		object (target, key, index, path) {
			Object.keys(target).forEach((name, index) => this.visitor(target[name], name, index, (path ? path + '.' : '') + name));
			this.emit('object', target, key, index, path);
		};

		array (target, key, index, path) {
			target.forEach((val, index) => this.visitor(val, index, index, (path || '') +'['+ index +']'));
			this.emit('array', target, key, index, path);
		};

		error () {

		}

	};


	return Visitor;
});
