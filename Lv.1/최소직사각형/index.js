function solution(sizes) {
  let widths = []
  let heights = []

  for (let i = 0; i < sizes.length; i++) {
    // w가 h보다 무조건 크게 만들기
    if (sizes[i][0] < sizes[i][1]) {
      sizes[i].reverse()
    }
  }

  for (let j = 0; j < sizes.length; j++) {
    widths.push(sizes[j][0])
    heights.push(sizes[j][1])
  }
  return Math.max(...widths) * Math.max(...heights)
}
