function solution(n) {
  const array = String(n).split('').map(Number)
  var result = 0

  for (let i = 0; i < array.length; i++) {
    result += array[i]
  }
  return result
}

// 리팩토링
function solution(n) {
  const digits = String(n).split('').map(Number)
  let sum = 0

  for (const digit of digits) {
    sum += digit
  }

  return sum
}
