import { generateDestination, generateOffer, generatePoint } from '../mock/data-structure';
import { getRandomNumber, getRandomArrayElement } from '../utils';
import { WAYPOINTS_TYPES } from '../const';

export default class MockService {
  #destinations = [];
  #offers = [];
  #points = [];

  constructor() {
    this.#destinations = this.generateDestinations();
    this.#offers = this.generateOffers();
    this.#points = this.generatePoints();
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  get points() {
    return this.#points;
  }

  generateDestinations() {
    return Array.from(
      {length: 10},
      () => generateDestination()
    );
  }

  generateOffers() {
    return WAYPOINTS_TYPES.map((type) => ({
      type,
      offers: Array.from(
        {length: getRandomNumber(0, 6)},
        () => generateOffer(type)
      )
    }));
  }

  generatePoints() {
    return Array.from(
      {length: 10},
      () => {
        const type = getRandomArrayElement(WAYPOINTS_TYPES);
        const destination = getRandomArrayElement(this.#destinations);
        const hasOffers = getRandomNumber(0, 1);
        const offersByType = this.#offers
          .find((offerByType) => offerByType.type === type);
        const offerIds = (hasOffers)
          ? offersByType.offers
            .slice(0, getRandomNumber(0, 6))
            .map((offer) => offer.id)
          : [];
        return generatePoint(type, destination.id, offerIds);
      });
  }
}
