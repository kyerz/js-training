'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 * and wrapped by `*`
 *
 */

 const whisper = str => str.toLowerCase()

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.deepStrictEqual(whisper("JUSTINE"), "justine")
// End of tests */
