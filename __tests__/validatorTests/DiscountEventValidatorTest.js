import DiscountEventValidator from '../../src/validators/DiscountEventValidator.js';
import { DISCOUNT_EVENTS_DATES } from '../../src/constants/dates.js';

describe('할인 이벤트 유효성 검사(DiscountEventValidator) 클래스 테스트', () => {
  const discountEventValidator = new DiscountEventValidator();
  test.each([10000, 12000])(
    `[isDiscountEventApplicable] 메서드. 할인 이벤트를 진행할 수 있는지를 판단한다.
    전체 주문 금액이 10000원 이상일 때 true를 반환한다.
      `,
    (totalOrderAmount) => {
      expect(
        discountEventValidator.isDiscountEventApplicable(totalOrderAmount)
      ).toBe(true);
    }
  );
  test.each([0, 9999])(
    `[isDiscountEventApplicable] 메서드. 할인 이벤트를 진행할 수 있는지를 판단한다.
      전체 주문 금액이 10000원 미만일 때 false를 반환한다.
    `,
    (totalOrderAmount) => {
      expect(
        discountEventValidator.isDiscountEventApplicable(totalOrderAmount)
      ).toBe(false);
    }
  );

  test.each([1, 25])(
    `[isChristmasDdayDiscountApplicable] 메서드. 크리스마스 디데이 할인 이벤트를 진행할 수 있는지를 판단한다.
      진행할 수 있는 날짜인 경우 true를 반환한다.
    `,
    (visitDate) => {
      expect(
        discountEventValidator.isChristmasDdayDiscountApplicable(visitDate)
      ).toBe(true);
    }
  );
  test.each([0, 31])(
    `[isChristmasDdayDiscountApplicable] 메서드. 크리스마스 디데이 할인 이벤트를 진행할 수 있는지를 판단한다.
      진행할 수 없는 날짜인 경우 false를 반환한다.
    `,
    (visitDate) => {
      expect(
        discountEventValidator.isChristmasDdayDiscountApplicable(visitDate)
      ).toBe(false);
    }
  );
  test.each([...DISCOUNT_EVENTS_DATES.WEEKDAY_DISCOUNT_DATES])(
    `[isWeekDayDiscountApplicable] 메서드. 평일 할인 이벤트를 진행할 수 있는지를 판단한다.
      진행할 수 있는 날짜인 경우 true를 반환한다.
    `,
    (visitDate) => {
      expect(
        discountEventValidator.isWeekDayDiscountApplicable(visitDate)
      ).toBe(true);
    }
  );
  test.each([...DISCOUNT_EVENTS_DATES.WEEKEND_DISCOUNT_DATES])(
    `[isWeekDayDiscountApplicable] 메서드. 크리스마스 디데이 할인 이벤트를 진행할 수 있는지를 판단한다.
      진행할 수 없는 날짜인 경우 false를 반환한다.
    `,
    (visitDate) => {
      expect(
        discountEventValidator.isWeekDayDiscountApplicable(visitDate)
      ).toBe(false);
    }
  );
  test.each([...DISCOUNT_EVENTS_DATES.WEEKEND_DISCOUNT_DATES])(
    `[isWeekendDiscountApplicable] 메서드. 주말 할인 이벤트를 진행할 수 있는지를 판단한다.
      진행할 수 있는 날짜인 경우 true를 반환한다.
    `,
    (visitDate) => {
      expect(
        discountEventValidator.isWeekendDiscountApplicable(visitDate)
      ).toBe(true);
    }
  );
  test.each([...DISCOUNT_EVENTS_DATES.WEEKDAY_DISCOUNT_DATES])(
    `[isWeekendDiscountApplicable] 메서드. 주말 할인 이벤트를 진행할 수 있는지를 판단한다.
      진행할 수 없는 날짜인 경우 false를 반환한다.
    `,
    (visitDate) => {
      expect(
        discountEventValidator.isWeekendDiscountApplicable(visitDate)
      ).toBe(false);
    }
  );
  test.each([...DISCOUNT_EVENTS_DATES.SPECIAL_DISCOUNT_DATES])(
    `[isSpecialDiscountApplicable] 메서드. 특별 할인 이벤트를 진행할 수 있는지를 판단한다.
      진행할 수 있는 날짜인 경우 true를 반환한다.
    `,
    (visitDate) => {
      expect(
        discountEventValidator.isSpecialDiscountApplicable(visitDate)
      ).toBe(true);
    }
  );
  test.each([
    1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 26,
    27, 28, 29, 30,
  ])(
    `[isSpecialDiscountApplicable] 메서드. 특별 할인 이벤트를 진행할 수 있는지를 판단한다.
      진행할 수 없는 날짜인 경우 false를 반환한다.
    `,
    (visitDate) => {
      expect(
        discountEventValidator.isSpecialDiscountApplicable(visitDate)
      ).toBe(false);
    }
  );
});
