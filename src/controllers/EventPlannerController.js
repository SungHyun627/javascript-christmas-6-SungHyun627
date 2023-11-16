import InputView from '../views/InputView.js';
import InputValidator from '../validators/InputValidator.js';
import OutputView from '../views/OutputView.js';
import {
  removeWhiteSpaceFromBothEndsOfString,
  getOrderedMenusObject,
} from '../utils/general.js';
import OrderSheet from '../models/OrderSheet.js';
import { generateResultFormat } from '../utils/formatting.js';

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
    const inputValidator = new InputValidator();
    while (true) {
      const visitDateInput = removeWhiteSpaceFromBothEndsOfString(
        await this.#inputView.readVisitDate()
      );
      try {
        inputValidator.validateVisitDate(visitDateInput);
        this.#orderSheet.setVisitDate(Number(visitDateInput));
        break;
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

  async getOrderedMenus() {
    const inputValidator = new InputValidator();
    while (true) {
      const orderedMenusInput = removeWhiteSpaceFromBothEndsOfString(
        await this.#inputView.readMenus()
      );
      try {
        inputValidator.validateOrderedMenus(orderedMenusInput);
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
    const resultOutputFormat = generateResultFormat({
      ...this.#orderSheet.getResult(),
    });
    this.#outputView.printResult(resultOutputFormat);
  }
}

export default EventPlannerController;
