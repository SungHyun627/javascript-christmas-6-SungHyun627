import {
  MENU_COUNT_SEOARATOR,
  MENU_SEPARATOR,
} from '../constants/separators.js';

export const removeWhiteSpaceFromBothEndsOfString = (input) => input.trim();
export const convertOrderedMenusInputIntoObject = (menusInput) => {
  const orderedMenus = {};
  menusInput.split(MENU_SEPARATOR).forEach((menu) => {
    const [menuName, menuCount] = menu.split(MENU_COUNT_SEOARATOR);
    orderedMenus[menuName] = Number(menuCount);
  });
  return orderedMenus;
};

export const throwError = (message) => {
  throw new Error(message);
};
