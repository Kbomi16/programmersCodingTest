function solution(s) {
  let string = s.toLowerCase()
  let array = string.split('')

  let p = 0
  let y = 0

  for (let i of array) {
    if (i === 'p') p++
    if (i === 'y') y++
  }

  return p === y ? true : false
}
