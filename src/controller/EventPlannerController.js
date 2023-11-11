import InputView from '../view/InputView.js';

class EventPlannerController {
  #inputView;
  constructor() {
    this.#inputView = new InputView();
  }

  async start() {
    await this.getVisitDate();
  }

  async getVisitDate() {
    const visitDate = Number(await this.#inputView.readVisitDate());
  }
}

export default EventPlannerController;
