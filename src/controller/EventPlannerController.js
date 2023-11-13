import InputView from '../view/InputView.js';
import InputValidator from '../validator/InputValidator.js';
import OutputView from '../view/OutputView.js';
import { removeWhiteSpaceFromBothEndsOfString } from '../utils/general.js';
import {
  MENU_SEPARATOR,
  MENU_COUNT_SEOARATOR,
} from '../constants/separators.js';

class EventPlannerController {
  #inputView;
  #outputView;
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async start() {
    const visitDate = await this.getVisitDate();
    const orderedMenus = { ...(await this.getMenus()) };
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
        const orderedMenus = {};
        menusInput.split(MENU_SEPARATOR).forEach((menu) => {
          const [menuName, menuCount] = menu.split(MENU_COUNT_SEOARATOR);
          orderedMenus[menuName] = Number(menuCount);
        });
        return orderedMenus;
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }

    return menusInput;
  }
}

export default EventPlannerController;
