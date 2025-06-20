function solution(s) {
  let result = ''
  let idx = 0 // 단어 인덱스 번호

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      result += ' '
      idx = 0
    } else {
      result += idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase()
      idx++
    }
  }
  return result
}
