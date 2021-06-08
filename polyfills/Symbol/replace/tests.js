/* eslint-env mocha, browser */
/* global proclaim, Symbol */

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
	for (var _ in obj) { return false; }
		return obj.x === obj;
	} catch (e) { // this is IE 8.
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

it('has the well known symbol replace as static properties on Symbol', function() {
	proclaim.notEqual(Symbol.replace, undefined);

	if (supportsDescriptors) {
		var replace = Symbol.replace;
		Symbol.replace = "nope";
		proclaim.equal(Symbol.replace, replace);
	}
});
