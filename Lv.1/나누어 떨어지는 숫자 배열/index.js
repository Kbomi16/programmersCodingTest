function solution(arr, divisor) {
  let result = []

  arr.map((num, index) => {
    if (num % divisor === 0) {
      result.push(num)
    }
  })

  return result.length === 0 ? [-1] : result.sort((a, b) => a - b)
}
