import { MENU_LIST, MENU_CRITERIAS } from '../constants/menus.js';
import { ERROR_MESSAGES } from '../constants/messages.js';
import { REGEXS } from '../constants/regexs.js';
import { SEPARATORS } from '../constants/separators.js';
import {
  getOrderedMenusCounts,
  getOrderedMenusNames,
  isDrinkMenu,
  throwError,
} from '../utils/general.js';

class InputValidator {
  validateVisitDate(visitDate) {
    if (!REGEXS.VISIT_DATE_REGEX.test(visitDate))
      throwError(ERROR_MESSAGES.NOT_VALID_VISIT_DATE);
    return true;
  }

  validateOrderedMenus(menus) {
    this.validateOrderedMenusInputFormat(menus);
    this.validateEveryOrderedMenuInMenuList(menus);
    this.validateEveryOrderedMenuCountIsBiggerThanZero(menus);
    this.validateIsDuplicatedMenuName(menus);
    this.validateOnlyDrinkInOrderedMenus(menus);
    this.validateTotalCounts(menus);

    return true;
  }

  validateOrderedMenusInputFormat(menus) {
    return menus
      .split(SEPARATORS.MENU_SEPARATOR)
      .every(this.validateOrderedMenuFormat);
  }

  validateOrderedMenuFormat(menu) {
    if (!REGEXS.MENU_REGEX.test(menu))
      throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    return true;
  }

  validateEveryOrderedMenuInMenuList(menus) {
    const orderedMenuNames = getOrderedMenusNames(menus);
    return orderedMenuNames.every(this.validateOrderedMenuInMenuList);
  }

  validateOrderedMenuInMenuList(menu) {
    const menuNames = Object.keys(MENU_LIST);
    if (!menuNames.includes(menu)) throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    return true;
  }

  validateEveryOrderedMenuCountIsBiggerThanZero(menus) {
    const orderedMenusCounts = getOrderedMenusCounts(menus);
    return orderedMenusCounts.every(
      this.validateOrderedMenuCountIsBiggerThanZero
    );
  }

  validateOrderedMenuCountIsBiggerThanZero(menuCount) {
    if (menuCount < MENU_CRITERIAS.MIN_ORDERED_MENU_COUNT)
      throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    return true;
  }

  validateIsDuplicatedMenuName(menus) {
    const orderedMenuNames = getOrderedMenusNames(menus);
    if (orderedMenuNames.length !== new Set(orderedMenuNames).size)
      throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    return true;
  }

  validateOnlyDrinkInOrderedMenus(menus) {
    const orderedMenuNames = getOrderedMenusNames(menus);
    if (orderedMenuNames.every(isDrinkMenu))
      throwError(ERROR_MESSAGES.ONLY_DRINK);
    return true;
  }

  validateTotalCounts(menus) {
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
