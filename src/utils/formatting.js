import { GUIDE_MESSAGES } from '../constants/messages.js';
import {
  RESULT_BENEFIT_TITLES,
  RESULT_ITEM_TITLES,
} from '../constants/resultTitles.js';
import { SEPARATORS } from '../constants/separators.js';
import { UNITS } from '../constants/units.js';
import { GIFT_MENUS } from '../constants/gifts.js';
import { SIGNS } from '../constants/signs.js';
import { BADGES } from '../constants/badges.js';

const generateResultStartMessageFormat = (visitDate) =>
  `12${UNITS.MONTH} ${visitDate}${UNITS.DATE}에 ${GUIDE_MESSAGES.SHOW_RESULT}`;

const generateOrderedMenusFormat = (orderedMenus) => {
  return `${RESULT_ITEM_TITLES.ORDERED_MENUS}${
    SEPARATORS.LINE_BREAK_SEPARATOR
  }${Object.entries(orderedMenus)
    .map((orderedMenu) => {
      const [orderedMenuName, orderedMenuCount] = orderedMenu;
      return `${orderedMenuName} ${orderedMenuCount}${UNITS.COUNT}`;
    })
    .join(SEPARATORS.LINE_BREAK_SEPARATOR)}`;
};

const generateNumberWithCommasFormat = (number) => number.toLocaleString();

const generateTotalOrderAmountFormat = (totalOrderAmount) => {
  return `${RESULT_ITEM_TITLES.TOTAL_ORDER_AMOUNT}${
    SEPARATORS.LINE_BREAK_SEPARATOR
  }${generateNumberWithCommasFormat(totalOrderAmount)}${UNITS.WON}`;
};

const generateGiftMenuFormat = (giftAmount) => {
  return `${RESULT_ITEM_TITLES.GIFT_MENU}${SEPARATORS.LINE_BREAK_SEPARATOR}${
    giftAmount
      ? `${GIFT_MENUS.GIFT_MENU} 1${UNITS.COUNT}`
      : GUIDE_MESSAGES.NOT_EXSIT_MATCHED_RESULT
  }`;
};

const generateDetailFormat = (benefitTitle, benefitAmount) => {
  return benefitAmount
    ? `${benefitTitle}: ${SIGNS.MINUS}${generateNumberWithCommasFormat(
        benefitAmount
      )}${UNITS.WON}`
    : '';
};

const generateBenefitDetailsFormat = ({ tbA, cddA, wddA, wedA, sdA, gA }) => {
  const benefitDetailsTitle = `${RESULT_ITEM_TITLES.BENEFIT_DETAILS}${SEPARATORS.LINE_BREAK_SEPARATOR}`;
  if (tbA === 0)
    return `${benefitDetailsTitle}${GUIDE_MESSAGES.NOT_EXSIT_MATCHED_RESULT}`;
  const benefitDetails = [];
  benefitDetails.push(generateDetailFormat(RESULT_BENEFIT_TITLES.CDD, cddA));
  benefitDetails.push(generateDetailFormat(RESULT_BENEFIT_TITLES.WDD, wddA));
  benefitDetails.push(generateDetailFormat(RESULT_BENEFIT_TITLES.WED, wedA));
  benefitDetails.push(generateDetailFormat(RESULT_BENEFIT_TITLES.SD, sdA));
  benefitDetails.push(generateDetailFormat(RESULT_BENEFIT_TITLES.G, gA));
  return `${benefitDetailsTitle}${benefitDetails
    .filter((benefitDetail) => benefitDetail.length)
    .join(SEPARATORS.LINE_BREAK_SEPARATOR)}`;
};

const generateTotalBenefitAmountFormat = (totalBenefitAmount) => {
  return `${RESULT_ITEM_TITLES.TOTAL_BENEFIT_AMOUNT}${
    SEPARATORS.LINE_BREAK_SEPARATOR
  }${
    totalBenefitAmount
      ? `${SIGNS.MINUS}${generateNumberWithCommasFormat(totalBenefitAmount)}`
      : 0
  }${UNITS.WON}`;
};

const generatePaymentAmountFormat = (paymentAmount) => {
  return `${RESULT_ITEM_TITLES.PAYMENT_AMOUNT}${
    SEPARATORS.LINE_BREAK_SEPARATOR
  }${generateNumberWithCommasFormat(paymentAmount)}${UNITS.WON}`;
};

const generateEventBadgeFormat = (eventBadge) => {
  return `${RESULT_ITEM_TITLES.EVENT_BADGE}${SEPARATORS.LINE_BREAK_SEPARATOR}${
    eventBadge === BADGES.NOT_MATCHED_BADGE
      ? GUIDE_MESSAGES.NOT_EXSIT_MATCHED_RESULT
      : eventBadge
  }`;
};

export const generateResultFormat = (params) => {
  return [
    generateResultStartMessageFormat(params.visitDate),
    generateOrderedMenusFormat(params.orderedMenus),
    generateTotalOrderAmountFormat(params.totalOrderAmount),
    generateGiftMenuFormat(params.giftAmount),
    generateBenefitDetailsFormat({
      tbA: params.totalBenefitAmount,
      ...params.benefitAmounts,
    }),
    generateTotalBenefitAmountFormat(params.totalBenefitAmount),
    generatePaymentAmountFormat(params.paymentAmount),
    generateEventBadgeFormat(params.eventBadge),
  ].join(SEPARATORS.RESULT_ITEM_SEOARATOR);
};
