



export function nPrimeCounter(n: number) {
  let counters = Array(n).fill(0)
  let currentNumber = 2
  let index = 0

  const output = Array(n).fill(0)
  const lastIndex = n - 1

  while (!output[lastIndex]) {
    const { isPrime, nextCounter } = isPrimeByCounter(currentNumber, counters)
    if (isPrime) {
      // console.log(`found (${index} / ${n})`)
      output[index++] = currentNumber
    }
    counters = nextCounter
    currentNumber += 1
  }

  return output
}




export function isPrimeByCounter(n: number, counters: number[]): { isPrime: boolean, nextCounter: number[] } {

  let isPrime = true

  // add 1 to each counter in the array, if a counter is equal to its index
  // then the number is not prime (return 0 to reset that counter to 0)
  const nextCounter = counters.map((counter, index) => {
    if (index <= 1) return 0
    if (index >= n) return 0

    const nextCount = counter + 1

    if (nextCount === n) {
      return 0
    }

    if (nextCount === index) {
      isPrime = false
      return 0
    }

    return nextCount
  })

  return { isPrime, nextCounter }
}
