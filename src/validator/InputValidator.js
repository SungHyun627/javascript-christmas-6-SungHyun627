import {
  MENU_LIST,
  MENU_PROPERTIES,
  MENU_TYPES,
  MENU_CRITERIAS,
} from '../constants/menus.js';
import { ERROR_MESSAGES } from '../constants/messages.js';
import { REGEXS } from '../constants/regexs.js';
import { SEPARATORS } from '../constants/separators.js';
import {
  getOrderedMenusCounts,
  getOrderedMenusNames,
  throwError,
} from '../utils/general.js';

class InputValidator {
  static validateVisitDate(visitDate) {
    if (!REGEXS.VISIT_DATE_REGEX.test(visitDate))
      throwError(ERROR_MESSAGES.NOT_VALID_VISIT_DATE);
    return true;
  }

  static validateOrderedMenus(menus) {
    this.validateOrderedMenusInputFormat(menus);
    this.validateEveryOrderedMenuInMenuList(menus);
    this.validateEveryOrderedMenuCountIsBiggerThanZero(menus);
    this.validateIsDuplicatedMenuName(menus);
    this.validateOnlyDrinkInOrderedMenus(menus);
    this.validateTotalCounts(menus);

    return true;
  }

  static validateOrderedMenusInputFormat(menus) {
    return menus
      .split(SEPARATORS.MENU_SEPARATOR)
      .every(this.validateOrderedMenuFormat);
  }

  static validateOrderedMenuFormat(menu) {
    if (!REGEXS.MENU_REGEX.test(menu))
      throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    return true;
  }

  static validateEveryOrderedMenuInMenuList(menus) {
    const orderedMenuNames = getOrderedMenusNames(menus);
    return orderedMenuNames.every(this.validateOrderedMenuInMenuList);
  }

  static validateOrderedMenuInMenuList(menu) {
    const menuNames = Object.keys(MENU_LIST);
    if (!menuNames.includes(menu)) throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    return true;
  }

  static validateEveryOrderedMenuCountIsBiggerThanZero(menus) {
    const orderedMenusCounts = getOrderedMenusCounts(menus);
    return orderedMenusCounts.every(
      this.validateOrderedMenuCountIsBiggerThanZero
    );
  }

  static validateOrderedMenuCountIsBiggerThanZero(menuCount) {
    if (menuCount < MENU_CRITERIAS.MIN_ORDERED_MENU_COUNT)
      throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    return true;
  }

  static validateIsDuplicatedMenuName(menus) {
    const orderedMenuNames = getOrderedMenusNames(menus);
    if (orderedMenuNames.length !== new Set(orderedMenuNames).size)
      throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    return true;
  }

  static validateOnlyDrinkInOrderedMenus(menus) {
    const orderedMenuNames = getOrderedMenusNames(menus);
    if (orderedMenuNames.every(this.validateIsMenuDrink))
      throwError(ERROR_MESSAGES.ONLY_DRINK);
    return true;
  }

  static validateIsMenuDrink(menuName) {
    return MENU_LIST[menuName][MENU_PROPERTIES.MENU_TYPE] === MENU_TYPES.DRINK;
  }

  static validateTotalCounts(menus) {
    const orderedMenuCounts = getOrderedMenusCounts(menus);
    const totalCounts = orderedMenuCounts.reduce(
      (acc, curCount) => acc + curCount,
      0
    );
    if (totalCounts > MENU_CRITERIAS.MAX_TOTAL_COUNTS)
      throwError(ERROR_MESSAGES.OVERORDER_MAX_TOTAL_COUNTS);
  }
}

export default InputValidator;
