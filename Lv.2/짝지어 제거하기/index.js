function solution(s) {
  let stack = []

  for (let i = 0; i < s.length; i++) {
    // stack의 마지막 값이 현재 s문자열과 같을 때 pop 하기
    if (stack[stack.length - 1] === s[i]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return stack.length === 0 ? 1 : 0
}
