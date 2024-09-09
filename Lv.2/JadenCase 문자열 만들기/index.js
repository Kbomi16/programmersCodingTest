function solution(s) {
  var answer = ''
  var arr = []

  //공백을 기준으로 잘라서 배열에 저장
  arr = s.split(' ')

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
  }

  //공백 포함 후 다시 합치기
  answer = arr.join(' ')

  return answer
}
