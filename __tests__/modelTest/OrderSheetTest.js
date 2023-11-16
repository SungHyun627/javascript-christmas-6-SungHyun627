import OrderSheet from '../../src/models/OrderSheet.js';

describe('주문 내역서(OrderSheet) 클래스 테스트', () => {
  let orderSheet;
  const orderedMenus = {
    티본스테이크: 1,
    바비큐립: 1,
    초코케이크: 2,
    제로콜라: 1,
  };
  const visitDate = 3;
  beforeEach(() => (orderSheet = new OrderSheet()));

  test('[setVisitDate] 메서드. 방문 날짜를 설정한다.', () => {
    orderSheet.setVisitDate(visitDate);
    expect(orderSheet.getVisitDate()).toStrictEqual(visitDate);
  });

  test('[getVisitDate] 메서드. OrderSheet 인스턴스에 설정된 방문 날짜를 번환한다.', () => {
    orderSheet.setVisitDate(visitDate);
    expect(orderSheet.getVisitDate(visitDate)).toStrictEqual(visitDate);
  });

  test('[setOrderedMenus] 메서드. 주문한 메뉴를 설정한다.', () => {
    orderSheet.setOrderedMenus(orderedMenus);
    expect(orderSheet.getOrderedMenus()).toStrictEqual(orderedMenus);
  });
  test('[getOrderedMenus] 메서드. OrderSheet 인스턴스에 설정된 주문 메뉴 리스트를 반환한다.', () => {
    orderSheet.setOrderedMenus(orderedMenus);
    expect(orderSheet.getOrderedMenus()).toStrictEqual(orderedMenus);
  });
  test('[getTotalOrderAmount] 메서드. 할인 전 총 주문 금액을 반환한다.', () => {
    orderSheet.setVisitDate(visitDate);
    orderSheet.setOrderedMenus(orderedMenus);
    expect(orderSheet.getTotalOrderAmount()).toBe(142000);
  });
  test('[getGiftAmount] 메서드. 증정 이벤트로 헤택 받은 금액을 반환한다.', () => {
    orderSheet.setVisitDate(visitDate);
    orderSheet.setOrderedMenus(orderedMenus);
    expect(orderSheet.getGiftAmount()).toBe(25000);
  });
  test('[getTotalDiscountAmount] 메서드. 총 할인 금액을 반환한다.', () => {
    orderSheet.setVisitDate(visitDate);
    orderSheet.setOrderedMenus(orderedMenus);
    expect(orderSheet.getTotalDiscountAmount()).toBe(6246);
  });
  test('[getTotalBenefitAmount] 메서드. 총 혜택 금액을 반환한다.', () => {
    orderSheet.setVisitDate(visitDate);
    orderSheet.setOrderedMenus(orderedMenus);
    expect(orderSheet.getTotalBenefitAmount()).toBe(31246);
  });
  test('[getPaymentAmount] 메서드. 할인 후 예상 결제 금액을 반환한다.', () => {
    orderSheet.setVisitDate(visitDate);
    orderSheet.setOrderedMenus(orderedMenus);
    expect(orderSheet.getPaymentAmount()).toBe(135754);
  });
  test('[getChristmasDdayDiscountAmount] 메서드. 크리스마스 디데이 할인에 따른 할인 금액을 반환한다.', () => {
    orderSheet.setVisitDate(visitDate);
    orderSheet.setOrderedMenus(orderedMenus);
    expect(orderSheet.getChristmasDdayDiscountAmount()).toBe(1200);
  });
  test('[getWeekDayDiscountAmount] 메서드. 평일 할인에 따른 할인 금액을 반환한다.', () => {
    orderSheet.setVisitDate(visitDate);
    orderSheet.setOrderedMenus(orderedMenus);
    expect(orderSheet.getWeekDayDiscountAmount()).toBe(4046);
  });
  test('[getWeekendDiscountAmount] 메서드. 주말 할인에 따른 할인 금액을 반환한다.', () => {
    orderSheet.setVisitDate(visitDate);
    orderSheet.setOrderedMenus(orderedMenus);
    expect(orderSheet.getWeekendDiscountAmount()).toBe(0);
  });
  test('[getSpecialDiscountAmount] 메서드. 특별 할인에 따른 할인 금액을 반환한다.', () => {
    orderSheet.setVisitDate(visitDate);
    orderSheet.setOrderedMenus(orderedMenus);
    expect(orderSheet.getSpecialDiscountAmount()).toBe(1000);
  });
  test('[getEventBadge] 메서드. 총 혜택 금액에 따라 받을 수 있는 이벤트 배지를 반환한다.', () => {
    orderSheet.setVisitDate(visitDate);
    orderSheet.setOrderedMenus(orderedMenus);
    expect(orderSheet.getEventBadge()).toEqual('산타');
  });
});
