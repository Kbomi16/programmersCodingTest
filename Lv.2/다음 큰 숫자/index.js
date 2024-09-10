function solution(n) {
  let result = n + 1 // n의 다음 큰 숫자
  let nLength = n
    .toString(2)
    .split('')
    .filter((char) => char === '1')
    .join('').length // n의 1의 개수

  while (result > n) {
    let resultLength = result
      .toString(2)
      .split('')
      .filter((char) => char === '1')
      .join('').length
    if (nLength === resultLength) break
    result++
  }
  return result
}
