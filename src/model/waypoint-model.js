import { createMockPoints } from '../mock/data-structure';

const POINTS_COUNT = 5;

export default class PointsModel {
  points = createMockPoints(POINTS_COUNT);

  getPoints() {
    return this.points;
  }
}
