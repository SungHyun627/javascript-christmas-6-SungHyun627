import { GUIDE_MESSAGES } from '../constants/messages.js';
import {
  RESULT_BENEFIT_TITLES,
  RESULT_ITEM_TITLES,
} from '../constants/resultTitles.js';
import { SEPARATORS } from '../constants/separators.js';
import { UNITS } from '../constants/units.js';
import { GIFT_MENU } from '../constants/gifts.js';
import { MINUS } from '../constants/signs.js';

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
  return `${RESULT_ITEM_TITLES.TOTAL_ORDER_AMOUNT}${
    SEPARATORS.LINE_BREAK_SEPARATOR
  }${formatNumberWithCommas(totalOrderAmount)}${UNITS.WON}`;
};

export const formatGiftMenu = (giftAmount) => {
  return `${RESULT_ITEM_TITLES.GIFT_MENU}${SEPARATORS.LINE_BREAK_SEPARATOR}${
    giftAmount
      ? `${GIFT_MENU} 1${UNITS.COUNT}`
      : GUIDE_MESSAGES.NOT_EXSIT_MATCHED_RESULT
  }`;
};

export const formatTotalBenefitAmount = (totalBenefitAmount) => {
  return `${RESULT_ITEM_TITLES.TOTAL_BENEFIT_AMOUNT}${
    SEPARATORS.LINE_BREAK_SEPARATOR
  }${
    totalBenefitAmount
      ? `${MINUS}${formatNumberWithCommas(totalBenefitAmount)}`
      : 0
  }${UNITS.WON}`;
};
