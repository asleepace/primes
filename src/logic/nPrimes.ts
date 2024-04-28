import { gcd } from './gcd.js'

/**
 * Calculates the first n prime numbers using the prime product method.
 * The argument n must be greater than or equal to 2.
 */
export function* nPrimes(n: bigint) {
  yield 2n
  yield 3n
  let numberToFind = (n - 2n)
  let primeProduct = 6n
  let currentIndex = 3n
  while (numberToFind > 0n) {
    if (gcd(primeProduct, currentIndex) === 1n) {
      primeProduct *= currentIndex
      numberToFind -= 1n
      yield currentIndex
    }
    // skip even numbers
    currentIndex += 2n
  }
}
