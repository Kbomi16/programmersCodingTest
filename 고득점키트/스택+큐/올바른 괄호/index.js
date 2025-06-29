function solution(s) {
  const result = []

  for (let char of s) {
    if (char === '(') {
      result.push(char)
    } else {
      if (result.length === 0) return false // 짝이 안 맞음
      result.pop()
    }
  }

  return result.length === 0 // 모두 짝지어진 경우만 true
}
