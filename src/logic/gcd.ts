
/**
 * Euclidean algorithm to find the greatest common divisor of two (bigints).
 */
export function gcd(a: bigint, b: bigint): bigint {
  return b === 0n ? a : gcd(b, a % b);
}
