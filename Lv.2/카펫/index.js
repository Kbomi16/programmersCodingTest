function solution(brown, yellow) {
  let total = brown + yellow

  // 최소 높이 3
  for (let height = 3; height < total; height++) {
    // total이 height로 나누어 떨어지면, width를 구할 수 있다.
    if (total % height === 0) {
      let width = total / height

      // 노란색 격자 수와 일치하는지 확인
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height]
      }
    }
  }
}
