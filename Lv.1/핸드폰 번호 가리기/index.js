function solution(phone_number) {
  const arr = phone_number.split('').map(Number)

  for (let i = 0; i < arr.length - 4; i++) {
    arr[i] = '*'
  }
  return arr.join('')
}

// 리팩토링
function solution(phone_number) {
  const length = phone_number.length
  const visiblePart = phone_number.slice(-4) // 뒤에서 4자리
  const hiddenPart = '*'.repeat(length - 4) // 앞부분을 *로 가리기

  return hiddenPart + visiblePart
}
