import { SEPARATORS } from '../constants/separators.js';
import { MENU_LIST, MENU_PROPERTIES, MENU_TYPES } from '../constants/menus.js';

export const removeWhiteSpaceFromBothEndsOfString = (input) => input.trim();

export const getOrderedMenusObject = (menusInput) => {
  const orderedMenus = {};
  menusInput.split(SEPARATORS.MENU_SEPARATOR).forEach((menu) => {
    const [menuName, menuCount] = menu.split(SEPARATORS.MENU_COUNT_SEOARATOR);
    orderedMenus[menuName] = Number(menuCount);
  });
  return orderedMenus;
};
export const getOrderedMenusNames = (menusInput) => {
  return menusInput.split(SEPARATORS.MENU_SEPARATOR).map((menu) => {
    const [menuName, menuCount] = menu.split(SEPARATORS.MENU_COUNT_SEOARATOR);
    return menuName;
  });
};
export const getOrderedMenusCounts = (menusInput) => {
  return menusInput.split(SEPARATORS.MENU_SEPARATOR).map((menu) => {
    const [menuName, menuCount] = menu.split(SEPARATORS.MENU_COUNT_SEOARATOR);
    return Number(menuCount);
  });
};

export const isDrinkMenu = (menuName) => {
  return MENU_LIST[menuName][MENU_PROPERTIES.MENU_TYPE] === MENU_TYPES.DRINK;
};

export const throwError = (message) => {
  throw new Error(message);
};
