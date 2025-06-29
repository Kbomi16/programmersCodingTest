function solution(prices) {
  const result = []

  for (let i = 0; i < prices.length; i++) {
    let seconds = 0

    // 현재 가격 이후부터 가격이 떨어지는 시점까지 세기
    for (let j = i + 1; j < prices.length; j++) {
      seconds++
      if (prices[j] < prices[i]) {
        break // 가격이 떨어졌으면 멈춤
      }
    }

    result.push(seconds)
  }

  return result
}
