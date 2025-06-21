const container = document.getElementById('container')

const arr = [5, 3, 8, 4, 2]
const n = arr.length

let tempArr = [...arr]
const outerSteps = []

for (let i = 0; i < n - 1; i++) {
  const innerSteps = []

  for (let j = 0; j < n - 1 - i; j++) {
    // 비교 전 상태
    innerSteps.push({
      arr: [...tempArr],
      current: j,
      next: j + 1,
      swapped: false,
      fixed: [...Array(i).keys()].map((x) => n - 1 - x),
    })

    // 교환 발생하면 바로 다음 상태 저장
    if (tempArr[j] > tempArr[j + 1]) {
      ;[tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]]
      innerSteps.push({
        arr: [...tempArr],
        current: j,
        next: j + 1,
        swapped: true,
        fixed: [...Array(i).keys()].map((x) => n - 1 - x),
      })
    }
  }

  outerSteps.push({ round: i + 1, steps: innerSteps })
}

// 마지막 완전 확정 상태 추가
outerSteps.push({
  round: n - 1,
  steps: [
    {
      arr: [...tempArr],
      current: -1,
      next: -1,
      swapped: false,
      fixed: [...Array(n).keys()],
      final: true,
    },
  ],
})

// 화면에 렌더링
outerSteps.forEach(({ round, steps }) => {
  const outerDiv = document.createElement('div')
  outerDiv.className = 'step'

  const title = document.createElement('h3')
  title.textContent = `${round}회전`
  outerDiv.appendChild(title)

  const table = document.createElement('table')
  const tbody = document.createElement('tbody')

  steps.forEach((step) => {
    const tr = document.createElement('tr')

    step.arr.forEach((v, i) => {
      const td = document.createElement('td')
      td.textContent = v

      if (step.fixed.includes(i)) td.classList.add('fixed')

      if (i === step.current || i === step.next) td.classList.add('current')

      if (step.swapped && (i === step.current || i === step.next))
        td.classList.add('min')

      tr.appendChild(td)
    })

    tbody.appendChild(tr)
  })

  table.appendChild(tbody)
  outerDiv.appendChild(table)
  container.appendChild(outerDiv)
})
