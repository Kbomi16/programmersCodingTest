const arr = [10, 12, 7, 3, 15, 2, 5]
const container = document.getElementById('container')

/** 배열을 테이블로 만들어 반환 */
function createTable(array, options = {}) {
  const {
    fixedIndices = new Set(),
    minIndex = null,
    currentIndex = null,
  } = options
  const table = document.createElement('table')
  const tr = document.createElement('tr')

  array.forEach((v, i) => {
    const td = document.createElement('td')
    td.textContent = v
    if (fixedIndices.has(i)) td.classList.add('fixed')
    if (i === minIndex) td.classList.add('min')
    if (i === currentIndex) td.classList.add('current')
    tr.appendChild(td)
  })

  table.appendChild(tr)
  return table
}

/**
 * 병합 함수
 * @param {number[]} left
 * @param {number[]} right
 * @returns {number[]}
 */
function merge(left, right) {
  let i = 0,
    j = 0
  const result = []

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  while (i < left.length) result.push(left[i++])
  while (j < right.length) result.push(right[j++])

  return result
}

/**
 * 병합정렬 트리 노드 생성 (재귀, DOM 노드와 정렬된 배열 반환)
 * @param {number[]} array
 * @returns {{ node: HTMLElement, sorted: number[] }}
 */
function mergeSortTree(array) {
  const node = document.createElement('div')
  node.className = 'tree-node'

  // 배열 상태 표시 (분할 혹은 병합된 배열)
  const arrayTable = createTable(array)
  node.appendChild(arrayTable)

  if (array.length <= 1) {
    // 더 이상 분할 불가, 종료
    return { node, sorted: array }
  }

  const mid = Math.floor(array.length / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid)

  // 자식 노드 생성 (좌우 분할)
  const childrenWrapper = document.createElement('div')
  childrenWrapper.className = 'children'

  const leftResult = mergeSortTree(left)
  const rightResult = mergeSortTree(right)

  childrenWrapper.appendChild(leftResult.node)
  childrenWrapper.appendChild(rightResult.node)

  node.appendChild(childrenWrapper)

  // 정렬된 배열 병합
  const merged = merge(leftResult.sorted, rightResult.sorted)

  // 병합된 배열 테이블 (확정 표시)
  const mergedTable = createTable(merged, {
    fixedIndices: new Set(merged.map((_, i) => i)),
  })
  node.appendChild(mergedTable)

  return { node, sorted: merged }
}

// 컨테이너에 트리 붙이기
const result = mergeSortTree(arr)
container.appendChild(result.node)
