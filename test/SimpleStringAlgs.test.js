/* eslint-env mocha */
import chai from 'chai';
import SimpleStringAlgs from '../src/strings/SimpleStringAlgs';

const assert = chai.assert;

describe('SimpleStringAlgs', () => {
  describe('SimpleStringAlgs.reverseWithBuiltIns', () => {
    it('Reverses an even length string \'jeopardy\'', () => {
      const str = 'jeopardy';
      assert.strictEqual(SimpleStringAlgs.reverseWithBuiltIns(str), 'ydrapoej');
    });
    it('Reverses an odd length string \'steve\'', () => {
      const str = 'steve';
      assert.strictEqual(SimpleStringAlgs.reverseWithBuiltIns(str), 'evets');
    });
    it('Reverses a string having a cap letter \'Frank\'', () => {
      const str = 'Frank';
      assert.strictEqual(SimpleStringAlgs.reverseWithBuiltIns(str), 'knarF');
    });
    it('Reverses a string having all cap letters \'FUBAR\'', () => {
      const str = 'FUBAR';
      assert.strictEqual(SimpleStringAlgs.reverseWithBuiltIns(str), 'RABUF');
    });
    it('Reverses a string having one letter \'A\'', () => {
      const str = 'A';
      assert.strictEqual(SimpleStringAlgs.reverseWithBuiltIns(str), 'A');
    });
    it('Reverses empty string \'\'', () => {
      const str = '';
      assert.strictEqual(SimpleStringAlgs.reverseWithBuiltIns(str), '');
    });
    it('Throws an error on invalid input {foo: \'bar\'}', () => {
      const str = {
        foo: 'bar'
      };
      const err = 'Input [object Object] was not a string primitive or String object.';
      assert.throws(() => SimpleStringAlgs.reverseWithBuiltIns(str), err);
    });
  });
  describe('SimpleStringAlgs.reverse', () => {
    it('Reverses an even length string \'jeopardy\'', () => {
      const str = 'jeopardy';
      assert.strictEqual(SimpleStringAlgs.reverse(str), 'ydrapoej');
    });
    it('Reverses an odd length string \'steve\'', () => {
      const str = 'steve';
      assert.strictEqual(SimpleStringAlgs.reverse(str), 'evets');
    });
    it('Reverses a string having a cap letter \'Frank\'', () => {
      const str = 'Frank';
      assert.strictEqual(SimpleStringAlgs.reverse(str), 'knarF');
    });
    it('Reverses a string having all cap letters \'FUBAR\'', () => {
      const str = 'FUBAR';
      assert.strictEqual(SimpleStringAlgs.reverse(str), 'RABUF');
    });
    it('Reverses a string having one letter \'A\'', () => {
      const str = 'A';
      assert.strictEqual(SimpleStringAlgs.reverse(str), 'A');
    });
    it('Reverses empty string \'\'', () => {
      const str = '';
      assert.strictEqual(SimpleStringAlgs.reverse(str), '');
    });
    it('Throws an error on invalid input {foo: \'bar\'}', () => {
      const str = {
        foo: 'bar'
      };
      const err = 'Input [object Object] was not a string primitive or String object.';
      assert.throws(() => SimpleStringAlgs.reverse(str), err);
    });
  });
});
