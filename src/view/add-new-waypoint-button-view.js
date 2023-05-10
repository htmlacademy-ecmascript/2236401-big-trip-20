import AbstractView from '../framework/view/abstract-view.js';

const createNewWaypoinButtonTemplate = () => '<button class="trip-main__event-add-btn btn btn--big btn--yellow" type="button">New event</button>';

export default class AddNewWaypointButtonView extends AbstractView {
  #handleClick = null;

  constructor({ onAddClick }) {
    super();
    this.#handleClick = onAddClick;
    this.element.addEventListener('click', this.#clickHandler);
  }

  get template(){
    return createNewWaypoinButtonTemplate();
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };
}
