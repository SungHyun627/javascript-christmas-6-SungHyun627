export const GUIDE_MESSAGES = Object.freeze({
  ENTER_VISIT_DATE:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  RETYPE: '다시 입력해 주세요.',
});

export const ERROR_MESSAGES = Object.freeze({
  NOT_VALID_VISIT_DATE: `유효하지 않은 날짜입니다. ${GUIDE_MESSAGES.RETYPE}`,
});
