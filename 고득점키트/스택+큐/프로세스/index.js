function solution(priorities, location) {
  // 우선순위와 원래 위치를 함께 저장
  const queue = []
  for (let i = 0; i < priorities.length; i++) {
    queue.push({ priority: priorities[i], index: i })
  }

  let count = 0

  while (queue.length > 0) {
    // 제일 앞 프로세스 꺼내기
    const current = queue.shift()
    let hasHigherPriority = false

    // 큐 안에 더 높은 우선순위가 있는지
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].priority > current.priority) {
        hasHigherPriority = true
        break
      }
    }

    if (hasHigherPriority) {
      queue.push(current) // 다시 뒤로
    } else {
      count++

      if (current.index === location) {
        return count // 내가 찾던 프로세스면 끝
      }
    }
  }
}
