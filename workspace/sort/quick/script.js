const tree = document.getElementById('tree')

const quickSortTreeSteps = [
  {
    level: 0,
    title: '루트: 피벗 33',
    arr: [33, 10, 55, 71, 29, 41, 5],
    pivotIndex: 0,
    left: {
      title: '왼쪽: 피벗 10',
      arr: [10, 5],
      pivotIndex: 0,
      left: {
        title: '왼쪽: [5] - 완료',
        arr: [5],
        fixed: true,
      },
      right: {
        title: '오른쪽: [] - 없음',
      },
    },
    right: {
      title: '오른쪽: 피벗 55',
      arr: [55, 71, 29, 41],
      pivotIndex: 0,
      left: {
        title: '왼쪽: 피벗 29',
        arr: [29, 41],
        pivotIndex: 0,
        left: {
          title: '왼쪽: [] - 없음',
        },
        right: {
          title: '오른쪽: [41] - 완료',
          arr: [41],
          fixed: true,
        },
      },
      right: {
        title: '오른쪽: [71] - 완료',
        arr: [71],
        fixed: true,
      },
    },
  },
]

function renderNode(step, container) {
  const nodeDiv = document.createElement('div')
  nodeDiv.className = 'node'

  const title = document.createElement('h3')
  title.textContent = step.title
  nodeDiv.appendChild(title)

  if (step.arr) {
    const table = document.createElement('table')
    const tr = document.createElement('tr')
    step.arr.forEach((val, idx) => {
      const td = document.createElement('td')
      td.textContent = val
      if (step.fixed) td.classList.add('fixed')
      if (idx === step.pivotIndex) td.classList.add('pivot')
      tr.appendChild(td)
    })
    table.appendChild(tr)
    nodeDiv.appendChild(table)
  }

  container.appendChild(nodeDiv)

  if (step.left || step.right) {
    const branchDiv = document.createElement('div')
    branchDiv.className = 'branch'

    const leftDiv = document.createElement('div')
    const rightDiv = document.createElement('div')

    if (step.left) renderNode(step.left, leftDiv)
    if (step.right) renderNode(step.right, rightDiv)

    branchDiv.appendChild(leftDiv)
    branchDiv.appendChild(rightDiv)
    container.appendChild(branchDiv)
  }
}

quickSortTreeSteps.forEach((step) => renderNode(step, tree))
