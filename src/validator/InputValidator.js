import { MENU_LIST } from '../constants/menus.js';
import { ERROR_MESSAGES } from '../constants/messages.js';
import { MENU_REGEX, VISIT_DATE_REGEX } from '../constants/regex.js';
import {
  MENU_COUNT_SEOARATOR,
  MENU_SEPARATOR,
} from '../constants/separators.js';

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
    return menus.split(',').every(this.validateMenuFormat);
  }

  static validateMenuFormat(menu) {
    if (!MENU_REGEX.test(menu)) {
      throw new Error(ERROR_MESSAGES.NOT_VALID_MENUS);
    }
    return true;
  }

  static validateMenusInMenuList(menus) {
    const orderedMenuNames = menus
      .split(MENU_SEPARATOR)
      .map((menu) => menu.split(MENU_COUNT_SEOARATOR)[0]);
    const menuNames = Object.keys(MENU_LIST).map(
      (menu) => MENU_LIST[menu].MENU_NAME
    );
    if (
      orderedMenuNames.some(
        (orderedMenuName) => !menuNames.includes(orderedMenuName)
      )
    ) {
      throw new Error(ERROR_MESSAGES.NOT_VALID_MENUS);
    }
    return true;
  }
}

export default InputValidator;
