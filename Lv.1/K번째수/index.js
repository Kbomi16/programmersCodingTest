function solution(array, commands) {
  let answer = []
  let result = []
  for (let i = 0; i < commands.length; i++) {
    // 1. 자르기
    result = array.slice(commands[i][0] - 1, commands[i][1])
    // 2. 정렬하기
    result = result.sort((a, b) => a - b)
    // 3. 숫자 뽑기

    answer.push(result[commands[i][2] - 1])
  }
  return answer
}
