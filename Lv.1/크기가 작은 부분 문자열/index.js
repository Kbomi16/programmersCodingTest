function solution(t, p) {
  let count = 0

  for (let i = 0; i <= t.length - p.length; i++) {
    let result = t.slice(i, i + p.length)
    if (Number(result) <= Number(p)) {
      count++
    }
  }

  return count
}
