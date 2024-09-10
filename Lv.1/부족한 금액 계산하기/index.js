function solution(price, money, count) {
  var answer = 0
  var nPrice = 0

  for (let i = 1; i <= count; i++) {
    nPrice += price * i
  }
  answer = money < nPrice ? nPrice - money : 0

  return answer
}
