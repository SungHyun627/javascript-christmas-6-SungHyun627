import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../constants/messages.js';

class OutputView {
  printStartMessage() {
    Console.print(GUIDE_MESSAGES.START);
  }
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }
}

export default OutputView;
