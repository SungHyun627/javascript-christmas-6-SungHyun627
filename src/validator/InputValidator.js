import { MENU_NAMES, MIN_ORDERED_MENU_COUNT } from '../constants/menus.js';
import { ERROR_MESSAGES } from '../constants/messages.js';
import { MENU_REGEX, VISIT_DATE_REGEX } from '../constants/regex.js';
import { MENU_SEPARATOR } from '../constants/separators.js';
import {
  getOrderedMenus,
  getOrderedMenusNames,
  throwError,
} from '../utils/general.js';

class InputValidator {
  static validateVisitDate(visitDate) {
    if (!VISIT_DATE_REGEX.test(visitDate))
      throwError(ERROR_MESSAGES.NOT_VALID_VISIT_DATE);
    return true;
  }

  static validateOrderedMenus(menus) {
    this.validateOrderedMenusInputFormat(menus);
    this.validateEveryOrderedMenuInMenuList(menus);
    this.validateEveryOrderedMenuCountIsBiggerThanZero(menus);
    this.validateIsDuplicatedMenuName(menus);

    return true;
  }

  static validateOrderedMenusInputFormat(menus) {
    return menus.split(MENU_SEPARATOR).every(this.validateOrderedMenuFormat);
  }

  static validateOrderedMenuFormat(menu) {
    if (!MENU_REGEX.test(menu)) throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    return true;
  }

  static validateEveryOrderedMenuInMenuList(menus) {
    const orderedMenuNames = Object.keys(getOrderedMenus(menus));
    return orderedMenuNames.every(this.validateOrderedMenuInMenuList);
  }

  static validateOrderedMenuInMenuList(menu) {
    if (!MENU_NAMES.includes(menu)) throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    return true;
  }

  static validateEveryOrderedMenuCountIsBiggerThanZero(menus) {
    const orderedMenusCounts = Object.values(getOrderedMenus(menus));
    return orderedMenusCounts.every(
      this.validateOrderedMenuCountIsBiggerThanZero
    );
  }

  static validateOrderedMenuCountIsBiggerThanZero(menuCount) {
    if (menuCount < MIN_ORDERED_MENU_COUNT)
      throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    return true;
  }

  static validateIsDuplicatedMenuName(menus) {
    const orderedMenuNames = getOrderedMenusNames(menus);
    if (orderedMenuNames.length !== new Set(orderedMenuNames).size)
      throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    return true;
  }
}

export default InputValidator;
