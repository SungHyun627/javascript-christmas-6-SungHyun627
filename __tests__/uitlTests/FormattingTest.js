import { formatter } from '../../src/utils/formatting.js';

describe('출력형식을 생성하는 포맷팅 유틸 함수 테스트', () => {
  test('[generateResultStartMessageFormat] 함수. 결과 출력 메시지 포맷을 생성한다.', () => {
    const visitDate = 3;
    expect(formatter.generateResultStartMessageFormat(visitDate)).toStrictEqual(
      '12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!'
    );
  });

  test('[generateResultStartMessageFormat] 함수. 주문 메뉴 출력 포맷을 생성한다.', () => {
    const orderedMenus = {
      티본스테이크: 1,
      바비큐립: 1,
      초코케이크: 2,
      제로콜라: 1,
    };
    expect(formatter.generateOrderedMenusFormat(orderedMenus)).toStrictEqual(
      `<주문 메뉴>\n티본스테이크 1개\n바비큐립 1개\n초코케이크 2개\n제로콜라 1개`
    );
  });
  test('[generateNumberWithCommasFormat] 함수. 숫자에 3자리 간격으로 콤마를 삽입한 출력 포맷을 생성한다.', () => {
    const number = 1000;
    expect(formatter.generateNumberWithCommasFormat(number)).toStrictEqual(
      `1,000`
    );
  });

  test('[generateTotalOrderAmountFormat] 함수. 총 주문 금액 출력 포맷을 생성한다.', () => {
    const totalOrderAmount = 142000;
    expect(
      formatter.generateTotalOrderAmountFormat(totalOrderAmount)
    ).toStrictEqual(`<할인 전 총주문 금액>\n142,000원`);
  });

  test('[generateGiftMenuFormat] 함수. 증정 메뉴 출력 포맷을 생성한다.', () => {
    const giftAmount = 25000;
    expect(formatter.generateGiftMenuFormat(giftAmount)).toStrictEqual(
      `<증정 메뉴>\n샴페인 1개`
    );
  });

  test('[generateDetailFormat] 함수. 하나의 혜택 상세 내역 출력 포맷을 생성한다.', () => {
    const benefitTitle = '평일 할인';
    const benefitAmount = 4046;
    expect(
      formatter.generateDetailFormat(benefitTitle, benefitAmount)
    ).toStrictEqual(`평일 할인: -4,046원`);
  });
  test('[generateDetailsFormat] 함수. 모든 혜택 상세 내역 출력 포맷을 생성한다.', () => {
    const tbA = 31246;
    const cddA = 1200;
    const wddA = 4046;
    const wedA = 0;
    const sdA = 1000;
    const gA = 25000;
    expect(
      formatter.generateDetailsFormat({ tbA, cddA, wddA, wedA, sdA, gA })
    ).toStrictEqual(
      `<혜택 내역>\n크리스마스 디데이 할인: -1,200원\n평일 할인: -4,046원\n특별 할인: -1,000원\n증정 이벤트: -25,000원`
    );
  });
  test('[generateTotalBenefitAmountFormat] 함수. 총 혜택 금액 출력 포맷을 생성한다.', () => {
    const totalBenefitAmount = 31246;
    expect(
      formatter.generateTotalBenefitAmountFormat(totalBenefitAmount)
    ).toStrictEqual(`<총혜택 금액>\n-31,246원`);
  });
  test('[generatePaymentAmountFormat] 함수. 할인 후 예상 결제 금액 출력 포맷을 생성한다.', () => {
    const paymentAmount = 135754;
    expect(formatter.generatePaymentAmountFormat(paymentAmount)).toStrictEqual(
      `<할인 후 예상 결제 금액>\n135,754원`
    );
  });
  test('[generateEventBadgeFormat] 함수. 이벤트 뱃지 출력 포맷을 생성한다.', () => {
    const eventBadge = '산타';
    expect(formatter.generateEventBadgeFormat(eventBadge)).toStrictEqual(
      `<12월 이벤트 배지>\n산타`
    );
  });
  test('[generateResultFormat] 함수. 결과 출력 포맷을 생성한다.', () => {
    const orderedMenus = {
      티본스테이크: 1,
      바비큐립: 1,
      초코케이크: 2,
      제로콜라: 1,
    };
    const visitDate = 3;
    const totalBenefitAmount = 31246;
    const totalOrderAmount = 142000;
    const giftAmount = 25000;
    const paymentAmount = 135754;
    const eventBadge = '산타';
    const params = {
      visitDate,
      orderedMenus,
      totalOrderAmount,
      totalBenefitAmount,
      giftAmount,
      paymentAmount,
      eventBadge,
      benefitAmounts: {
        tbA: 31246,
        cddA: 1200,
        wddA: 4046,
        wedA: 0,
        sdA: 1000,
        gA: 25000,
      },
    };

    expect(formatter.generateResultFormat(params)).toStrictEqual(
      `12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!

<주문 메뉴>
티본스테이크 1개
바비큐립 1개
초코케이크 2개
제로콜라 1개

<할인 전 총주문 금액>
142,000원

<증정 메뉴>
샴페인 1개

<혜택 내역>
크리스마스 디데이 할인: -1,200원
평일 할인: -4,046원
특별 할인: -1,000원
증정 이벤트: -25,000원

<총혜택 금액>
-31,246원

<할인 후 예상 결제 금액>
135,754원

<12월 이벤트 배지>
산타`
    );
  });
});
