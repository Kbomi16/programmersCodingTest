function solution(numbers) {
  // 1. 숫자들을 문자열로 변환
  const strs = numbers.map(String)

  // 2. 문자열들을 정렬하는데, a+b와 b+a 중 더 큰 쪽이 앞으로 오도록
  strs.sort((a, b) => {
    if (a + b > b + a) return -1 // a+b가 크면 a가 앞으로
    if (a + b < b + a) return 1 // b+a가 크면 b가 앞으로
    return 0 // 같으면 순서 유지
  })

  // 3. 정렬된 문자열들을 이어 붙임
  const answer = strs.join('')

  // 4. 만약 모든 숫자가 0이라면 "0"을 반환
  return answer[0] === '0' ? '0' : answer
}
