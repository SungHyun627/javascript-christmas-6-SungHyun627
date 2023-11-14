import { DISCOUNT_EVENTS_DATES } from '../constants/dates.js';
import {
  DISCOUNT_UNITS,
  INITIAL_CHRISTMAS_DDAY_DISCOUNT_AMOUNT,
  ZERO_DISCOUNT_AMOUNT,
} from '../constants/discounts.js';
import { MENU_PROPERTIES, MENU_LIST } from '../constants/menus.js';
import DisCountEventValidator from '../validator/DiscountEventValidator.js';
import GiftEventValidator from '../validator/GiftEventValidator.js';
class OrderSheet {
  #visitDate;
  #orderedMenus;

  setVisitDate(visitDate) {
    this.#visitDate = visitDate;
  }

  setOrderedMenus(orderedMenus) {
    this.#orderedMenus = orderedMenus;
  }

  getVisitDate() {
    return this.#visitDate;
  }

  getOrderedMenus() {
    return { ...this.#orderedMenus };
  }

  getTotalOrderAmountBeforeDiscount() {
    const menus = this.getOrderedMenus();
    const menuNames = Object.keys(menus);
    return menuNames.reduce((acc, menuName) => {
      const menuCount = menus[menuName];
      return acc + MENU_LIST[menuName][MENU_PROPERTIES.MENU_PRICE] * menuCount;
    }, 0);
  }

  getTotalDiscountAmount() {}

  getGiftAmount() {
    const totalOrderAmount = this.getTotalDiscountAmount();
    if (!GiftEventValidator.isGiftEventApplicable(totalOrderAmount)) return 0;
  }

  getChristmasDdayDiscountAmount() {
    const visitDate = this.getVisitDate();
    return DisCountEventValidator.isChristmasDdayDiscountApplicable(visitDate)
      ? INITIAL_CHRISTMAS_DDAY_DISCOUNT_AMOUNT +
          (visitDate -
            DISCOUNT_EVENTS_DATES.CHRISTMAS_DDAY_DISCOUNT_START_DATE) *
            DISCOUNT_UNITS.CHRISTMAS_DDAY_DISCOUNT_UNIT
      : ZERO_DISCOUNT_AMOUNT;
  }

  getWeekDayDiscountAmount() {
    const visitDate = this.getVisitDate();
    if (!DisCountEventValidator.isWeekDayDiscountApplicalbe(visitDate))
      return 0;
  }

  getWeekendDiscountAmount() {
    const visitDate = this.getVisitDate();
    if (!DisCountEventValidator.isWeekendDiscountApplicalbe(visitDate))
      return 0;
  }

  getSpecialDiscountAmount() {
    const visitDate = this.getVisitDate();
    if (!DisCountEventValidator.isSpecialDiscountApplicable(visitDate))
      return 0;
  }
}

export default OrderSheet;
