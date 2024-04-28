import { gcd } from './gcd.js'

const RSA129 = 114381625757888867669235779976146612010218296721242362562561842935706935245733897830597123563958705058989075147599290026879543541n

function* PI(target: bigint) {
  let product = 2n
  let current = 3n
  while (current < target) {
    if (gcd(current, product) === 1n) {
      console.log(current)
      product *= current
    }
    current += 2n
  }
}

const prime = PI(RSA129)
prime.next()