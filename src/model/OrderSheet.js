import { MENU_PROPERTIES, MENU_LIST } from '../constants/menus.js';
import DisCountEventValidator from '../validator/DiscountEventValidator.js';
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

  getDiscountEventsApplicable() {
    const totalOrderAmount = this.getTotalOrderAmountBeforeDiscount();

    if (!DisCountEventValidator.isDiscountEventApplicable(totalOrderAmount))
      return [];
  }
}

export default OrderSheet;
