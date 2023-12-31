export const GUIDE_MESSAGES = Object.freeze({
  START: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  ENTER_VISIT_DATE:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  RETYPE: '다시 입력해 주세요.',
  ENTER_MENUS:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
  SHOW_RESULT: '우테코 식당에서 받을 이벤트 혜택 미리 보기!',
  NOT_EXSIT_MATCHED_RESULT: '없음',
});

export const ERROR_MESSAGES = Object.freeze({
  NOT_VALID_VISIT_DATE: `[ERROR] 유효하지 않은 날짜입니다. ${GUIDE_MESSAGES.RETYPE}`,
  NOT_VALID_MENUS: `[ERROR] 유효하지 않은 주문입니다. ${GUIDE_MESSAGES.RETYPE}`,
  ONLY_DRINK: `[ERROR] 음료만 주문할 수 없습니다. ${GUIDE_MESSAGES.RETYPE}`,
  OVERORDER_MAX_TOTAL_COUNTS: `[ERROR] 한 번에 최대 20개까지만 주문할 수 있습니다. ${GUIDE_MESSAGES.RETYPE}`,
});
