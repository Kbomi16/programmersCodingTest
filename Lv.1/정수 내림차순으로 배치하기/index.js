function solution(n) {
  return Number(
    String(n)
      .split('')
      .map(Number)
      .sort((a, b) => b - a)
      .join('')
  )
}

// 리팩토링: map은 빼도 됨
function solution(n) {
  return Number(
    String(n)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  )
}
