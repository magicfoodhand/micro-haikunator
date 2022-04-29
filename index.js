const CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const randomNumber = (max) => Math.floor(Math.random() * max)

export const toChars = (value, characters = CHARS) => {
    const max = characters.length
    let result = ''
    do {
        result += characters[value % max]
        value = (value / max) | 0
    } while (value > 0)
    return result
}

const haikunate = ({
  maxValue = 10_000,
  adjectives = [],
  nouns = [],
  useChars = false,
} = {}) => {
  if(adjectives.length === 0 || nouns.length === 0)
    throw new Error("`adjectives` and `nouns` are required")
  const adjective = adjectives[randomNumber(adjectives.length)]
  const noun = nouns[randomNumber(nouns.length)]
  const randomValue = randomNumber(maxValue) + 1
  return `${adjective}-${noun}-${useChars ? toChars(randomValue) : randomValue}`
}

export default haikunate