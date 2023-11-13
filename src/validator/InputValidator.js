import { MENU_NAMES } from '../constants/menus.js';
import { ERROR_MESSAGES } from '../constants/messages.js';
import { MENU_REGEX, VISIT_DATE_REGEX } from '../constants/regex.js';
import { MENU_SEPARATOR } from '../constants/separators.js';
import { convertOrderedMenusInputIntoObject } from '../utils/general.js';

class InputValidator {
  static validateVisitDate(visitDate) {
    if (!VISIT_DATE_REGEX.test(visitDate))
      throw new Error(ERROR_MESSAGES.NOT_VALID_VISIT_DATE);
    return true;
  }

  static validateMenus(menus) {
    this.validateMenusInputFormat(menus);
    this.validateMenusInMenuList(menus);
    return true;
  }

  static validateMenusInputFormat(menus) {
    return menus.split(MENU_SEPARATOR).every(this.validateMenuFormat);
  }

  static validateMenuFormat(menu) {
    if (!MENU_REGEX.test(menu)) {
      throw new Error(ERROR_MESSAGES.NOT_VALID_MENUS);
    }
    return true;
  }

  static validateMenusInMenuList(menus) {
    const orderedMenuNames = Object.keys(
      convertOrderedMenusInputIntoObject(menus)
    );
    if (
      orderedMenuNames.some(
        (orderedMenuName) => !MENU_NAMES.includes(orderedMenuName)
      )
    ) {
      throw new Error(ERROR_MESSAGES.NOT_VALID_MENUS);
    }
    return true;
  }
}

export default InputValidator;
