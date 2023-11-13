import InputView from '../view/InputView.js';
import InputValidator from '../validator/InputValidator.js';
import OutputView from '../view/OutputView.js';
import {
  getOrderedMenus,
  removeWhiteSpaceFromBothEndsOfString,
} from '../utils/general.js';

class EventPlannerController {
  #inputView;
  #outputView;
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async start() {
    const visitDate = await this.getVisitDate();
    const orderedMenus = await this.getMenus();
  }

  async getVisitDate() {
    while (true) {
      const visitDateInput = removeWhiteSpaceFromBothEndsOfString(
        await this.#inputView.readVisitDate()
      );
      try {
        InputValidator.validateVisitDate(visitDateInput);
        return Number(visitDateInput);
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

  async getMenus() {
    while (true) {
      const orderedMenusInput = removeWhiteSpaceFromBothEndsOfString(
        await this.#inputView.readMenus()
      );
      try {
        InputValidator.validateOrderedMenus(orderedMenusInput);
        return getOrderedMenus(orderedMenusInput);
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }
}

export default EventPlannerController;
