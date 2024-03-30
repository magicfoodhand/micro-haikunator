/**
 * Generate a random number
 * @param {number} max 
 * @returns number */
export const randomNumber = (max) => Math.floor(Math.random() * max)

/**
 * Generate a string from `characters`, defaults to `abcdefghijklmnopqrstuvwxyz0123456789`, of length `value`
 * @param {number} value
 * @param {string} characters
 * @returns string
 */
export const toChars = (value, characters = 'abcdefghijklmnopqrstuvwxyz0123456789') => {
    const max = characters.length
    let result = ''
    do {
        result += characters[value % max]
        value = (value / max) | 0
    } while (value > 0)
    return result
}

/**
 * @typedef Options
 * @type {object}
 * @property {string[]} adjectives - list of adjectives to use, defaults to [],
 * @property {string[]} nouns - list of nouns to use, defaults to [],
 * @property {number} maxValue - Max value for suffix, defaults to 10_000.
 * @property {boolean} useChars - Use characters in the suffix, instead of numbers only, defaults to false.
 */

/**
 * Generate a random haikunated name, <adjective>-<noun>-<number | string>, from options
 * @param {Options} options
 * @returns string
 */
export const haikunate = ({
  adjectives = [],
  nouns = [],
  maxValue = 10_000,
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