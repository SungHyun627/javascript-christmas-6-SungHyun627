import GiftEventValidator from '../../src/validators/GiftEventValidator';

describe('증정 이벤트 유효성 검사(GiftEventValidator) 클래스 테스트', () => {
  const giftEventValidator = new GiftEventValidator();
  test.each([120000, 1000000])(
    `[isGiftEventApplicable] 메서드. 증정 이벤트를 진행할 수 있는지를 판단한다.
      할인 전 전체 주문 금액이 120000원 이상일 때 true를 반환한다.
      `,
    (totalOrderAmount) => {
      expect(giftEventValidator.isGiftEventApplicable(totalOrderAmount)).toBe(
        true
      );
    }
  );
  test.each([-1, 0, 119999])(
    `[isGiftEventApplicable] 메서드. 증정 이벤트를 진행할 수 있는지를 판단한다.
      할인 전 전체 주문 금액이 120000원 미만일 때 false를 반환한다.
    `,
    (totalOrderAmount) => {
      expect(giftEventValidator.isGiftEventApplicable(totalOrderAmount)).toBe(
        false
      );
    }
  );
});
