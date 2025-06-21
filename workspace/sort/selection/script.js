const steps = [
  { desc: '초기 상태', arr: [64, 25, 12, 22, 11], fixed: [], min: 4 },
  { desc: '1회전 완료', arr: [11, 25, 12, 22, 64], fixed: [0], min: 2 },
  { desc: '2회전 완료', arr: [11, 12, 25, 22, 64], fixed: [0, 1], min: 3 },
  { desc: '3회전 완료', arr: [11, 12, 22, 25, 64], fixed: [0, 1, 2], min: 3 },
  {
    desc: '4회전 완료',
    arr: [11, 12, 22, 25, 64],
    fixed: [0, 1, 2, 3, 4],
    min: -1,
  },
]

const container = document.getElementById('container')

steps.forEach((step) => {
  const stepDiv = document.createElement('div')
  stepDiv.className = 'step'

  const title = document.createElement('h3')
  title.textContent = step.desc
  stepDiv.appendChild(title)

  const table = document.createElement('table')
  const tr = document.createElement('tr')

  step.arr.forEach((v, i) => {
    const td = document.createElement('td')
    td.textContent = v
    if (step.fixed.includes(i)) td.classList.add('fixed')
    else if (i === step.min) td.classList.add('min')
    tr.appendChild(td)
  })

  table.appendChild(tr)
  stepDiv.appendChild(table)
  container.appendChild(stepDiv)
})

const animationArr = [64, 25, 12, 22, 11]
const animationRow = document.getElementById('animationRow')
const fixedIndices = new Set()

function drawAnimationTable(minIndex = -1, currentIndex = -1) {
  animationRow.innerHTML = ''
  animationArr.forEach((val, idx) => {
    const td = document.createElement('td')
    td.textContent = val
    if (fixedIndices.has(idx)) td.classList.add('fixed')
    else if (idx === minIndex) td.classList.add('min')
    if (idx === currentIndex) td.classList.add('current')
    animationRow.appendChild(td)
  })
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function selectionSortAnimation() {
  const n = animationArr.length

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    drawAnimationTable(minIndex, i)
    await delay(800)

    for (let j = i + 1; j < n; j++) {
      drawAnimationTable(minIndex, j)
      await delay(600)

      if (animationArr[j] < animationArr[minIndex]) {
        minIndex = j
        drawAnimationTable(minIndex, j)
        await delay(600)
      }
    }

    if (minIndex !== i) {
      ;[animationArr[i], animationArr[minIndex]] = [
        animationArr[minIndex],
        animationArr[i],
      ]
      drawAnimationTable(minIndex, i)
      await delay(800)
    }
    fixedIndices.add(i)
  }

  fixedIndices.add(n - 1)
  drawAnimationTable(-1, -1)
}

drawAnimationTable()
selectionSortAnimation()
