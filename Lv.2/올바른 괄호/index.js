function solution(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(')
    } else {
      // 닫는 괄호를 만났을 때, 스택이 비어있으면 잘못된 괄호
      if (stack.length === 0) {
        return false
      }
      stack.pop()
    }
  }
  // stack 배열에 아무것도 없으면(짝을 다 이룸) true 반환
  if (stack.length === 0) return true
  else return false
}
