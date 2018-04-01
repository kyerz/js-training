'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */

 const keepFirst = str => str.slice(0, 2)
 const keepLast = str => str.slice(str.length - 2)
 const keepFirstLast = str => str.slice(2, 4)

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.deepStrictEqual(keepFirst("justine"), "ju")
assert.strictEqual(typeof keepLast, 'function')
assert.deepStrictEqual(keepLast("justine"), "ne")
assert.strictEqual(typeof keepFirstLast, 'function')
assert.deepStrictEqual(keepFirstLast("justine"), "st")
// End of tests */
