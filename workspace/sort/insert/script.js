const container = document.getElementById('container')

const arr = [5, 3, 8, 4, 2]
const n = arr.length

let tempArr = [...arr]
const outerSteps = []

for (let i = 1; i < n; i++) {
  const innerSteps = []

  let key = tempArr[i]
  let j = i - 1

  // 비교 시작 직전 상태 (key 위치 current)
  innerSteps.push({
    arr: [...tempArr],
    current: i,
    compare: j,
    swapped: false,
    fixed: [...Array(i).keys()],
  })

  while (j >= 0 && tempArr[j] > key) {
    // 한 칸씩 오른쪽으로 밀기 - 실제 배열 상태 업데이트
    tempArr[j + 1] = tempArr[j]

    // 이동 과정 기록 (이동 대상은 빨강)
    innerSteps.push({
      arr: [...tempArr],
      current: j,
      compare: j + 1,
      swapped: true,
      fixed: [...Array(i).keys()],
    })

    j--
  }

  // key 삽입
  tempArr[j + 1] = key

  // 삽입 완료 후 상태 기록 (key가 들어간 위치 current)
  innerSteps.push({
    arr: [...tempArr],
    current: j + 1,
    compare: -1,
    swapped: false,
    fixed: [...Array(i + 1).keys()],
  })

  outerSteps.push({ round: i, steps: innerSteps })
}

// 기존 회전 단계 렌더링
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

      // 확정된 구간 노랑 배경
      if (step.fixed.includes(i)) td.classList.add('fixed')

      // 현재 key 위치에 화살표 표시
      if (i === step.current) td.classList.add('current')

      // 비교 대상 및 이동 대상 빨강 배경
      if (step.swapped && (i === step.compare || i === step.current))
        td.classList.add('min')

      tr.appendChild(td)
    })

    tbody.appendChild(tr)
  })

  table.appendChild(tbody)
  outerDiv.appendChild(table)
  container.appendChild(outerDiv)
})

// 맨 아래에 4회전 완료 상태 한 줄 추가
const finalDiv = document.createElement('div')
finalDiv.className = 'step'

const finalTitle = document.createElement('h3')
finalTitle.textContent = '4회전'
finalDiv.appendChild(finalTitle)

const finalTable = document.createElement('table')
const finalTbody = document.createElement('tbody')
const finalTr = document.createElement('tr')

tempArr.forEach((v, i) => {
  const td = document.createElement('td')
  td.textContent = v
  td.classList.add('fixed') // 모두 확정 표시
  finalTr.appendChild(td)
})

finalTbody.appendChild(finalTr)
finalTable.appendChild(finalTbody)
finalDiv.appendChild(finalTable)

container.appendChild(finalDiv)
