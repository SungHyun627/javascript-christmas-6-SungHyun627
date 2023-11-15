import { ERROR_MESSAGES } from '../../src/constants/messages.js';
import InputValidator from '../../src/validators/InputValidator.js';

describe('입력값 유효성 검사(InputValidator) 클래스 테스트', () => {
  const inputValidator = new InputValidator();
  test.each(['', '32', '%[', '입력값', '{abc}'])(
    '[validateVisitDate] 메서드. 방문 날짜의 입력값이 1부터 31사이의 숫자형 문자열이 아닌 경우, 에러가 발생한다.',
    (invalidVisitDateInput) => {
      expect(() => {
        inputValidator.validateVisitDate(invalidVisitDateInput);
      }).toThrow(ERROR_MESSAGES.NOT_VALID_VISIT_DATE);
    }
  );
  test.each([
    '해산물파스타 - 2, 레드와인-1,초코케이크-1',
    '해산물파스타-2,레드와인-1,당근케이크-1',
    '해산물파스타-2,레드와인-1,초코케이크-0',
    '해산물파스타-2,레드와인-1,초코케이크-1,레드와인-2',
  ])(
    `[validateOrderedMenus] 메서드.
     메뉴 형식이 올바르지 않거나, 메뉴에 없는 입력이 들어오거나
     메뉴의 개수가 1보다 작거나, 중복메뉴가 존재하는 경우, 에러가 발생한다.`,
    (invalidMenusInput) => {
      expect(() => {
        inputValidator.validateOrderedMenus(invalidMenusInput);
      }).toThrow(ERROR_MESSAGES.NOT_VALID_MENUS);
    }
  );
  test.each(['레드와인-2', '제로콜라-3,레드와인-2,샴페인-2'])(
    '[validateOrderedMenus] 메서드. 주문메뉴가 음료 메뉴만 있을 시, 에러가 발생한다.',
    (invalidMenusInput) => {
      expect(() => {
        inputValidator.validateOrderedMenus(invalidMenusInput);
      }).toThrow(ERROR_MESSAGES.ONLY_DRINK);
    }
  );

  test.each(['해산물파스타-21', '해산물파스타-12,레드와인-5,초코케이크-4'])(
    '[validateOrderedMenus] 메서드. 총 주문 개수가 20개가 넘을 시, 에러가 발생한다.',
    (invalidMenusInput) => {
      expect(() => {
        inputValidator.validateOrderedMenus(invalidMenusInput);
      }).toThrow(ERROR_MESSAGES.OVERORDER_MAX_TOTAL_COUNTS);
    }
  );

  test.each([
    '초코케이크 -2, ',
    '초코 케이크-2',
    '초코케이크- 2',
    '초코케이크2',
    '초코케이크',
    '초코케이크-',
  ])(
    '[validateOrderedMenuFormat] 메서드. 주문할 메뉴와 개수의 형식이 `메뉴이름-메뉴개수` 형식이 아닌 경우, 에러가 발생한다.',
    (invalidMenuFormat) => {
      expect(() => {
        inputValidator.validateOrderedMenuFormat(invalidMenuFormat);
      }).toThrow(ERROR_MESSAGES.NOT_VALID_MENUS);
    }
  );
  test.each([
    '해산물파스타 -2,레드와인-1,초코케이크-1',
    '해산물 파스타-2,레드와인-1,초코케이크-1',
    '해산물파스타-2,레드와인- 1,초코케이크-1',
    '해산물파스타-2,레드와인1,초코케이크-1',
    '해산물파스타-2,레드와인-1,초코케이크',
    '해산물파스타-2,레드와인-1,초코케이크-',
  ])(
    '[validateOrderedMenusInputFormat] 메서드. 주문할 메뉴와 개수의 형식들이 valid하지 않은 경우, 에러가 발생한다.',
    (invalidMenusInput) => {
      expect(() => {
        inputValidator.validateOrderedMenusInputFormat(invalidMenusInput);
      }).toThrow(ERROR_MESSAGES.NOT_VALID_MENUS);
    }
  );
  test.each(['당근케이크'])(
    '[validateOrderedMenuInMenuList] 메서드. 주문할 메뉴가 메뉴판에 없는 경우, 에러가 발생한다.',
    (invalidMenuName) => {
      expect(() => {
        inputValidator.validateOrderedMenusInputFormat(invalidMenuName);
      }).toThrow(ERROR_MESSAGES.NOT_VALID_MENUS);
    }
  );
  test.each(['해산물파스타-2,레드와인-1,당근케이크-2'])(
    '[validateEveryOrderedMenuInMenuList] 메서드. 주문할 메뉴들 중 메뉴판에 없는 메뉴가 존재하는 경우, 에러가 발생한다.',
    (invalidMenusInput) => {
      expect(() => {
        inputValidator.validateEveryOrderedMenuInMenuList(invalidMenusInput);
      }).toThrow(ERROR_MESSAGES.NOT_VALID_MENUS);
    }
  );
  test.each([0, -1])(
    '[validateOrderedMenuCountIsBiggerThanZero] 메서드. 메뉴의 개수가 1보다 작은 경우, 에러가 발생한다.',
    (invalidMenuCount) => {
      expect(() => {
        inputValidator.validateOrderedMenuCountIsBiggerThanZero(
          invalidMenuCount
        );
      }).toThrow(ERROR_MESSAGES.NOT_VALID_MENUS);
    }
  );
  test.each(['해산물파스타-2,레드와인-1,초코케이크-0'])(
    '[validateEveryOrderedMenuCountIsBiggerThanZero] 메서드. 주문할 메뉴들 중 메뉴의 개수가 1보다 작은 메뉴가 존재하는 경우, 에러가 발생한다.',
    (invalidMenusInput) => {
      expect(() => {
        inputValidator.validateEveryOrderedMenuCountIsBiggerThanZero(
          invalidMenusInput
        );
      }).toThrow(ERROR_MESSAGES.NOT_VALID_MENUS);
    }
  );
  test.each(['해산물파스타-2,레드와인-1,초코케이크-1,레드와인-2'])(
    '[validateIsDuplicatedMenuName] 메서드. 중복 메뉴가 존재하는 경우, 에러가 발생한다.',
    (invalidMenusInput) => {
      expect(() => {
        inputValidator.validateIsDuplicatedMenuName(invalidMenusInput);
      }).toThrow(ERROR_MESSAGES.NOT_VALID_MENUS);
    }
  );
  test.each(['레드와인-2', '제로콜라-3,레드와인-2,샴페인-2'])(
    '[validateOnlyDrinkInOrderedMenus] 메서드. 주문메뉴가 음료 메뉴만 있을 시, 에러가 발생한다.',
    (invalidMenusInput) => {
      expect(() => {
        inputValidator.validateOnlyDrinkInOrderedMenus(invalidMenusInput);
      }).toThrow(ERROR_MESSAGES.ONLY_DRINK);
    }
  );
  test.each(['해산물파스타-21', '해산물파스타-12,레드와인-5,초코케이크-4'])(
    '[validateTotalCounts] 메서드. 총 주문 개수가 20개가 넘을 시, 에러가 발생한다.',
    (invalidMenusInput) => {
      expect(() => {
        inputValidator.validateTotalCounts(invalidMenusInput);
      }).toThrow(ERROR_MESSAGES.OVERORDER_MAX_TOTAL_COUNTS);
    }
  );
});
