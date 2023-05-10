import AbstractView from '../framework/view/abstract-view.js';

function createTripFiltersTemplate({ name, isDisabled }, isChecked) {
  return (/*html*/
    `<div class="trip-filters__filter">
      <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}" ${isDisabled ? 'disabled' : ''} ${isChecked ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
    </div>`
  );
}

function createFilterFormTemplate(filters) {
  const filterTemplate = filters.map((filter, i) => createTripFiltersTemplate(filter, i === 0)).join('');
  return (
    `<form class="trip-filters" action="#" method="get">
      ${filterTemplate}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
}

export default class ListFiltersView extends AbstractView {
  #filters = null;

  constructor ({ filters }){
    super();
    this.#filters = filters;
  }

  get template() {
    return createFilterFormTemplate(this.#filters);
  }
}
