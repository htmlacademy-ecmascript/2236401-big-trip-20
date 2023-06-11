import Observable from '../framework/observable.js';

export default class OffersModel extends Observable {
  #service = [];
  #offers = [];

  constructor(service) {
    super();
    this.#service = service;
    this.#offers = this.#service.offers;
  }

  get offers() {
    return this.#offers;
  }

  getByType(type) {
    return this.#offers
      .find((offer) => offer.type.toLowerCase() === type.toLowerCase()).offers;
  }
}
