import { MENU_NAMES } from '../constants/menus.js';
import { ERROR_MESSAGES } from '../constants/messages.js';
import { MENU_REGEX, VISIT_DATE_REGEX } from '../constants/regex.js';
import { MENU_SEPARATOR } from '../constants/separators.js';
import {
  convertOrderedMenusInputIntoObject,
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
    this.validateOrderedMenusInMenuList(menus);
    return true;
  }

  static validateOrderedMenusInputFormat(menus) {
    return menus.split(MENU_SEPARATOR).every(this.validateOrderedMenuFormat);
  }

  static validateOrderedMenuFormat(menu) {
    if (!MENU_REGEX.test(menu)) throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    return true;
  }

  static validateOrderedMenusInMenuList(menus) {
    const orderedMenuNames = Object.keys(
      convertOrderedMenusInputIntoObject(menus)
    );
    if (
      orderedMenuNames.some(
        (orderedMenuName) => !MENU_NAMES.includes(orderedMenuName)
      )
    ) {
      throwError(ERROR_MESSAGES.NOT_VALID_MENUS);
    }
    return true;
  }
}

export default InputValidator;
