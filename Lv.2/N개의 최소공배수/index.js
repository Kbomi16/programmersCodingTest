// 최대 공약수
// 두 수 a, b의 최대공약수는 b가 0이 될 때까지 a % b를 반복해서 구해나가는 방식
const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b)
}

// 최소 공배수 = 숫자 곱/최대공약수
const lcm = (a, b) => {
  return (a * b) / gcd(a, b)
}

function solution(arr) {
  return arr.reduce((acc, cur) => lcm(acc, cur))
}
