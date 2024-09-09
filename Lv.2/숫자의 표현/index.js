function solution(n) {
  let count = 0 // 연속된 자연수들로 n을 표현하는 방법의 수
  let k = 1 // 연속된 자연수의 개수

  while ((k * (k - 1)) / 2 < n) {
    if ((n - (k * (k - 1)) / 2) % k === 0) {
      count++
    }
    k++
  }
  return count
}
