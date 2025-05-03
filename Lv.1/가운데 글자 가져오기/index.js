function solution(s) {
  if (s.length % 2 === 0) {
    return s.slice(s.length / 2 - 1, s.length / 2 + 1)
  } else {
    return s[Math.floor(s.length / 2)]
  }
}

// 리팩토링
function solution(s) {
  const mid = Math.floor(s.length / 2)
  return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[mid]
}
