export default class PointsModel {
  #service = [];
  #points = [];

  constructor(service) {
    this.#service = service;
    this.#points = this.#service.points;
  }

  get() {
    return this.#points;
  }
}
