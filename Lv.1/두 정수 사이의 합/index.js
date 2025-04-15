function solution(a, b) {
  let sum = 0
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum = sum + i
    }
  } else {
    for (let i = b; i <= a; i++) {
      sum = sum + i
    }
  }
  return sum
}

// 리팩토링
function solution(a, b) {
  let sum = 0
  const start = Math.min(a, b)
  const end = Math.max(a, b)

  for (let i = start; i <= end; i++) {
    sum += i
  }

  return sum
}
