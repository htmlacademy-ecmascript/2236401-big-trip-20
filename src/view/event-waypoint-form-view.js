import { getRandomDestination } from '../mock/data-structure.js';
import { BLANK_WAYPOINT_DEFAULT, Offers, WAYPOINTS_TYPES, FormType, DESTINATIONS_CITIES } from '../const.js';
import dayjs from 'dayjs';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const createFormControlsTemplate = (formType) => {
  const resetButtonText = formType === 'edit' ? 'Delete' : 'Cancel';
  return /*html*/`<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset"">${resetButtonText}</button>
    ${formType === 'edit' ? `<button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>` : ''}`;
};

function createEventWaypointElement(point, formType) {
  const { basePrice, dateFrom, dateTo, type, id, offers } = point;

  const timeFrom = dayjs(dateFrom).format('DD/MM/YY HH:mm');
  const timeTo = dayjs(dateTo).format('DD/MM/YY HH:mm');

  const { description, pictures, name } = getRandomDestination();
  const cityDestination = name;

  const getPicturesByDestination = (photos) => {
    const picturesArr = [];
    for (let i = 0; i < photos.length; i++) {
      const picItem = photos[i];
      picturesArr.push(picItem);
    }
    return picturesArr;
  };
  const destinationPictures = getPicturesByDestination(pictures);

  const getOffersByType = (offersData, offerType) => {
    const offersByType = offersData.find((offer) => offer.type === offerType);
    return offersByType ? offersByType.offers : [];
  };

  const typeOffers = getOffersByType(Offers, type.toLowerCase());


  const createOffersData = (typeOffersData, DataOffers) => typeOffersData.map((offer) => {
    const checked = DataOffers.includes(offer.id) ? 'checked' : '';

    return (/*html*/
      `<div class="event__offer-selector">
        <input
          class="event__offer-checkbox visually-hidden"
          id="event-offer-${offer.id}"
          type="checkbox"
          name="event-offer-${offer.id}"
          data-offer-id="${offer.id}"
          ${checked}
        >
        <label class="event__offer-label" for="event-offer-${offer.id}">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>`);
  }).join('');

  const createOffersTemplate = (typeOffersData, dataOffers) => {
    if (!typeOffersData.length) {
      return '';
    }
    return (/*html*/`
      <div class="event__available-offers">
        ${createOffersData(typeOffers, dataOffers)}
      </div>
    `);
  };

  const createDestinationPictures = () => {
    let pics = '';
    if (destinationPictures.length) {
      destinationPictures.forEach((photo) => {
        if (photo.src && photo.description) {
          pics += `
        <img class="event__photo" src="${photo.src}" alt="${photo.description}">`;
        }
      });
    }
    return pics;
  };

  const createSelectionType = () => {
    let selectType = '';
    if (WAYPOINTS_TYPES.length) {
      WAYPOINTS_TYPES.forEach((typeEvent) => {
        const checked = typeEvent === type ? 'checked' : '';
        if(typeEvent) {
          selectType += `
          <div class="event__type-item">
            <input id="event-type-${typeEvent.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${typeEvent.toLowerCase()}" ${checked}>
            <label class="event__type-label  event__type-label--${typeEvent.toLowerCase()}" for="event-type-${typeEvent.toLowerCase()}-1">${typeEvent}</label>
          </div>`;
        }
      });
    }
    return selectType;
  };

  const controlsTemplate = createFormControlsTemplate(formType);

  const createDestinationsTemplate = (arr) => {
    let chosenDestination = '';
    if (arr.length) {
      arr.forEach((destinations) => {
        chosenDestination += `<option value="${destinations}"></option>`;
      });
    }
    return chosenDestination;
  };


  return (/*html*/
    `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event ${type} icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>

                ${createSelectionType()}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${cityDestination}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${createDestinationsTemplate(DESTINATIONS_CITIES)}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-${id}">From</label>
            <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${timeFrom}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-${id}">To</label>
            <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${timeTo}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>
         ${controlsTemplate}
        </header>
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>

            <div class="event__available-offers">
            ${createOffersTemplate(typeOffers, offers)}

            </div>
          </section>

          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${cityDestination} ${description}</p>

            <div class="event__photos-container">
              <div class="event__photos-tape">
                ${createDestinationPictures()}
              </div>
            </div>
          </section>
        </section>
      </form>
    </li>`
  );
}

export default class EventWaypointFormView extends AbstractStatefulView {
  #handleFormSubmit = null;
  #handleResetClick = null;
  #handleDeleteClick = null;
  #formType = null;
  #destination = null;
  #offers = null;
  #dateFromPicker = null;
  #dateToPicker = null;

  constructor({ point = BLANK_WAYPOINT_DEFAULT, formType, onSubmit, onReset, onDelete, destination, offers }) {
    super();
    this._setState(EventWaypointFormView.parsePointToState(point));
    this.#formType = formType;
    this.#handleFormSubmit = onSubmit;
    this.#handleResetClick = onReset;
    this.#handleDeleteClick = onDelete;
    this._restoreHandlers();
    this.#destination = destination;
    this.#offers = offers;
  }


  get template() {
    return createEventWaypointElement(this._state, this.#formType, this.#destination, this.#offers);
  }

  removeElement = () => {
    super.removeElement();

    if (this.#dateFromPicker) {
      this.#dateFromPicker.destroy();
      this.#dateFromPicker = null;
    }

    if (this.#dateToPicker) {
      this.#dateToPicker.destroy();
      this.#dateToPicker = null;
    }
  };


  reset(point) {
    this.updateElement(EventWaypointFormView.parsePointToState(point));
  }

  _restoreHandlers() {
    this.#setInnerHandlers();
    this.element.querySelector('.event--edit').addEventListener('submit', this.#submitFormHandler);
    this.element.querySelector('.event--edit').addEventListener('reset', this.#resetFormHandler);
  }

  #setInnerHandlers = () => {
    if (this.#formType === FormType.EDITING) {
      this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#resetFormHandler);
      this.element.querySelector('.event__reset-btn').addEventListener('click', this.#deleteFormHandler);
    }

    this.element.querySelector('.event__type-group').addEventListener('change', this.#typeChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelector('.event__available-offers')?.addEventListener('change', this.#offerCheckHandler);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#priceChangeHandler);

    this.#setDateFromPicker();
    this.#setDateToPicker();
  };

  #deleteFormHandler = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick(EventWaypointFormView.parseStateToPoint(this._state));
  };

  #submitFormHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EventWaypointFormView.parseStateToPoint(this._state));
  };

  #resetFormHandler = () => {
    this.#handleResetClick();
  };

  #typeChangeHandler = (evt) => {
    evt.preventDefault();
    if (evt.target.tagName === 'INPUT') {
      this.updateElement({
        type: evt.target.value,
        offers:[]
      });
    }
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();
    const chosenDestination = this.#destination.find((item) => item.name === evt.target.value);

    if (chosenDestination) {
      this.updateElement({
        destination: chosenDestination.id
      });
    } else {
      evt.target.value = '';
    }
  };

  #offerCheckHandler = (evt) => {
    evt.preventDefault();
    if (evt.target.tagName === 'INPUT') {
      const checkedOfferId = Number(evt.target.dataset.offerId);
      const checkedOfferIndex = this._state.offers.indexOf(checkedOfferId);
      if (checkedOfferIndex === -1) {
        this._state.offers.push(checkedOfferId);
        return;
      }

      this._state.offers.splice(checkedOfferIndex, 1);
    }
  };

  #dateFromChangeHandler = ([userDate]) => {
    this.updateElement({
      dateFrom: userDate,
    });
  };

  #dateToChangeHandler = ([userDate]) => {
    this.updateElement({
      dateTo: userDate,
    });
  };

  #setDateFromPicker = () => {
    this.#dateFromPicker = flatpickr(
      this.element.querySelector(`#event-start-time-${this._state.id}`),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        maxDate: this._state.dateTo,
        defaultDate: this._state.dateFrom,
        onChange: this.#dateFromChangeHandler,
        'time_24hr':true
      }
    );
  };

  #setDateToPicker = () => {
    this.#dateToPicker = flatpickr(
      this.element.querySelector(`#event-end-time-${this._state.id}`),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        minDate: this._state.dateFrom,
        defaultDate: this._state.dateTo,
        onChange: this.#dateToChangeHandler,
        'time_24hr':true
      }
    );
  };

  #priceChangeHandler = (evt) => {
    evt.preventDefault();
    const newPrice = evt.target.value;
    if(Number(newPrice) && newPrice >= 1) {
      this._setState({
        basePrice: +newPrice
      });
    } else {
      evt.target.value = this._state.basePrice;
    }
  };


  static parsePointToState(point) {
    return {...point};
  }

  static parseStateToPoint(state) {
    const point = {...state};

    return point;
  }
}
