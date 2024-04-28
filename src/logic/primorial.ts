import { gcd, acd } from './gcd.js'
import { RSA129 } from './rsa129'
import { primorial } from './primorial'

// primorial(n) = {n primes}!
// primorial(1) = 2
// primorial(2) = 6
// primorial(3) = 30


const length = 1
const sequence = new Array(length).fill(0n).map((_, i) => primorial(BigInt(i)))


//  Primorial Observations 
//
//  - The primorial is always even
//  - The number explodes very quickly
//  - Upper / Lower bounds?
//
//  - 1st digit "0" repeating
//  - 2nd digit "5" repeating
//  - 3rd digit "2, 7" repeating every 2nd
//  - 4th digit "1, 1, 3, 8" repeating every 4th
//  - 5th digit "1, 8, 8, 4, 1, 3, 8, 9" repeating every 8th
//  - 6th digit "5, 2, 5, 2, 7, 7, 3, 7, 0, 2, 0, 2, 2, 7, 8, 7" repeating every 16th
//  - 7th digit "0, 9, 1, 4, 8, 8, 4, 5, 5, 7, 6, 7, 3, 6, 9, 8, 0, 4, 1, 9, 8, 3, 4, 0, 5, 2, 6, 2, 3, 1, 9, 3" repeating every 32th

console.log(display(7n).join(", "))

function display(percision: bigint) {
  const modulu = 10n ** percision
  const divisor = modulu / 10n
  return sequence.map(n => n % modulu).map(n => n / divisor)
}