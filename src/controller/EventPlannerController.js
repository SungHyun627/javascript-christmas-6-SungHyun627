import InputView from '../view/InputView.js';
import InputValidator from '../validator/InputValidator.js';
import OutputView from '../view/OutputView.js';

class EventPlannerController {
  #inputView;
  #outputView;
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async start() {
    const visitDate = await this.getVisitDate();
    const menus = await this.getMenus();
  }

  async getVisitDate() {
    while (true) {
      const visitDateInput = await this.#inputView.readVisitDate();
      try {
        InputValidator.validateVisitDate(visitDateInput);
        return Number(visitDateInput);
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

  async getMenus() {
    const menusInput = await this.#inputView.readMenus();
    return menusInput;
  }
}

export default EventPlannerController;
