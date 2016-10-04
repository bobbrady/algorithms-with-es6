/* eslint-env mocha */
import chai from 'chai';
import QuickSort from '../src/sorting/QuickSort';
import ArrayUtil from '../src/util/ArrayUtil';
import logger from '../src/util/LogUtil';

const assert = chai.assert;
let randArr = [];

describe('QuickSort', () => {
  beforeEach(() => {
    randArr = ArrayUtil.randomIntArray(100, 100);
    logger.debug(`Random Array to be sorted: ${randArr}`);
  });
  it('Sorts random array of size 100: Test 1', () => {
    QuickSort.quickSort(randArr);
    logger.debug(`Sorted Array: ${randArr}`);
    assert.isTrue(ArrayUtil.isSorted(randArr));
  });
  it('Sorts random array of size 100: Test 2', () => {
    QuickSort.quickSort(randArr);
    logger.debug(`Sorted Array: ${randArr}`);
    assert.isTrue(ArrayUtil.isSorted(randArr));
  });
  it('Sorts random array of size 100: Test 3', () => {
    QuickSort.quickSort(randArr);
    logger.debug(`Sorted Array: ${randArr}`);
    assert.isTrue(ArrayUtil.isSorted(randArr));
  });
  it('Sorts random array of size 100: Test 4', () => {
    QuickSort.quickSort(randArr);
    logger.debug(`Sorted Array: ${randArr}`);
    assert.isTrue(ArrayUtil.isSorted(randArr));
  });
  it('Sorts random array of size 100: Test 5', () => {
    QuickSort.quickSort(randArr);
    logger.debug(`Sorted Array: ${randArr}`);
    assert.isTrue(ArrayUtil.isSorted(randArr));
  });
});
