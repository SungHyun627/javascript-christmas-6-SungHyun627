import { MIN_TOTAL_ORDER_AMOUNT } from '../constants/discounts.js';

class DisCountEventValidator {
  static isDiscountEventApplicable(totalOrderAmount) {
    return totalOrderAmount >= MIN_TOTAL_ORDER_AMOUNT;
  }
}

export default DisCountEventValidator;
