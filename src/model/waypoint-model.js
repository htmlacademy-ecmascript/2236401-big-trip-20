import { createMockPoints, getRandomDestination } from '../mock/data-structure';
import { Offers, POINTS_COUNT } from '../const';


export default class PointsModel {
  #points = createMockPoints(POINTS_COUNT);
  #offers = Offers;
  #destination = getRandomDestination();

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destination() {
    return this.#destination;
  }
}
