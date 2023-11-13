import InputView from '../view/InputView.js';
import InputValidator from '../validator/InputValidator.js';
import OutputView from '../view/OutputView.js';
import {
  convertOrderedMenusInputIntoObject,
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
      const menusInput = removeWhiteSpaceFromBothEndsOfString(
        await this.#inputView.readMenus()
      );
      try {
        InputValidator.validateMenus(menusInput);
        return convertOrderedMenusInputIntoObject(menusInput);
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }
}

export default EventPlannerController;
