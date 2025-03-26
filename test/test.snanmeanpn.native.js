/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var Float32Array = require( '@stdlib/array-float32' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var snanmeanpn = tryRequire( resolve( __dirname, './../lib/snanmeanpn.native.js' ) );
var opts = {
	'skip': ( snanmeanpn instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof snanmeanpn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', opts, function test( t ) {
	t.strictEqual( snanmeanpn.length, 3, 'has expected arity' );
	t.end();
});

tape( 'the functions throws an error if provided a first argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			snanmeanpn( value, new Float32Array( 10 ), 1 );
		};
	}
});

tape( 'the functions throws an error if provided a second argument which is not a Float32Array', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			snanmeanpn( 10, value, 1 );
		};
	}
});

tape( 'the functions throws an error if provided a third argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			snanmeanpn( 10, new Float32Array( 10 ), value );
		};
	}
});

tape( 'the function calculates the arithmetic mean of a strided array, ignoring `NaN` values', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ] );

	v = snanmeanpn( x.length, x, 1 );
	t.strictEqual( v, 0.5, 'returns expected value' );

	x = new Float32Array( [ -4.0, NaN ] );

	v = snanmeanpn( x.length, x, 1 );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );

	v = snanmeanpn( x.length, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = snanmeanpn( 0, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = snanmeanpn( -1, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first element', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = snanmeanpn( 1, x, 1 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0,
		NaN   // 4
	]);

	v = snanmeanpn( 5, x, 2 );

	t.strictEqual( v, 1.25, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array([
		1.0,  // 4
		2.0,
		2.0,  // 3
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 1
		2.0,
		NaN   // 0
	]);

	v = snanmeanpn( 5, x, -2 );

	t.strictEqual( v, 1.25, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the first element', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = snanmeanpn( x.length, x, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var x0;
	var x1;
	var v;

	x0 = new Float32Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		6.0,
		NaN   // 4
	]);

	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

	v = snanmeanpn( 5, x1, 2 );
	t.strictEqual( v, 1.25, 'returns expected value' );

	t.end();
});
