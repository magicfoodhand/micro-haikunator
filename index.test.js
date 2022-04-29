import { expect } from 'chai'

import haikunate, {randomNumber, toChars} from "./index.js"

describe('micro-haikunate', function () {
  describe('#randomValue()', function () {
    it('should return a value between 0 < maxValue', function () {
      const result = randomNumber(1)
      expect(result).to.equal(0)
    });
  })

  describe('#toChars()', function () {
    it('should convert a number to characters', function () {
      expect(toChars(37)).to.equal('bb')
    });

    it('should convert a number to characters - custom', function () {
      expect(toChars(37, 'na')).to.equal('ananna')
    });
  })

  describe('#haikunate()', function () {
    it('should throw an error', function () {
      
      try {
        haikunate()
        assert.fail()
      } catch (err) {
        expect(err.message).to.equal("`adjectives` and `nouns` are required")
      }
    });
    
    it('can generate a name', function () {
      const result = haikunate({nouns: ['car'], adjectives: ['spicy']})
      const parts = result.split('-')
      expect(parts[0]).to.equal('spicy')
      expect(parts[1]).to.equal('car')

      const randomValue = parseInt(parts[2])
      expect(randomValue).to.be.least(0)
      expect(randomValue).to.be.below(10_000)
    });

    it('can generate a name - useChars', function () {
      const result = haikunate({nouns: ['flower'], adjectives: ['purple'], useChars: true})
      const parts = result.split('-')
      expect(parts[2]).to.have.lengthOf.at.least(1)
    });

    it('can override maxValue', function () {
      const result = haikunate({nouns: ['car'], adjectives: ['spicy'], maxValue: 1})
      const parts = result.split('-')
      expect(parts[2]).to.equal('1')
    });
  });
});
