function solution(progresses, speeds) {
  const days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  )

  const result = []
  let maxDay = days[0]
  let count = 1

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      // 현재 작업이 이전 작업 완료일보다 빠르거나 같으면 함께 배포
      count++
    } else {
      // 더 늦게 끝나면 기존 그룹 배포하고 새 그룹 시작
      result.push(count)
      maxDay = days[i]
      count = 1
    }
  }

  // 마지막 그룹 배포 개수 추가
  result.push(count)

  return result
}
