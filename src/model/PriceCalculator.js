import { MENU_LIST, MENU_PROPERTIES } from '../constants/menus.js';

class PriceCalculator {
  getTotalAmountBeforeDiscount(menus) {
    const menuNames = Object.keys(menus);
    return menuNames.reduce((acc, menuName) => {
      const menuCount = menus[menuName];
      return acc + MENU_LIST[menuName][MENU_PROPERTIES.MENU_PRICE] * menuCount;
    }, 0);
  }
}

export default PriceCalculator;
