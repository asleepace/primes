import { nPrimes } from './src/nPrimes'
import { nPrimeCounter } from './src/nPrimeCounter'
import { promptInput } from './src/promptInput'


const n = promptInput()
console.time()

// Product Primes Method
// console.log(...nPrimes(n))

// Prime Counter Methods
nPrimeCounter(Number(n))

console.timeEnd()