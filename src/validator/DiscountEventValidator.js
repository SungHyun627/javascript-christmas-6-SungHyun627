import { DISCOUNT_EVENTS_DATES } from '../constants/dates.js';
import { MIN_TOTAL_ORDER_AMOUNT } from '../constants/discounts.js';

class DisCountEventValidator {
  static isDiscountEventApplicable(totalOrderAmount) {
    return totalOrderAmount >= MIN_TOTAL_ORDER_AMOUNT;
  }

  static isChristmasDdayDiscontApplicable(visitDate) {
    return (
      visitDate >= DISCOUNT_EVENTS_DATES.CHRISTMAS_DDAY_DISCOUNT_START_DATE &&
      visitDate <= DISCOUNT_EVENTS_DATES.CHRISTMAS_DDAY_DISCOUNT_END_DATE
    );
  }
}

export default DisCountEventValidator;
