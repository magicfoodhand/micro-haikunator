[![Node.js Package](https://github.com/magicfoodhand/micro-haikunator/actions/workflows/npm-test.yml/badge.svg)](https://github.com/magicfoodhand/micro-haikunator/actions/workflows/npm-test.yml)

NOTE: This project is not dead, it's done.

# Micro Haikunator
A word list free version of [tiny-haikunator](https://github.com/magicfoodhand/tiny-haikunator/).

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