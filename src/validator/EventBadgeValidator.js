import { MIN_TOTAL_BENEFIT_AMOUNT } from '../constants/badges.js';

class EventBadgeValidator {
  static isStarBadgeGettable(totalBenefitAmount) {
    return (
      totalBenefitAmount >= MIN_TOTAL_BENEFIT_AMOUNT.STAR &&
      totalBenefitAmount < MIN_TOTAL_BENEFIT_AMOUNT.TREE
    );
  }
  static isTreeBadgeGettable(totalBenefitAmount) {
    return (
      totalBenefitAmount >= MIN_TOTAL_BENEFIT_AMOUNT.TREE &&
      totalBenefitAmount < MIN_TOTAL_BENEFIT_AMOUNT.SANTA
    );
  }
  static isSantaBadgeGettable(totalBenefitAmount) {
    return totalBenefitAmount >= MIN_TOTAL_BENEFIT_AMOUNT.SANTA;
  }
}

export default EventBadgeValidator;
