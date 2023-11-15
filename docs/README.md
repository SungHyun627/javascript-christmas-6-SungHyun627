## 🎯 프로그래밍 요구사항

- Node.js 18.17.1 버전에서 실행 가능
- 프로그램 실행의 시작점은 `App.js`의 `run` 메서드
- `package.json`을 변경할 수 없고, 외부 라이브러리를 사용하지 않으며, 순수 Vanilla JS로만 구현
- Javascript 코드 컨벤션을 지키며 프로그래밍
- 프로그램 종료 시 `process.exit()` 호출 금지
- 프로그램 구현 완료 시, `ApplicationTest`의 모든 테스트가 성공
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동 금지
- indent depth를 3이 넘지 않도록 구현, 2까지 허용
- `함수(또는 메서드)`가 한 가지 일만 하도록 최대한 작게 작성
- Jest를 이용하여 본인이 정리한 기능 목록이 정상 독작함을 테스트코드로 확인
- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현
  - 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현
- else를 지양
- 도메인 로직에 단위 테스트를 구현, UI 로직에 대한 단위테스트는 제외
  - 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분
- 사용자가 잘못된 값을 입력할 경우 `throw`문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받음

### 추가된 요구사항

- 제공되는 `InputView`, `OutputView`객체를 활용해 구현
  - 입력과 출력을 담당하하는 객체를 별도로 구현
  - `InputView`, `OutputView`의 파일경로는 변경 가능
  - `InputView`, `OutputView`의 메서드의 이름과 인자는 필요에 따라 추가 및 변경 가능
  - 값 출력을 위해 필요한 메서드 추가 가능

### 라이브러리

- `@woowacourse/mission-utils`에서 제공하는 `Random` 및 `Console` API를 사용하여 구현

## 🚀 구현할 기능 목록

### 💡 고객으로부터 입력값을 받는 기능

✔︎ 입력값을 받을 때 양 끝에 있는 공백은 제거한다.

- [x] 고객으로부터 식당에 방문할 날짜를 입력 받는다.
- [x] 방문한 날짜의 입력값에 대한 예외가 발생하는 경우, 에러 메시지를 출력하고 다시 입력을 받는다.
  - [x] 식당 예상 방문 날짜가 1 이상 31 이하의 숫자이어야한다.
- [x] 고객으로부터 주문할 메뉴와 게수를 입력 받는다.
- [x] 주문할 메뉴와 게수의 입력값에 대한 예외가 발생하는 경우, 에러 메시지를 출력하고 다시 입력을 받는다.
  - [x] 메뉴 형식이 예시와 다른 경우, 예외가 발생한다.
        ✔︎ 메뉴 이름의 입력값으로는 숫자, 한글(가-힣), 알파벳, 언더스코어(`_`)가 가능하다.
    - 올바른 예시. 해산물파스타-2,레드와인-1,초코케이크-1
  - [x] 고객이 메뉴판에 없는 메뉴를 입력하는 경우, 예외가 발생한다.
  - [x] 메뉴의 개수는 1 이상의 숫자만 입력되어야 한다.
  - [x] 중복 메뉴를 입력한 경우 예외가 발생한다.
  - [x] 음료만 주문할 수 없다.
  - [x] 메뉴는 한 번에 최대 20개까지만 주문할 수 있다.

### 💡 각각의 할인 이벤트를 적용할 수 있는 지 판별하는 기능

#### 할인 이벤트를 적용할 수 있는 지 판별하는 기능

- [x] 총 주문 금액이 10,000원 이상일 때 할인 이벤트가 적용한다.

#### 방문 날짜에 적용할 수 있는 할인 이벤트를 판별하는 기능

- [x] 날짜가 2023.12.1 ~ 2023.12.25 사이에 해당하는 경우 크리스마스 디데이 할인이 적용된다.
- [x] 평일(일요일~목요일)인 경우 평일 할인이 적용된다.
- [x] 주말(금요일, 툐요일)인 경우 주말 할인이 적용된다.
- [x] 이벤트 달력에 별이 있으면, 특별 할인이 적용된다.

#### 증정 이벤트를 적용할 수 있는 지 판별하는 기능

- [x] 할인 전 총 주문 금액이 12만 원 이상일 때, 샴페인 1개를 증정하는 이벤트를 적용할 수 있다.

### 💡 할인 전 총 주문 금액을 계산하는 기능

- [x] 할인 전 총 주문 금액을 게산한다.

### 💡 할인 이벤트에 따른 각각의 할인 금액과, 총 할인 금액의 값을 계산하는 기능

- [x] 각 할인 이벤트에 따른 할인 금액을 계산한다.
  - [x] 크리스마스 디데이 할인에 대한 할인 금액을 계산한다.
    - 크리스마스 디데이 할인은 1,000원으로 시작하여 크리스마스가 다가올수록 날마다 할인 금액이 100원씩 증가한다.
  - [x] 평일 할인에 대한 할인 금액을 계산한다.
    - 퍙일 할인은 평일에 디저트 메뉴를 메뉴 1개당 2,023원 할인한다.
  - [x] 주말 할인에 대한 할인 금액을 계산한다.
    - 주말 할인은 주말에 메인 메뉴를 1개당 2,023원을 할인한다.
  - [x] 특별 할인에 대한 할인 금액을 계산한다.
    - 특별 할인은 총 주문 금액에서 1,000원 할인한다.
- [x] 총 할인 금액을 계산한다.

### 💡 증정 이벤트에 따른 증정 메뉴에 대한 금액을 계산하는 기능

- [x] 증정 이벤트에 따른 증정 메뉴에 대한 금액을 계산한다.
  - 증정 이벤트의 조건을 만족할 때, 샴페인 1개(25,000원)를 증정받는다.

### 💡 할인 이벤트와 증정 이벤트에 따른 총 혜택 금액을 계산하는 기능

- [x] 할인 이벤트와 증정 이벤트에 따른 총 혜택 금액을 계산한다.
  - 총 혜택금액은 할인 금액의 합계와 증정 메뉴의 가격의 합이다.

### 💡 할인 후 예상 결제 금액을 계산하는 기능

- [x] 결재 금액은 총 주문 금액에서 총 할인 금액을 뺀 금액이다.

### 💡 총 혜택 금액에 따른 부여할 이벤트 배지를 판별하는 기능

- [x] 총 혜택 금액에 따라 부여할 이벤트 배지를 판별한다.

### 💡 총 혜택 금액에 따른 부여할 이벤트 배지 계산하는 기능

- [x] 총 혜택 금액에 따른 부여할 이벤트 배지를 부여한다.
  - 5천원 미만 : 없음
  - 5원원 이상 : 별
  - 1만원 이상 : 트리
  - 2만원 이상 : 산타

### 💡 이벤트 결과를 보여준다는 문구, 방문할 날짜에 고객이 주문한 메뉴, 각종 금액 및 이벤트 혜택 내역의 출력형식을 포맷팅하는 기능

- [x] 이벤트 결과를 보여준다는 문구의 출력형식을 포맷팅한다.
- [x] 고객이 주문한 메뉴의 출력형식을 포맷팅한다.
  - 메뉴의 출력 순서는 자유롭게 설정한다.
- [x] 할인 전 총 주문 금액의 출력형식을 포맷팅한다.
- [x] 증정 메뉴의 출력형식을 포맷팅한다.
  - 증정 이벤트에 해당하지 않는 경우, "없음"을 출력한다.
- [x] 혜택 내역의 출력형식을 포맷팅 한다.
  - 고객에게 적용된 이벤트 내용만 보여준다.
  - 혜택 내역에 여러개의 이벤트가 적용된 경우, 크리스마스 디데이 할인, 평일 할인, 주말 할인, 특별 할인, 증정 이벤트 순으로 이밴트 내용을 출력한다.
  - 이벤트가 하나도 없으면 "없음"으로 설정한다.
- [x] 총 혜택 금액의 출력 형식을 포맷팅한다.
- [x] 할인 후 예상 결제 금액의 출력형식을 포맷팅한다.
- [x] 12월 이벤트 배지의 출력형식을 포맷팅한다.
  - 이벤트 배지가 부여되지 않는 경우, "없음"으로 설정한다.
- [x] 출력할 전체 결과를 포맷팅한다.

### 💡 포맷팅된 결과 형식을 출력하는 기능

- [x] 이벤트 플래너의 시작을 알리는 문구를 출력한다.
- [x] 방문할 날짜, 고객이 주문한 메뉴, 각종 금액 및 이벤트 혜택 내역 등이 포함된 결과를 출력한다.

## 🛠 최종 애플리캐이션 구조(src 폴더), 함수 및 메서드 역할

- `index.js` : 엔트리 포인트
- `App.js` : 크리스마스 프로모션 애플리케이션이 진행되는 모듈
  - **run** : 크리스마스 프로모션 애플리케이션 실행
- `models` : 입력값을 결과 이벤트 결과를 계산하는 모듈을 모아놓은 폴더
  - `OrderSheet.js` : 방문날짜와 메뉴를 입력받아, 필요한 결과를 계산하여 반환하는 모듈
    - 멤버 변수 : 방문날짜(`#VisitDate`), 메뉴(`#orderedMenus`)
    - **setVisitDate** : 방문 날짜를 설정
    - **getVisitDate** : OrderSheet 인스턴스에 설정된 방문 날짜를 번환
    - **setOrderedMenus** : 주문 메뉴 리스트를 설정
    - **getOrderedMenus** : OrderSheet 인스턴스의 설정된 주문 메뉴 리스트를 반환
    - **getTotalOrderAmount** : 할인 전 총 주문 금액을 반환
    - **getGiftAmount** : 증정 이벤트로 헤택 받은 금액을 반환
    - **getTotalDiscountAmount** : 총 할인 금액을 반환
    - **getTotalBenefitAmount** : 총 혜택 금액을 반환
    - **getPaymentAmount** : 할인 후 예상 결제 금액을 반환
    - **getChristmasDdayDiscountAmount** : 크리스마스 디데이 할인에 따른 할인 금액을 반환
    - **getWeekDayDiscountAmount** : 평일 할인에 따른 할인 금액을 반환
    - **getWeekendDiscountAmount** : 주말 할인에 따른 할인 금액을 반환
    - **getSpecialDiscountAmount** : 특별 할인에 따른 할인 금액을 반환
    - **getEventBadge** : 총 혜택 금액에 따라 받을 수 있는 이벤트 배지를 반환
- `controllers` : 애플리케이션의 전체적인 실행흐름을 제어하는 모듈을 모아놓은 폴더
  - `EventPlannerController.js` : 이벤트 플래너의 실행흐름을 제어하는 EventPlanner 모듈
    - 멤버 변수 : 입력모듈(`#inputView`), 출력모듈(`#outputView`), 주문내역서(`#orderSheet`)
    - **start** : 이벤트 플래너의 일련의 과정을 실행
    - **getVisitDate** : 방문 날짜의 입력값을 받아 `orderSheet`클래스의 멤버 변수에 설정
    - **getOrderedMenus** : 쥬뮨 매뉴의 입력값을 받아 `orderSheet`클래스의 멤버 변수에 설정
    - **printEventPlannerStart** : `outputView`에게 이벤트 플래너 시작을 나타내는 메시지의 출력을 지시
    - **printResult** : `outputView`에게 이벤트 플래너의 실행 결과값의 출력을 지시
- `validators` : 유효성 검사 모듈을 모아놓은 폴더
  - `InputValidator.js` : 입력값에 대한 유효성 검사를 하는 모듈
    - **validateVisitDate** : 방문 날짜의 입력값이 1부터 31사이의 숫자형 문자열인지 검증
    - **validateOrderedMenus** : 주문 메뉴 리스트의 입력값을 검증
    - **validateOrderedMenuFormat** : 주문 메뉴(메뉴-개수)의 입력값의 형식을 검증
    - **validateOrderedMenusInputFormat** : 주문 메뉴 리스트의 입력값의 형식을 검증
    - **validateOrderedMenuInMenuList** : 주문 메뉴(메뉴-개수)가 메뉴판에 있는 지를 검증
    - **validateEveryOrderedMenuInMenuList** : 주문 메뉴 리스트의 메뉴들이 메뉴판에 있는 지를 검증
    - **validateOrderedMenuCountIsBiggerThanZero** : 주문 메뉴(메뉴-개수)의 메뉴의 개수가 0보다 큰 지를 검증
    - **validateEveryOrderedMenuCountIsBiggerThanZero** : 주문 메뉴 리스트의 메뉴들에 대해 메뉴의 개수가 0보다 큰 지를 검증
    - **validateIsDuplicatedMenuName** : 중복 메뉴가 존재하는 지를 검증
    - **validateOnlyDrinkInOrderedMenus** : 주문 메뉴 리스트가 음료 메뉴들로만 이루어져 있는 지 검증
    - **validateTotalCounts** : 총 주문 개수가 20개를 넘는 지 검증
  - `DiscountEventValidator.js` : 할인 이벤트 적용 가능 여부에 대한 검증을 하는 모듈
    - **isDiscountEventApplicable** : 할인 이벤트를 적용할 수 있는 지를 검증
    - **isChristmasDdayDiscountApplicable** : 크리스마스 디데이 할인 이벤트를 적용할 수 있는 지를 검증
    - **isWeekDayDiscountApplicable** : 평일 할인 이벤트를 적용할 수 있는 지를 검증
    - **isWeekendDiscountApplicable** : 주말 할인 이벤트를 적용할 수 있는 지를 검증
    - **isSpecialDiscountApplicable** : 특별 할인 이벤트를 적용할 수 있는 지를 검증
  - `GiftEventValidator.js` : 증정 이벤트 적용 여부에 대한 검증을 하는 모듈
    - **isGiftEventApplicable** : 증정 이벤트를 적용할 수 있는 지를 검증
  - `EventBadgeValidator.js` : 이벤트 배지 부여에 대한 검증을 하는 모듈
    - **isStarBadgeGettable** : 별 배지를 받을 수 있는 지를 검증
    - **isTreeBadgeGettable** : 트리 배지를 받을 수 있는 지를 검증
    - **isSantaBadgeGettable** : 산타 배지를 받을 수 있는 지를 검증
- `constants` : 상수 모듈을 모아놓은 폴더
  - 날짜(Dates), 배지(badges), 할인(discounts), 증정(gifts), menus(메뉴), 메시지(messages), 정규식(regexs), 출력할 항목들의 제목(resultTitles), 구분자(separators), 부호(signs), 단위(units) 상수 파일 존재
- `views` : UI 로직을 담당하는 모듈을 모아놓은 폴더
  - `InputView.js` : 입력을 담당하는 모듈
    - 멤버변수 : 입력값(`#input`)
    - **readVisitDate** : 방문 날짜 입력값을 받아서 반환
    - **readMenus** : 메뉴 리스트 입력값을 받아서 반환
  - `OutputView.js` : 출력을 담당하는 모듈
    - **printStartMessage** : 이벤트 플래너 실행을 알리는 메시지 출력
    - **printErrorMessage** : 에러 메시지 출력
    - **printResult** : 이벤트 플래너 실행 결과 출력
- `utils`
  - `formatting.js` : 출력할 값들을 출력 형식에 맞게 포맷팅해주는 함수들을 모아놓은 모듈
    - **generateResultStartMessageFormat** : 결과 출력 메시지 포맷을 생성
    - **generateResultStartMessageFormat** : 주문 메뉴 출력 포맷을 생성
    - **generateNumberWithCommasFormat** : 숫자에 3자리 간격으로 콤마를 삽입한 출력 포맷을 생성
    - **generateTotalOrderAmountFormat** : 총 주문 금액 출력 포맷을 생성
    - **generateGiftMenuFormat** : 증정 메뉴 출력 포맷을 생성
    - **generateDetailFormat** : 하나의 혜택 상세 내역 출력 포맷을 생성
    - **generateDetailsFormat** : 모든 혜택 상세 내역 출력 포맷을 생성
    - **generateTotalBenefitAmountFormat** : 총 혜택 금액 출력 포맷을 생성
    - **generatePaymentAmountFormat** : 할인 후 예상 결제 금액 출력 포맷을 생성
    - **generateEventBadgeFormat** : 이벤트 뱃지 출력 포맷을 생성
    - **generateResultFormat** : 결과 출력 포맷을 생성
  - `general.js` : 애플리케이션에 전반적으로 사용되는 함수를 모아놓은 모듈
    - **removeWhiteSpaceFromBothEndsOfString** : 문자열의 앞뒤 공백을 삭제
    - **getOrderedMenusNames** : 주문 메뉴 리스트 입력값으로부터 메뉴 이름으로만 이루어진 배열을 반환
    - **getOrderedMenusCounts** : 주문 메뉴 리스트 입력값으로부터 메뉴 수로 이루어진 배열을 반환
    - **getCountOfMenuType** : 특정 메뉴 유형의 개수를 반환
    - **isDrinkMenu** : 해당 메뉴가 음료 유형인지 검증
    - **throwError** : 인자로 전달된 메시지를 사용하여 에러 객체 반환

## ⛏ 테스트 코드

### 작성 시 고려한 점

- Jest를 사용하여 `__tests__`폴더에 아래에 Validator 클래스, model 클래스(`OrderSheet`), 유틸 함수에 대한 테스트 코드를 작성
- 테스트 코드를 작성하면서 단위 테스트를 진행하기 어려운 코드를 리팩터링하는 과정을 거쳤으며, 동료 피드백을 반영하여 `beforeEach`를 사용해여 test 코드의 중복을 방지

### \_tests\_\_ 폴더 내에 존재하는 테스트 코드 파일

- `ApplicationTest.js`: 기존에 주어진 ApplicationTest 코드
- `ModelTest` : Model 클래스를 테스트한 코드를 모아놓은 폴더
  - `OrderSheetTest.js` : OrderSheet 클래스의 메서드를 테스트하는 코드
- `validatorTests` : 유효성 검사 클래스를 테스트하는 코드를 모아놓은 폴더
  - `InputValidatorTest.js` : InputValidator 클래스의 메서드를 테스트하는 코드
  - `DiscountValidatorTest.js` : DiscountValidator 클래스의 메서드를 테스트하는 코드
  - `GiftEventValidatorTest.js` : GiftEventValidator 클래스의 메서드를 테스트하는 코드
  - `EventBadgeValidatorTest.js` : EventBadgeValidator 클래스의 메서드를 테스트하는 코드
- `uitlTests` : uitl 함수를 테스트한 코드를 모아놓은 폴더
  - `FormattingTest.js` : 출력형식으로 formatting해주는 uitl 함수들을 테스트하는 코드

## 🤔 기타 고려 사항

### 3주차 공통 피드백 반영

- 함수 라인이 공백라인 포함 15라인이 넘어가면 함수 분리를 고려
- 발생할 수 있는 예외 상황에 대한 고려
- 비즈니스 로직과 UI 로직 분리
- 필드를 Private Class 필드로 구현하여, 객체의 상태를 외부에서 접근하는 방식을 최소화
- 객에체서 데이터를 꺼내지 말고, 메시지를 던지로록 구성
- 객체 필드의 수를 최소화
- 성공하는 케이스 뿐만이 아니라 예외 케이스도 작성
- 테스트 코드를 리팩터링을 통해 지속적으로 개선
- 테스트를 위한 편의 메서드를 구현 코드에 구현 금지
- 단위 테스트하기 어려운 코드를 피랙터링

### 3주차 동료 피드백 반영

- `beforeEach`를 사용한 test코드 중복 방지
- 배열의 내장 함수 사용 시, 내부 인자의 변수명을 Semantic하게 작성
- 모듈화 하는 과정에서의 명확한 기준 필요

### 구현 시 고려 사항

**UI 로직과 비즈니스 로직의 분리**

미션을 구현하기에 앞서 비즈니스 로직과 UI 로직을 분리하기 위해 MVC 패턴을 차용하였습니다. 먼저 UI로직을 비즈니스 로직으로부터 분리하기 위해 `View` 폴더 아래의 `InputView.js`에서 입력 기능을, `OutputView.js` 에서 출력 기능을 담당하도록 하였고, 두 모듈에서는 입출력 이외의 비즈니스 로직이 수행되지 않도록 설계하였습니다.

**비즈니스 로직 설계**

비즈니스 로직을 설계하는 데 있어서는`EventPlannerController` 를 통해서 전체적인 실행 흐름이 진행되도록 하였으며, 입력값(방문 날짜와 주문 내역)을 받아 이벤트 결과를 계산하는 기능은 `OrderSheet` 클래스에서 이루어지도록 설계하였습니다. 또한 입력값 검증, 할인 이벤트 적용 가능 여부 검증, 증정 이벤트 적용 여부 검증, 이벤트 배지 부여 검증에 관한 validation 부분은 각각의 validator를 설정하여 처리하였으며, util 함수인 formatting함수를 이용하여 이벤트 결과를 출력형식에 맞게 formatting하도록 하였습니다.

**클래스 멤버 변수 최소화**

클래스의 멤버 변수를 최소화하기 위해 꼭 필요한 멤버 변수만 설정하고자 노력하였습니다. 그리하여 입력값을 통해 이벤트 결과를 계산하는 `OrderSheet` 클래스에서는 방문날짜와 주문 메뉴만을 멤버 변수로 설정하였습니다. 또한 전체적인 애플리케이션의 실행 흐름을 제어하는 `EventPlannerController` 에서는 model에 해당하는 `OrderSheet` 와 UI로직을 담당하는 `InputView` 와 `OutputView` 만을 멤버변수로 설정하여, 불필요한 멤버 변수 설정을 지양하였습니다.

**상수 세분화 및 동결**

3주차까지 미션을 진행할 때에는 상수를 하나의 상수 폴더에 모두 선언하였는데, 이러한 경우에는 특정 상수의 역할을 알아내기 위해 한 단계를 더 거쳐야 하는 상황이 발생하였습니다. 이를 해결하기 위해 상수의 역할별로 파일을 선언하여 상수를 세분화하는 작업을 진행하였습니다. 또한 각 파일에 선언한 상수를 불변하게 관리하기 쉽도록 하기 위해, 상수를 객체 내부에 선언 후 객체를 동결(freeze)하는 작업을 진행하였습니다.
