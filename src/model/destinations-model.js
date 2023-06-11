import Observable from '../framework/observable.js';

export default class DestinationsModel extends Observable {
  #service = [];
  #destinations = [];

  constructor(service) {
    super();
    this.#service = service;
    this.#destinations = this.#service.destinations;
  }

  get destinations() {
    return this.#destinations;
  }

  getById(id) {
    return this.#destinations
      .find((destination) => destination.id === id);
  }
}