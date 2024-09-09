function solution(A, B) {
  A.sort((a, b) => a - b) // A 배열을 오름차순으로 정렬
  B.sort((a, b) => b - a) // B 배열을 내림차순으로 정렬

  let answer = 0
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i] // 각 순서의 수를 곱하여 더함
  }

  return answer
}
