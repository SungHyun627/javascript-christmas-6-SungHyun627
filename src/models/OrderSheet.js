import { BADGES } from '../constants/badges.js';
import { DISCOUNT_EVENTS_DATES } from '../constants/dates.js';
import { DISCOUNT_UNITS, DISCOUNT_AMOUNTS } from '../constants/discounts.js';
import { GIFT_MENUS, GIFT_AMOUNTS } from '../constants/gifts.js';
import { MENU_PROPERTIES, MENU_LIST, MENU_TYPES } from '../constants/menus.js';
import DiscountEventValidator from '../validators/DiscountEventValidator.js';
import EventBadgeValidator from '../validators/EventBadgeValidator.js';
import GiftEventValidator from '../validators/GiftEventValidator.js';
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
    const discountEventValidator = new DiscountEventValidator();

    return discountEventValidator.isDiscountEventApplicable(totalOrderAmount)
      ? this.getChristmasDdayDiscountAmount() +
          this.getWeekDayDiscountAmount() +
          this.getWeekendDiscountAmount() +
          this.getSpecialDiscountAmount()
      : DISCOUNT_AMOUNTS.ZERO_DISCOUNT_AMOUNT;
  }

  getGiftAmount() {
    const totalOrderAmount = this.getTotalOrderAmount();
    const giftEventValidator = new GiftEventValidator();

    return giftEventValidator.isGiftEventApplicable(totalOrderAmount)
      ? MENU_LIST[GIFT_MENUS.GIFT_MENU][MENU_PROPERTIES.MENU_PRICE]
      : GIFT_AMOUNTS.ZERO_GIFT_AMOUNT;
  }

  getTotalBenefitAmount() {
    return this.getTotalDiscountAmount() + this.getGiftAmount();
  }

  getPaymentAmount() {
    return this.getTotalOrderAmount() - this.getTotalDiscountAmount();
  }

  getEventBadge() {
    const totalBenefitAmount = this.getTotalBenefitAmount();
    const eventBadgeValidator = new EventBadgeValidator();
    if (eventBadgeValidator.isStarBadgeGettable(totalBenefitAmount))
      return BADGES.STAR;
    if (eventBadgeValidator.isTreeBadgeGettable(totalBenefitAmount))
      return BADGES.TREE;
    if (eventBadgeValidator.isSantaBadgeGettable(totalBenefitAmount))
      return BADGES.SANTA;
    return BADGES.NOT_MATCHED_BADGE;
  }

  getChristmasDdayDiscountAmount() {
    const visitDate = this.getVisitDate();
    const discountEventValidator = new DiscountEventValidator();
    return discountEventValidator.isChristmasDdayDiscountApplicable(visitDate)
      ? DISCOUNT_AMOUNTS.INITIAL_CHRISTMAS_DDAY_DISCOUNT_AMOUNT +
          (visitDate -
            DISCOUNT_EVENTS_DATES.CHRISTMAS_DDAY_DISCOUNT_START_DATE) *
            DISCOUNT_UNITS.CHRISTMAS_DDAY_DISCOUNT_UNIT
      : DISCOUNT_AMOUNTS.ZERO_DISCOUNT_AMOUNT;
  }

  getWeekDayDiscountAmount() {
    const visitDate = this.getVisitDate();
    const countOfDessertMenus = this.getCountOfMenuType(MENU_TYPES.DESSERT);
    const discountEventValidator = new DiscountEventValidator();
    return discountEventValidator.isWeekDayDiscountApplicable(visitDate)
      ? countOfDessertMenus * DISCOUNT_UNITS.WEEKDAY_DISCOUNT_UNIT
      : 0;
  }

  getWeekendDiscountAmount() {
    const visitDate = this.getVisitDate();
    const countOfMainDishMenus = this.getCountOfMenuType(MENU_TYPES.MAIN_DISH);
    const discountEventValidator = new DiscountEventValidator();
    return discountEventValidator.isWeekendDiscountApplicable(visitDate)
      ? countOfMainDishMenus * DISCOUNT_UNITS.WEEKEND_DISCOUNT_UNIT
      : 0;
  }

  getSpecialDiscountAmount() {
    const visitDate = this.getVisitDate();
    const discountEventValidator = new DiscountEventValidator();
    return discountEventValidator.isSpecialDiscountApplicable(visitDate)
      ? DISCOUNT_AMOUNTS.SPECIAL_DISCOUNT_AMOUNT
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
