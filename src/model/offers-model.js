export default class OffersModel {
  #service = [];
  #offers = [];
  constructor(service) {
    this.#service = service;
    this.#offers = this.#service.offers;
  }

  get() {
    return this.#offers;
  }

  getByType(type) {
    return this.#offers
      .find((offer) => offer.type.toLowerCase() === type.toLowerCase()).offers;
  }
}
