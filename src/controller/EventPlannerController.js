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
  }

  async getVisitDate() {
    while (true) {
      const visitDate = await this.#inputView.readVisitDate();
      try {
        InputValidator.validateVisitDate(visitDate);
        return Number(visitDate);
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }
}

export default EventPlannerController;
