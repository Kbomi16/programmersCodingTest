const replaceString = (s) => {
  if (s.includes('zero')) {
    return s.replace(/zero/g, '0')
  } else if (s.includes('one')) {
    return s.replace(/one/g, '1')
  } else if (s.includes('two')) {
    return s.replace(/two/g, '2')
  } else if (s.includes('three')) {
    return s.replace(/three/g, '3')
  } else if (s.includes('four')) {
    return s.replace(/four/g, '4')
  } else if (s.includes('five')) {
    return s.replace(/five/g, '5')
  } else if (s.includes('six')) {
    return s.replace(/six/g, '6')
  } else if (s.includes('seven')) {
    return s.replace(/seven/g, '7')
  } else if (s.includes('eight')) {
    return s.replace(/eight/g, '8')
  } else if (s.includes('nine')) {
    return s.replace(/nine/g, '9')
  }
  return s
}

function solution(s) {
  for (let i = 0; i < s.length; i++) {
    s = replaceString(s)
  }
  return Number(s)
}
