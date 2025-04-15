function solution(n) {
  const MOD = 1234567
  let a = 1 // f(1)
  let b = 2 // f(2)

  if (n === 1) return a
  if (n === 2) return b

  for (let i = 3; i <= n; i++) {
    const next = (a + b) % MOD
    a = b
    b = next
  }

  return b
}
