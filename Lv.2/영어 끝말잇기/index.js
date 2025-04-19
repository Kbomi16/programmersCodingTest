function solution(n, words) {
  let used = new Set()

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const prevWord = words[i - 1]

    // 중복 단어거나, 단어 길이 < 2 이거나, 끝말잇기 규칙 위반인 경우
    if (
      used.has(word) ||
      word.length < 2 ||
      (i > 0 && prevWord[prevWord.length - 1] !== word[0])
    ) {
      return [(i % n) + 1, Math.floor(i / n) + 1]
    }

    used.add(word)
  }

  return [0, 0] // 탈락자 없음
}
