import EventBadgeValidator from '../../src/validators/EventBadgeValidator';

describe('받을 수 있는 이벤트 배지를 결정하는(GiftEventValidator) 클래스 테스트', () => {
  const eventBadgeValidator = new EventBadgeValidator();
  test.each([5000, 9999])(
    `[isStarBadgeGettable] 메서드. 별 배지를 받을 수 있는지를 판단한다.
      별 배지를 받을 수 있을 경우 true를 반환한다.
      `,
    (totalBenefitAmount) => {
      expect(eventBadgeValidator.isStarBadgeGettable(totalBenefitAmount)).toBe(
        true
      );
    }
  );
  test.each([-1, 4999, 10000])(
    `[isStarBadgeGettable] 메서드. 별 배지를 받을 수 있는지를 판단한다.
    별 배지를 받을 수 없을 경우 false를 반환한다.
      `,
    (totalBenefitAmount) => {
      expect(eventBadgeValidator.isStarBadgeGettable(totalBenefitAmount)).toBe(
        false
      );
    }
  );
  test.each([10000, 19999])(
    `[isTreeBadgeGettable] 메서드. 트리 배지를 받을 수 있는지를 판단한다.
    트리 배지를 받을 수 있을 경우 true를 반환한다.
      `,
    (totalBenefitAmount) => {
      expect(eventBadgeValidator.isTreeBadgeGettable(totalBenefitAmount)).toBe(
        true
      );
    }
  );
  test.each([-1, 9999, 20000])(
    `[isTreeBadgeGettable] 메서드. 트리 배지를 받을 수 있는지를 판단한다.
    트리 배지를 받을 수 없을 경우 false를 반환한다.
      `,
    (totalBenefitAmount) => {
      expect(eventBadgeValidator.isTreeBadgeGettable(totalBenefitAmount)).toBe(
        false
      );
    }
  );
  test.each([20000, 100000])(
    `[isSantaBadgeGettable] 메서드. 산타 배지를 받을 수 있는지를 판단한다.
    산타 배지를 받을 수 있을 경우 true를 반환한다.
      `,
    (totalBenefitAmount) => {
      expect(eventBadgeValidator.isSantaBadgeGettable(totalBenefitAmount)).toBe(
        true
      );
    }
  );
  test.each([-1, 19999])(
    `[isSantaBadgeGettable] 메서드. 산타 배지를 받을 수 있는지를 판단한다.
    산타 배지를 받을 수 없을 경우 false를 반환한다.
      `,
    (totalBenefitAmount) => {
      expect(eventBadgeValidator.isSantaBadgeGettable(totalBenefitAmount)).toBe(
        false
      );
    }
  );
});
