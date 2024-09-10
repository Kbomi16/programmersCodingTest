function solution(people, limit) {
  // 오름차순
  people.sort((a, b) => a - b)

  let light = 0 // 가장 가벼운 사람의 포인터
  let heavy = people.length - 1 // 가장 무거운 사람의 포인터
  let boat = 0

  while (light <= heavy) {
    if (people[light] + people[heavy] <= limit) {
      light++
      heavy--
      boat++
    } else {
      heavy--
      boat++
    }
  }
  return boat
}
