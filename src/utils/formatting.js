import { GUIDE_MESSAGES } from '../constants/messages.js';
import { RESULT_ITEM_TITLES } from '../constants/resultItemTItles.js';
import { SEPARATORS } from '../constants/separators.js';

export const formatResultStartMessage = (visitDate) =>
  `12월 ${visitDate}일에 ${GUIDE_MESSAGES.SHOW_RESULT}`;

export const formatOrderedMenus = (orderedMenus) => {
  return `${RESULT_ITEM_TITLES.ORDERED_MENUS}${
    SEPARATORS.OUTPUT_FORMAT_SEPARATOR
  }${Object.entries(orderedMenus)
    .map((orderedMenu) => {
      const [orderedMenuName, orderedMenuCount] = orderedMenu;
      return `${orderedMenuName} ${orderedMenuCount}개`;
    })
    .join(SEPARATORS.OUTPUT_FORMAT_SEPARATOR)}`;
};
