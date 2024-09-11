function solution(arr) {
  // 새로운 배열 생성, 중복 제거를 위해 filter 함수 사용
  var answer = arr.filter((value, index) => {
    // 현재 요소와 다음 요소를 비교하여 중복 여부 확인
    // 마지막 요소는 다음 요소가 없으므로 항상 true 반환
    return value !== arr[index + 1]
  })

  return answer
}
