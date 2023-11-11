import EventPlannerController from './controller/EventPlannerController.js';
class App {
  #eventPlannerController;

  async run() {
    this.#eventPlannerController = new EventPlannerController();
    await this.#eventPlannerController.start();
  }
}

export default App;
