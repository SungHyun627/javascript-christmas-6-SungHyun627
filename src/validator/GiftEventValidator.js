import { MIN_TOTAL_ORDER_AMOUNT_FOR_GIFT_EVENT } from '../constants/gifts';

class GiftEventValidator {
  static isGiftEventApplicable(totalOrderAmount) {
    return totalOrderAmount >= MIN_TOTAL_ORDER_AMOUNT_FOR_GIFT_EVENT;
  }
}

export default GiftEventValidator;
