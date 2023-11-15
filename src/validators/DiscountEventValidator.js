import { DISCOUNT_EVENTS_DATES } from '../constants/dates.js';
import { DISCOUNT_EVENT_CRITERIAS } from '../constants/discounts.js';

class DiscountEventValidator {
  isDiscountEventApplicable(totalOrderAmount) {
    return (
      totalOrderAmount >=
      DISCOUNT_EVENT_CRITERIAS.MIN_TOTAL_ORDER_AMOUNT_FOR_DISCOUNT_EVENT
    );
  }

  isChristmasDdayDiscountApplicable(visitDate) {
    return (
      visitDate >= DISCOUNT_EVENTS_DATES.CHRISTMAS_DDAY_DISCOUNT_START_DATE &&
      visitDate <= DISCOUNT_EVENTS_DATES.CHRISTMAS_DDAY_DISCOUNT_END_DATE
    );
  }

  isWeekDayDiscountApplicable(visitDate) {
    return !DISCOUNT_EVENTS_DATES.WEEKEND_DISCOUNT_DATES.includes(visitDate);
  }

  isWeekendDiscountApplicable(visitDate) {
    return DISCOUNT_EVENTS_DATES.WEEKEND_DISCOUNT_DATES.includes(visitDate);
  }

  isSpecialDiscountApplicable(visitDate) {
    return DISCOUNT_EVENTS_DATES.SPECIAL_DISCOUNT_DATES.includes(visitDate);
  }
}

export default DiscountEventValidator;
