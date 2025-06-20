function solution(citations) {
  citations.sort((a, b) => b - a)

  for (let h = citations.length; h > 0; h--) {
    if (citations[h - 1] >= h) {
      return h
    }
  }

  return 0
}
