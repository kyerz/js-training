'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 first characters
 * Create the function `cutLast` that takes a string and remove the 2 last charcters
 * Create the function `cutFirstLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

const cutFirst = str => str.slice(2)
const cutLast = str => str.slice(0, str.length - 2)
const cutFirstLast = str => {
  let result = cutFirst(str)
  return cutLast(result)
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.deepStrictEqual(cutFirst("justine"), "stine")
assert.strictEqual(typeof cutLast, 'function')
assert.deepStrictEqual(cutLast("justine"), "justi")
assert.strictEqual(typeof cutFirstLast, 'function')
assert.deepStrictEqual(cutFirstLast("justine"), "sti")
// End of tests */
