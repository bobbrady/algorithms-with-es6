/* eslint-env mocha */
import chai from 'chai';
import QuickSort from '../src/sorting/QuickSort';
import ArrayUtil from '../src/util/ArrayUtil';
import logger from '../src/util/LogUtil';

const assert = chai.assert;

describe('QuickSort', () => {
  it('Sorts random array of size 10', () => {
    const randArr = ArrayUtil.randomIntArray(100, 100);
    logger.debug(`Random Array to be sorted: ${randArr}`);
    QuickSort.quickSort(randArr);
    logger.debug(`Sorted Array: ${randArr}`);
    assert.isTrue(ArrayUtil.isSorted(randArr));
  });
});
