import { createMockPoints, tripDestinations } from '../mock/data-structure';
import { Offers, POINTS_COUNT } from '../const';

export default class PointsModel {
  #points = createMockPoints(POINTS_COUNT);
  #offers = Offers;
  #destinations = tripDestinations;

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}
