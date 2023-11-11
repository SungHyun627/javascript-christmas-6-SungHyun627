import { ERROR_MESSAGES } from '../constants/messages.js';
import { VISIT_DATE_REGEX } from '../constants/regex.js';

class InputValidator {
  static validateVisitDate(visitDate) {
    if (!VISIT_DATE_REGEX.test(visitDate))
      throw new Error(ERROR_MESSAGES.NOT_VALID_VISIT_DATE);
    return true;
  }
}

export default InputValidator;
