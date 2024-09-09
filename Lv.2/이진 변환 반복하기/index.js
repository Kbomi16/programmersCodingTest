function solution(s) {
  let count = 0 // 변환 횟수
  let removedZero = 0 // 0 제거 개수

  while (s !== '1') {
    // 현재 문자열에서 제거된 0의 개수
    currentRemovedZero = s
      .split('')
      .filter((char) => char === '0')
      .join('').length
    removedZero += currentRemovedZero
    s = s
      .split('')
      .filter((char) => char !== '0')
      .join('')
    s = s.length.toString(2)
    count++
  }
  return [count, removedZero]
}
