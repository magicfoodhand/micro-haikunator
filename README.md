[![Node.js Package](https://github.com/magicfoodhand/micro-haikunator/actions/workflows/npm-test.yml/badge.svg)](https://github.com/magicfoodhand/micro-haikunator/actions/workflows/npm-test.yml)

# Micro Haikunator
A word list free version of [tiny-haikunator](https://github.com/magicfoodhand/tiny-haikunator/)

## Usage

```javascript
import haikunate from 'micro-haikunator'

haikunate({nouns: ['snowflake'], adjectives: ['rough']) // rough-snowflake-256
```

## Advanced Usage
All objects and functions are available for you to extend however you need, configuration is passed into the haikunate function. The configuration values are shown individually below. 

```javascript
import haikunate, {randomNumber, toChars} from 'micro-haikunator'

haikunate({nouns: ['car'], adjectives: ['spicy'], maxValue: 100}) // spicy-car-37
haikunate({nouns: ['mountain'], adjectives: ['blue'], useChars: true) // blue-mountain-a87

randomNumber(1) // 0
toChars(37) // bb
toChars(37, 'na') // ananna
```

## Development
To install test dependencies use `npm i`, test with `npm run test`

## Motivation
I needed a small heroku name generator, similar npm packages had an unpacked size of over 25KB! So I found a ruby gem, mainly for the word list, and wrote it up in ES6. That became the [tiny-haikunator](https://github.com/magicfoodhand/tiny-haikunator/) library, this one was created when I knew I'd always pass in a custom word list and didn't want to waste space.