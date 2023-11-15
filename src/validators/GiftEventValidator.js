import { GIFT_EVENT_CRITERIAS } from '../constants/gifts.js';

class GiftEventValidator {
  isGiftEventApplicable(totalOrderAmount) {
    return (
      totalOrderAmount >=
      GIFT_EVENT_CRITERIAS.MIN_TOTAL_ORDER_AMOUNT_FOR_GIFT_EVENT
    );
  }
}

export default GiftEventValidator;
