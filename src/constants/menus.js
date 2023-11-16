export const MENU_TYPES = Object.freeze({
  APPETIZER: 'APPETIZER',
  MAIN_DISH: 'MAIN_DISH',
  DESSERT: 'DESSERT',
  DRINK: 'DRINK',
});

export const MENU_LIST = Object.freeze({
  양송이수프: {
    MENU_TYPE: MENU_TYPES.APPETIZER,
    MENU_PRICE: 6000,
  },
  타파스: {
    MENU_TYPE: MENU_TYPES.APPETIZER,
    MENU_PRICE: 5500,
  },
  시저샐러드: {
    MENU_TYPE: MENU_TYPES.APPETIZER,
    MENU_PRICE: 8000,
  },
  티본스테이크: {
    MENU_TYPE: MENU_TYPES.MAIN_DISH,
    MENU_PRICE: 55000,
  },
  바비큐립: {
    MENU_TYPE: MENU_TYPES.MAIN_DISH,
    MENU_PRICE: 54000,
  },
  해산물파스타: {
    MENU_TYPE: MENU_TYPES.MAIN_DISH,
    MENU_PRICE: 35000,
  },
  크리스마스파스타: {
    MENU_TYPE: MENU_TYPES.MAIN_DISH,
    MENU_PRICE: 25000,
  },
  초코케이크: {
    MENU_TYPE: MENU_TYPES.DESSERT,
    MENU_PRICE: 15000,
  },
  아이스크림: {
    MENU_TYPE: MENU_TYPES.DESSERT,
    MENU_PRICE: 5000,
  },
  제로콜라: {
    MENU_TYPE: MENU_TYPES.DRINK,
    MENU_PRICE: 3000,
  },
  레드와인: {
    MENU_TYPE: MENU_TYPES.DRINK,
    MENU_PRICE: 60000,
  },
  샴페인: {
    MENU_TYPE: MENU_TYPES.DRINK,
    MENU_PRICE: 25000,
  },
});

export const MENU_PROPERTIES = Object.freeze({
  MENU_TYPE: 'MENU_TYPE',
  MENU_NAME: 'MENU_NAME',
  MENU_PRICE: 'MENU_PRICE',
});

export const MENU_CRITERIAS = Object.freeze({
  MIN_ORDERED_MENU_COUNT: 1,
  MAX_TOTAL_COUNTS: 20,
});
