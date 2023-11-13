import { ERROR_MESSAGES } from '../constants/messages.js';
import { MENU_REGEX, VISIT_DATE_REGEX } from '../constants/regex.js';

class InputValidator {
  static validateVisitDate(visitDate) {
    if (!VISIT_DATE_REGEX.test(visitDate))
      throw new Error(ERROR_MESSAGES.NOT_VALID_VISIT_DATE);
    return true;
  }

  static validateMenus(menus) {
    this.validateMenusInputFormat(menus);
    return true;
  }

  static validateMenusInputFormat(menus) {
    return menus.split(',').every(this.validateMenuFormat);
  }

  static validateMenuFormat(menu) {
    if (!MENU_REGEX.test(menu)) {
      throw new Error(ERROR_MESSAGES.NOT_VALID_MENUS_FORMAT);
    }
    return true;
  }
}

export default InputValidator;
