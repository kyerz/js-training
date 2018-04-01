'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = str => {
  let word = str.toLowerCase().split(' ')
    word = word.map(item => {
      item.charAt(0).toUpperCase() + item.substring(1)
    })
    return word.join(' ')
  }

/*
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
// End of tests */
