import Observable from '../framework/observable.js';
import { UpdateType } from '../const.js';

export default class DestinationsModel extends Observable {
  #pointsApiService = null;
  #destinations = [];

  constructor({pointsApiService}) {
    super();
    this.#pointsApiService = pointsApiService;
  }

  get destinations() {
    return this.#destinations;
  }

  getById(id) {
    return this.#destinations
      .find((destination) => destination.id === id);
  }

  async init() {
    try {
      const destinations = await this.#pointsApiService.destinations;
      this.#destinations = destinations;
      // console.log(this.#destinations);
    } catch(err) {
      this.#destinations = [];
    }
    this._notify(UpdateType.INIT);
  }
}
