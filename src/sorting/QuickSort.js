import logger from '../util/LogUtil';

/**
 * Class QuickSort
 *
 * Implementation of the Quick Sort algorithm
 */
class QuickSort {

  static quickSort(arr) {
    this.sort(arr, 0, arr.length - 1);
  }

  static sort(arr, left, right) {
    const idx = this.partition(arr, left, right);
    logger.debug(`Array: ${arr}, Left: ${left}, Right: ${right}, Pivot: ${idx}`);
    if (left >= right) {
      return;
    }
    this.sort(arr, left, idx);
    this.sort(arr, idx + 1, right);
  }

  /* eslint no-param-reassign: 0 */
  static partition(arr, first, last) {
    const pivot = arr[Math.floor((first + last) / 2)];
    let leftI = first - 1;
    let rightI = last + 1;
    while (leftI <= rightI) {
      while (arr[++leftI] < pivot);
      while (arr[--rightI] > pivot);
      if (leftI >= rightI) break;
      const tmp = arr[leftI];
      arr[leftI] = arr[rightI];
      arr[rightI] = tmp;
    }
    return rightI;
  }

}

const arr = [6, 4, 2, 1, 1, 9, 4, 2, 0, 6];
logger.debug(`Arr before sort: ${arr}`);
QuickSort.quickSort(arr);
logger.debug(`Arr after sort: ${arr}`);


export default QuickSort;
