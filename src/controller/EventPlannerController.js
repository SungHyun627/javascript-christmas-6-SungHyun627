import InputView from '../view/InputView.js';
import InputValidator from '../validator/InputValidator.js';
import OutputView from '../view/OutputView.js';
import {
  removeWhiteSpaceFromBothEndsOfString,
  getOrderedMenusObject,
} from '../utils/general.js';
import OrderSheet from '../model/OrderSheet.js';
import { formatResult } from '../utils/formatting.js';

class EventPlannerController {
  #inputView;
  #outputView;
  #orderSheet;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#orderSheet = new OrderSheet();
  }

  async start() {
    this.printEventPlannerStart();
    await this.getVisitDate();
    await this.getOrderedMenus();
    this.printResult();
  }

  async getVisitDate() {
    while (true) {
      const visitDateInput = removeWhiteSpaceFromBothEndsOfString(
        await this.#inputView.readVisitDate()
      );
      try {
        InputValidator.validateVisitDate(visitDateInput);
        this.#orderSheet.setVisitDate(Number(visitDateInput));
        break;
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

  async getOrderedMenus() {
    while (true) {
      const orderedMenusInput = removeWhiteSpaceFromBothEndsOfString(
        await this.#inputView.readMenus()
      );
      try {
        InputValidator.validateOrderedMenus(orderedMenusInput);
        this.#orderSheet.setOrderedMenus(
          getOrderedMenusObject(orderedMenusInput)
        );
        break;
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

  printEventPlannerStart() {
    this.#outputView.printStartMessage();
  }

  printResult() {
    const resultOutputFormat = formatResult({
      ...this.#orderSheet.getResult(),
    });
    this.#outputView.printResult(resultOutputFormat);
  }
}

export default EventPlannerController;
