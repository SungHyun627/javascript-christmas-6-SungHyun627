import { DISCOUNT_EVENTS_DATES } from '../constants/dates.js';
import { MIN_TOTAL_ORDER_AMOUNT_FOR_DISCOUNT_EVENT } from '../constants/discounts.js';

class DiscountEventValidator {
  static isDiscountEventApplicable(totalOrderAmount) {
    return totalOrderAmount >= MIN_TOTAL_ORDER_AMOUNT_FOR_DISCOUNT_EVENT;
  }

  static isChristmasDdayDiscountApplicable(visitDate) {
    return (
      visitDate >= DISCOUNT_EVENTS_DATES.CHRISTMAS_DDAY_DISCOUNT_START_DATE &&
      visitDate <= DISCOUNT_EVENTS_DATES.CHRISTMAS_DDAY_DISCOUNT_END_DATE
    );
  }

  static isWeekDayDiscountApplicable(visitDate) {
    return !DISCOUNT_EVENTS_DATES.WEEKEND_DISCOUNT_DATES.includes(visitDate);
  }

  static isWeekendDiscountApplicable(visitDate) {
    return DISCOUNT_EVENTS_DATES.WEEKEND_DISCOUNT_DATES.includes(visitDate);
  }

  static isSpecialDiscountApplicable(visitDate) {
    return DISCOUNT_EVENTS_DATES.SPECIAL_DISCOUNT_DATES.includes(visitDate);
  }
}

export default DiscountEventValidator;
