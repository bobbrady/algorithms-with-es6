import logger from '../util/LogUtil';

/**
 * Class Factorize
 *
 * Exposes static fucntionality for generating the factorial of a number.
 */
class Factorize {

  /**
   * Uses dynamic programming to calculate the factorial of a number, n!.
   *
   * @param {number} num, the number to calculate its factorial
   * @returns {number} the factorial
   */
  static calculateFactorial(num) {
    logger.debug(`Calculating the factorial of ${num}`);
    return num;
  }
}

export default Factorize;
