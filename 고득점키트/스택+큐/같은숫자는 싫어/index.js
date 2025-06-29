function solution(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    // 이전 값과 다르면 push
    if (i === 0 || arr[i] !== arr[i - 1]) {
      result.push(arr[i])
    }
  }

  return result
}
