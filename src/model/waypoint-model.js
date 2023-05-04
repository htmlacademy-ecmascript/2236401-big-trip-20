import { createMockPoints, getRandomDestination } from '../mock/data-structure';
import { Offers } from '../const';

const POINTS_COUNT = 5;

export default class PointsModel {
  points = createMockPoints(POINTS_COUNT);
  offers = Offers;
  destination = getRandomDestination();

  getPoints() {
    return this.points;
  }

  // getOffers() {
  //   return this.offers;
  // }

  // getDestination() {
  //   return this.destination;
  // }
}
