import EventPlannerController from './controller/EventPlannerController.js';
class App {
  async run() {
    const eventPlannerController = new EventPlannerController();
    await eventPlannerController.start();
  }
}

export default App;
