/**
 * This utility helps get a number form the user.
 */
export function promptInput(): bigint {
  console.clear()
  console.log('[primes] calculate first n prime numbers using the prime product method!')
  do {
    try {
      let input = prompt('[primes] please enter a number n:')
      if (!input) throw new Error('invalid input!')
      const n: bigint = BigInt(parseInt(input))
      return n
    } catch {
      console.log('[primes] invalid input, please try again!')
    }
  } while (true)
}