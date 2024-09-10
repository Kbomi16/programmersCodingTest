function solution(n) {
  let fib = [0, 1] // F(0)과 F(1)의 초기값을 설정

  for (let i = 2; i <= n; i++) {
    // F(2)부터 F(n)까지 계산
    fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567
  }

  return fib[n]
}
