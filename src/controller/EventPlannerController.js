import InputView from '../view/InputView.js';
import InputValidator from '../validator/InputValidator.js';
import OutputView from '../view/OutputView.js';
import {
  removeWhiteSpaceFromBothEndsOfString,
  getOrderedMenusObject,
} from '../utils/general.js';
import OrderSheet from '../model/OrderSheet.js';
import { MENU_LIST, MENU_PROPERTIES } from '../constants/menus.js';
import { Console } from '@woowacourse/mission-utils';

class EventPlannerController {
  #inputView;
  #outputView;
  #orderSheet;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#orderSheet = new OrderSheet();
  }

  async start() {
    await this.getVisitDate();
    await this.getOrderedMenus();
    const totalAmountBeforeDiscount = this.getTotalAmountBeforeDiscount();
    Console.print(totalAmountBeforeDiscount);
  }

  async getVisitDate() {
    while (true) {
      const visitDateInput = removeWhiteSpaceFromBothEndsOfString(
        await this.#inputView.readVisitDate()
      );
      try {
        InputValidator.validateVisitDate(visitDateInput);
        this.#orderSheet.setVisitDate(Number(visitDateInput));
        break;
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
        this.#orderSheet.setOrderedMenus(
          getOrderedMenusObject(orderedMenusInput)
        );
        break;
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

  getTotalAmountBeforeDiscount() {
    const menus = this.#orderSheet.getOrderedMenus();
    const menuNames = Object.keys(menus);
    return menuNames.reduce((acc, menuName) => {
      const menuCount = menus[menuName];
      return acc + MENU_LIST[menuName][MENU_PROPERTIES.MENU_PRICE] * menuCount;
    }, 0);
  }
}

export default EventPlannerController;
