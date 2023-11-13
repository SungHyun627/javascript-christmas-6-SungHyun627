import InputView from '../view/InputView.js';
import InputValidator from '../validator/InputValidator.js';
import OutputView from '../view/OutputView.js';
import {
  getOrderedMenus,
  removeWhiteSpaceFromBothEndsOfString,
} from '../utils/general.js';
import PriceCalculator from '../model/priceCalculator.js';
import { Console } from '@woowacourse/mission-utils';

class EventPlannerController {
  #inputView;
  #outputView;
  #priceCalculator;
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#priceCalculator = new PriceCalculator();
  }

  async start() {
    const visitDate = await this.getVisitDate();
    const orderedMenus = await this.getOrderedMenus();
    const totalAmountBeforeDiscount =
      this.#priceCalculator.getTotalAmountBeforeDiscount(orderedMenus);
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

  async getOrderedMenus() {
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
