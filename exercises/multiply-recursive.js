'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops, do it using recursion
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :     -4   5     4  -5             4   -5       -5   -5     0   5

let total = 0

const multiply = (nb1, nb2) => {

  if( nb1 < 0) {
    nb1 = -nb1
    nb2 = -nb2
    return multiply(nb1, nb2)
  }
  else if(nb1 > 0) {
    total += nb2
    nb1--
    return multiply(nb1, nb2)
  }
  else {
    const result = total
    total = 0
    return result
  }
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
//End of tests */
