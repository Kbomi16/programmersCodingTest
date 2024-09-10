function solution(d, budget) {
  let count = 0

  // 배열 오름차순
  d.sort((a, b) => a - b)
  for (let i = 0; i < d.length; i++) {
    if (d[i] <= budget) {
      budget -= d[i]
      count++
    }
  }
  return count
}
