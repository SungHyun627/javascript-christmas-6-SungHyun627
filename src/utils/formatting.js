import { GUIDE_MESSAGES } from '../constants/messages.js';
import { RESULT_ITEM_TITLES } from '../constants/resultItemTItles.js';
import { SEPARATORS } from '../constants/separators.js';
import { UNITS } from '../constants/units.js';

export const formatResultStartMessage = (visitDate) =>
  `12${UNITS.MONTH} ${visitDate}${UNITS.DATE}에 ${GUIDE_MESSAGES.SHOW_RESULT}`;

export const formatOrderedMenus = (orderedMenus) => {
  return `${RESULT_ITEM_TITLES.ORDERED_MENUS}${
    SEPARATORS.LINE_BREAK_SEPARATOR
  }${Object.entries(orderedMenus)
    .map((orderedMenu) => {
      const [orderedMenuName, orderedMenuCount] = orderedMenu;
      return `${orderedMenuName} ${orderedMenuCount}${UNITS.COUNT}`;
    })
    .join(SEPARATORS.LINE_BREAK_SEPARATOR)}`;
};

const formatNumberWithCommas = (number) => number.toLocaleString();

export const formatTotalOrderAmount = (totalOrderAmount) => {
  return `${formatNumberWithCommas(totalOrderAmount)}${UNITS.WON}`;
};
