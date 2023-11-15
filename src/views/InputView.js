import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../constants/messages.js';

class InputView {
  #input;
  async readVisitDate() {
    this.#input = await Console.readLineAsync(GUIDE_MESSAGES.ENTER_VISIT_DATE);
    return this.#input;
  }
  async readMenus() {
    this.#input = await Console.readLineAsync(GUIDE_MESSAGES.ENTER_MENUS);
    return this.#input;
  }
}

export default InputView;
