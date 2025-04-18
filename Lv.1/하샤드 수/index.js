function solution(x) {
  let array = String(x).split('').map(Number)
  let sum = 0

  // 각 자리수 더하기
  array.map((num, index) => {
    sum += num
  })

  return x % sum === 0 ? true : false
}
