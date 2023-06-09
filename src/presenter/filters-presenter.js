import ListFiltersView from '../view/list-filters-view.js';
import { render } from '../framework/render.js';
import AbstractView from '../framework/view/abstract-view.js';
import { createFilter } from '../utils.js';

export default class FiltersPresenter extends AbstractView {
  #listFiltersContainer = null;
  #points = null;

  constructor({ listFiltersContainer, pointsModel }) {
    super();
    this.#listFiltersContainer = listFiltersContainer;
    this.#points = pointsModel.get();
  }

  init(){
    const filters = createFilter(this.#points);
    render(new ListFiltersView({filters}), this.#listFiltersContainer);
  }
}
