function solution(k, tangerine) {
  const obj = {}

  for (let size of tangerine) {
    obj[size] = (obj[size] || 0) + 1
  }
  const counts = Object.values(obj).sort((a, b) => b - a)

  let sum = 0
  let result = 0

  for (let c of counts) {
    sum += c
    result++
    if (sum >= k) break
  }
  return result
}
