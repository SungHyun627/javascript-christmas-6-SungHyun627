import { BADGE_CRITERIAS } from '../constants/badges.js';

class EventBadgeValidator {
  static isStarBadgeGettable(totalBenefitAmount) {
    return (
      totalBenefitAmount >= BADGE_CRITERIAS.STAR &&
      totalBenefitAmount < BADGE_CRITERIAS.TREE
    );
  }

  static isTreeBadgeGettable(totalBenefitAmount) {
    return (
      totalBenefitAmount >= BADGE_CRITERIAS.TREE &&
      totalBenefitAmount < BADGE_CRITERIAS.SANTA
    );
  }

  static isSantaBadgeGettable(totalBenefitAmount) {
    return totalBenefitAmount >= BADGE_CRITERIAS.SANTA;
  }
}

export default EventBadgeValidator;
