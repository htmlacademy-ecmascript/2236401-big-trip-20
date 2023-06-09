import { BLANK_WAYPOINT_DEFAULT, DEFAULT_POINT_TYPE, WAYPOINTS_TYPES, FormType } from '../const.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import he from 'he';


const createFormTypeTemplate = (pointType, id, isDisabled) =>
  WAYPOINTS_TYPES.map((type) => /*html*/
    `<div class="event__type-item">
      <input id="event-type-${he.encode(type.toLowerCase())}-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type"
        value="${he.encode(type.toLowerCase())}"
        ${he.encode(pointType.toLowerCase()) === he.encode(type.toLowerCase()) ? 'checked' : ''}
        ${isDisabled ? 'disabled' : ''}
      />
      <label class="event__type-label  event__type-label--${he.encode(type.toLowerCase())}"
        for="event-type-${he.encode(type.toLowerCase())}-${id}">${he.encode(type)}
      </label>
    </div>`
  ).join('');

const createFormPhotosGalleryTemplate = (pictures) => {
  if(!pictures || pictures.length === 0){
    return '';
  }
  return`<div class="event__photos-container">
    <div class="event__photos-tape">
      ${pictures.map((picture) => `<img class="event__photo" src=${picture.src} alt=${picture.alt}>`)}
  </div>`;
};

const createFormControlsTemplate = (formType, isDisabled, isSaving, isDeleting) => {

  const getResetButtonText = () => {
    if(formType === FormType.EDITING) {
      return isDeleting ? 'Deleting...' : 'Delete';
    }
    return 'Cancel';
  };

  return /*html*/`
    <button class="event__save-btn  btn  btn--blue" type="submit" ${isDisabled ? 'disabled' : ''}>
      ${isSaving ? 'Saving...' : 'Save'}
    </button>
    <button class="event__reset-btn" type="reset" ${isDisabled ? 'disabled' : ''}>
      ${getResetButtonText()}
    </button>
    ${formType === FormType.EDITING ? `<button class="event__rollup-btn" type="button" >
      <span class="visually-hidden">Open event</span>
    </button>` : ''}`;
};

const getDestination = (id, destinations) => destinations.find((destination) => destination.id === id);

const createEventWaypointElement = ({point, pointDestinations, pointOffers, formType}) => {
  const { basePrice, dateFrom, dateTo, destination, type, id, isDisabled, isSaving, isDeleting } = point;
  const pointType = type !== '' ? he.encode(type.toLowerCase()) : DEFAULT_POINT_TYPE;
  const typeListTemplate = createFormTypeTemplate(he.encode(pointType.toLowerCase()), id, isDisabled);
  const destinationInfo = getDestination(destination, pointDestinations);
  const controlsTemplate = createFormControlsTemplate(formType, isDisabled, isSaving, isDeleting);
  const destinationsList = pointDestinations?.map((item) => `<option value="${he.encode(item.name)}"></option>`).join('');
  const pointId = id === undefined ? undefined : he.encode(id);

  const isChecked = (offer) => point.offers.includes(offer.id) ? 'checked' : '';

  const getByTypeOffers = (offersByType) => pointOffers?.find((offer) => offer.type.toLowerCase() === offersByType)?.offers;
  const needsOffers = getByTypeOffers(type.toLowerCase());

  const offersList = needsOffers?.map((offer) => `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden"
          id="${he.encode(offer.id)}" type="checkbox" name="event-offer-luggage"
          data-offer-id="${he.encode(offer.id)}"
          ${isChecked(offer)}
          ${isDisabled ? 'disabled' : ''}
        />
        <label class="event__offer-label" for="${he.encode(offer.id)}">
          <span class="event__offer-title">${he.encode(offer.title)}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${he.encode(offer.price.toString())}</span>
        </label>
      </div>`)
    .join('');

  return(/*html*/`
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-${pointId}">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17"
              src="img/icons/${he.encode(pointType)}.png"
              alt="Event ${he.encode(pointType)} icon"
            />
          </label>
          <input class="event__type-toggle  visually-hidden"
            id="event-type-toggle-${pointId}" type="checkbox"
            ${isDisabled ? 'disabled' : ''}
          />
          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
                ${typeListTemplate}
            </fieldset>
          </div>
        </div>
        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-${pointId}">
            ${he.encode(pointType)}
          </label>
          <input class="event__input  event__input--destination"
            id="event-destination-${pointId}" type="text" name="event-destination"
            value="${destinationInfo ? he.encode(destinationInfo.name) : ''}"
            list="destination-list-${pointId}"
            ${isDisabled ? 'disabled' : ''}
          />
          <datalist id="destination-list-${pointId}">
            ${destinationsList}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-${pointId}">From</label>
          <input class="event__input  event__input--time"
            id="event-start-time-${pointId}" type="text" name="event-start-time"
            value="${dateFrom}"}
            ${isDisabled ? 'disabled' : ''}
          />
          &mdash;
          <label class="visually-hidden" for="event-end-time-${pointId}">To</label>
          <input class="event__input  event__input--time"
            id="event-end-time-${pointId}" type="text" name="event-end-time"
            value="${dateTo}"
            ${isDisabled ? 'disabled' : ''}
          />
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-${pointId}">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-${pointId}"
            type="text" name="event-price"
            value="${he.encode(basePrice.toString())}"
            ${isDisabled ? 'disabled' : ''}
          />
        </div>
        ${controlsTemplate}
      </header>
      <section class="event__details">
        ${(needsOffers && needsOffers.length) ? `<section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">
            ${offersList}
          </div>
        </section>` : ''}
        ${destinationInfo ? `<section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${he.encode(destinationInfo.description)}</p>
          ${createFormPhotosGalleryTemplate(destinationInfo.pictures)}
        </section>
      </section>` : ''}
    </form>
  </li>`
  );
};

export default class EventWaypointFormView extends AbstractStatefulView {
  #destinations = null;
  #offers = null;
  #handleFormSubmit = null;
  #handleResetClick = null;
  #handleDeleteClick = null;
  #formType = null;
  #dateFromPicker = null;
  #dateToPicker = null;

  constructor({ point = BLANK_WAYPOINT_DEFAULT, pointDestinations, pointOffers, formType, onSubmit, onReset, onDelete }) {
    super();
    this._setState(EventWaypointFormView.parsePointToState(point));
    this.#destinations = pointDestinations;
    this.#offers = pointOffers;
    this.#formType = formType;
    this.#handleFormSubmit = onSubmit;
    this.#handleResetClick = onReset;
    this.#handleDeleteClick = onDelete;
    this._restoreHandlers();
  }


  get template() {
    return createEventWaypointElement({point: this._state, pointDestinations: this.#destinations, pointOffers: this.#offers, formType: this.#formType});
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
        offers: []
      });
    }
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();
    if (!evt.target.value) {
      return;
    }

    const updatedDestination = this.#destinations.find((tripDestination) => tripDestination.name === evt.target.value);

    const updatedDestinationId = (updatedDestination) ? updatedDestination.id : null;

    this.updateElement({
      ...this._state,
      destination: updatedDestinationId
    });
  };

  #offerCheckHandler = (evt) => {
    evt.preventDefault();
    if (evt.target.tagName === 'INPUT') {
      const checkedOfferId = evt.target.dataset.offerId;
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
    return {...point,
      isDisabled: false,
      isSaving: false,
      isDeleting: false,
    };
  }

  static parseStateToPoint(state) {
    const point = {...state};

    delete point.isDisabled;
    delete point.isSaving;
    delete point.isDeleting;

    return point;
  }
}
