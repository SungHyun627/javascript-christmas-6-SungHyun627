import { BADGE_CRITERIAS } from '../constants/badges.js';

class EventBadgeValidator {
  isStarBadgeGettable(totalBenefitAmount) {
    return (
      totalBenefitAmount >= BADGE_CRITERIAS.STAR &&
      totalBenefitAmount < BADGE_CRITERIAS.TREE
    );
  }

  isTreeBadgeGettable(totalBenefitAmount) {
    return (
      totalBenefitAmount >= BADGE_CRITERIAS.TREE &&
      totalBenefitAmount < BADGE_CRITERIAS.SANTA
    );
  }

  isSantaBadgeGettable(totalBenefitAmount) {
    return totalBenefitAmount >= BADGE_CRITERIAS.SANTA;
  }
}

export default EventBadgeValidator;
