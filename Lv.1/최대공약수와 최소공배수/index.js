// 최대공약수(GCD)
const getGCD = (a, b) => {
  return b === 0 ? a : getGCD(b, a % b)
}

// 최소공배수 = 두 수의 곱/최대공약수(LCM)
const getLCM = (a, b) => {
  return (a * b) / getGCD(a, b)
}

function solution(n, m) {
  const answer = []

  const gcd = getGCD(n, m)
  const lcm = getLCM(n, m)

  answer.push(gcd)
  answer.push(lcm)

  return answer
}
