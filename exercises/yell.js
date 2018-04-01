'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */

const yell = str => str.toUpperCase()

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.deepStrictEqual(yell("mais c'est incroyable"), "MAIS C'EST INCROYABLE")
// End of tests */
