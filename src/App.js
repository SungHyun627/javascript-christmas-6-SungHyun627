import EventPlannerController from './controllers/EventPlannerController.js';

class App {
  async run() {
    const eventPlannerController = new EventPlannerController();
    await eventPlannerController.start();
  }
}

export default App;
