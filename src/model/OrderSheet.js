import { BADGES } from '../constants/badges.js';
import { DISCOUNT_EVENTS_DATES } from '../constants/dates.js';
import {
  DISCOUNT_UNITS,
  INITIAL_CHRISTMAS_DDAY_DISCOUNT_AMOUNT,
  SPECIAL_DISCOUNT_AMOUNT,
  ZERO_DISCOUNT_AMOUNT,
} from '../constants/discounts.js';
import { GIFT_MENU, ZERO_GIFT_AMOUNT } from '../constants/gifts.js';
import { MENU_PROPERTIES, MENU_LIST, MENU_TYPES } from '../constants/menus.js';
import DiscountEventValidator from '../validator/DiscountEventValidator.js';
import EventBadgeValidator from '../validator/EventBadgeValidator.js';
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

  getResult() {
    return {
      visitDate: this.getVisitDate(),
      orderedMenus: this.getOrderedMenus(),
      totalOrderAmount: this.getTotalOrderAmount(),
      totalBenefitAmount: this.getTotalBenefitAmount(),
      giftAmount: this.getGiftAmount(),
      paymentAmount: this.getPaymentAmount(),
      eventBadge: this.getEventBadge(),
      benefitAmounts: {
        cddA: this.getChristmasDdayDiscountAmount(),
        wddA: this.getWeekDayDiscountAmount(),
        wedA: this.getWeekendDiscountAmount(),
        sdA: this.getSpecialDiscountAmount(),
        gA: this.getGiftAmount(),
      },
    };
  }

  getTotalOrderAmount() {
    const menus = this.getOrderedMenus();
    const menuNames = Object.keys(menus);
    return menuNames.reduce((acc, menuName) => {
      const menuCount = menus[menuName];
      return acc + MENU_LIST[menuName][MENU_PROPERTIES.MENU_PRICE] * menuCount;
    }, 0);
  }

  getTotalDiscountAmount() {
    const totalOrderAmount = this.getTotalOrderAmount();

    return DiscountEventValidator.isDiscountEventApplicable(totalOrderAmount)
      ? this.getChristmasDdayDiscountAmount() +
          this.getWeekDayDiscountAmount() +
          this.getWeekendDiscountAmount() +
          this.getSpecialDiscountAmount()
      : ZERO_DISCOUNT_AMOUNT;
  }

  getGiftAmount() {
    const totalOrderAmount = this.getTotalOrderAmount();
    return GiftEventValidator.isGiftEventApplicable(totalOrderAmount)
      ? MENU_LIST[GIFT_MENU][MENU_PROPERTIES.MENU_PRICE]
      : ZERO_GIFT_AMOUNT;
  }

  getTotalBenefitAmount() {
    return this.getTotalDiscountAmount() + this.getGiftAmount();
  }

  getPaymentAmount() {
    return this.getTotalOrderAmount() - this.getTotalDiscountAmount();
  }

  getEventBadge() {
    const totalBenefitAmount = this.getTotalBenefitAmount();
    if (EventBadgeValidator.isStarBadgeGettable(totalBenefitAmount))
      return BADGES.STAR;
    if (EventBadgeValidator.isTreeBadgeGettable(totalBenefitAmount))
      return BADGES.TREE;
    if (EventBadgeValidator.isSantaBadgeGettable(totalBenefitAmount))
      return BADGES.SANTA;
    return BADGES.NOT_MATCHED_BADGE;
  }

  getChristmasDdayDiscountAmount() {
    const visitDate = this.getVisitDate();
    return DiscountEventValidator.isChristmasDdayDiscountApplicable(visitDate)
      ? INITIAL_CHRISTMAS_DDAY_DISCOUNT_AMOUNT +
          (visitDate -
            DISCOUNT_EVENTS_DATES.CHRISTMAS_DDAY_DISCOUNT_START_DATE) *
            DISCOUNT_UNITS.CHRISTMAS_DDAY_DISCOUNT_UNIT
      : ZERO_DISCOUNT_AMOUNT;
  }

  getWeekDayDiscountAmount() {
    const visitDate = this.getVisitDate();
    const countOfDessertMenus = this.getCountOfMenuType(MENU_TYPES.DESSERT);
    return DiscountEventValidator.isWeekDayDiscountApplicable(visitDate)
      ? countOfDessertMenus * DISCOUNT_UNITS.WEEKDAY_DISCOUNT_UNIT
      : 0;
  }

  getWeekendDiscountAmount() {
    const visitDate = this.getVisitDate();
    const countOfMainDishMenus = this.getCountOfMenuType(MENU_TYPES.MAIN_DISH);
    return DiscountEventValidator.isWeekendDiscountApplicable(visitDate)
      ? countOfMainDishMenus * DISCOUNT_UNITS.WEEKEND_DISCOUNT_UNIT
      : 0;
  }

  getSpecialDiscountAmount() {
    const visitDate = this.getVisitDate();
    return DiscountEventValidator.isSpecialDiscountApplicable(visitDate)
      ? SPECIAL_DISCOUNT_AMOUNT
      : 0;
  }

  getCountOfMenuType(menuType) {
    const menus = this.getOrderedMenus();
    const menuNames = Object.keys(menus);
    return menuNames.reduce((acc, menuName) => {
      return MENU_LIST[menuName][MENU_PROPERTIES.MENU_TYPE] === menuType
        ? acc + menus[menuName]
        : acc;
    }, 0);
  }
}

export default OrderSheet;
