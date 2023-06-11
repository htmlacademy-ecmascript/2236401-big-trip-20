import ListFiltersView from '../view/list-filters-view.js';
import { render, replace, remove } from '../framework/render.js';
import { filter } from '../utils.js';
import { FilterType, UpdateType } from '../const.js';

export default class FiltersPresenter {
  #listFiltersContainer = null;
  #pointsModel = null;
  #filtersModel = null;
  #filtersComponent = null;

  constructor({ listFiltersContainer, filtersModel, pointsModel }) {
    this.#listFiltersContainer = listFiltersContainer;
    this.#filtersModel = filtersModel;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filtersModel.addObserver(this.#handleModelEvent);
  }

  get filters(){
    const points = this.#pointsModel.points;

    return Object.values(FilterType).map((type) => ({
      type,
      count: filter[type](points).length
    }));
  }

  init() {
    const filters = this.filters;
    const prevFiltersComponent = this.#filtersComponent;

    this.#filtersComponent = new ListFiltersView({
      filters,
      currentFilterType: this.#filtersModel.filter,
      onFilterTypeChange: this.#handleFilterTypeChange
    });

    if(prevFiltersComponent === null) {
      render(this.#filtersComponent , this.#listFiltersContainer);
      return;
    }

    replace(this.#filtersComponent, prevFiltersComponent);
    remove(prevFiltersComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filtersModel.filter === filterType) {
      return;
    }

    this.#filtersModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
