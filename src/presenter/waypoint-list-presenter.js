import { render, RenderPosition, remove } from '../framework/render.js';
import WaypointListView from '../view/waypoint-list-view.js';
import TripInfoView from '../view/trip-info-view.js';
import ListSortView from '../view/list-sort-view.js';
import {
  sortByDay,
  sortByPrice,
  sortByTime,
  filter
} from '../utils.js';
import { SortType, UserAction, UpdateType, FilterType } from '../const.js';
import ListEmptyView from '../view/empty-waypoint-list-view.js';
import PointPresenter from './point-presenter.js';
import NewPointPresenter from './new-point-presenter.js';
import LoadingView from '../view/loading-view.js';
import UiBlocker from '../framework/ui-blocker/ui-blocker.js';

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export default class WaypointListPresenter {
  #headerContainer = null;
  #waypointListContainer = null;
  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  #filterType = FilterType.EVERYTHING;
  #filtersContainer = null;
  #filtersPresenter = null;
  #filtersModel = null;
  #newPointPresenter = null;

  #sortComponent = null;
  #currentSortType = SortType.DAY;

  #waypointListComponent = new WaypointListView();
  #emptyWaypointComponent = null;
  #tripInfoComponent = new TripInfoView();
  #loadingComponent = new LoadingView();
  #isLoading = true;

  #pointPresenters = new Map();
  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT
  });

  constructor ({ headerContainer, filtersModel, waypointListContainer, destinationsModel, offersModel, pointsModel, onNewPointDestroy }) {
    this.#headerContainer = headerContainer;
    this.#filtersModel = filtersModel;
    this.#waypointListContainer = waypointListContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;

    this.#newPointPresenter = new NewPointPresenter({
      pointListContainer: this.#waypointListComponent.element,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewPointDestroy,
      destinations: this.#destinationsModel.destinations,
      offers: this.#offersModel.offers,
    });

    this.#filtersModel.addObserver(this.#handleModelEvent);
    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    this.#filterType = this.#filtersModel.filter;

    const points = this.#pointsModel.points;
    const filteredWaypoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.TIME:
        return filteredWaypoints.sort(sortByTime);
      case SortType.PRICE:
        return filteredWaypoints.sort(sortByPrice);
    }
    return filteredWaypoints.sort(sortByDay) ;
  }


  init() {
    this.#renderPointList();
  }

  createWaypoint() {
    this.#currentSortType = SortType.DAY;
    this.#filtersModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);

    if (this.points.length === 0) {
      remove(this.#emptyWaypointComponent);
      render(this.#waypointListComponent, this.#waypointListContainer);
    }

    this.#newPointPresenter.init(this.#destinationsModel.destinations, this.#offersModel.offers);
  }

  #handleModeChange = () => {
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();

    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointPresenters.get(update.id).setSaving();
        try {
          await this.#pointsModel.updatePoint(updateType, update);
        } catch(err) {
          this.#pointPresenters.get(update.id).setAborting();
        }
        break;
      case UserAction.ADD_POINT:
        this.#newPointPresenter.setSaving();
        try {
          await this.#pointsModel.addPoint(updateType, update);
        } catch(err) {
          this.#newPointPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_POINT:
        this.#pointPresenters.get(update.id).setDeleting();
        try {
          await this.#pointsModel.deletePoint(updateType, update);
        } catch(err) {
          this.#pointPresenters.get(update.id).setAborting();
        }
        break;
    }

    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearPointList();
        this.#renderPointList();
        break;
      case UpdateType.MAJOR:
        this.#clearPointList({resetSortType: true});
        this.#renderPointList();
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#renderPointList();
        break;
    }
  };

  #renderTripInfo() {
    render(this.#tripInfoComponent, this.#headerContainer, RenderPosition.AFTERBEGIN);
  }

  #renderWaypoint = (point) => {
    // console.log( this.#destinationsModel, this.#offersModel)
    const pointPresenter = new PointPresenter({
      waypointListContainer: this.#waypointListComponent.element,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point?.id, pointPresenter);
  };

  #renderWaypoints = (points) => {
    points.forEach((point) => this.#renderWaypoint(point));
  };

  #renderNoEvents() {
    this.#emptyWaypointComponent = new ListEmptyView({filterType: this.#filterType});
    render(this.#emptyWaypointComponent, this.#waypointListContainer);
  }

  #renderLoading() {
    render(this.#loadingComponent, this.#waypointListComponent.element, RenderPosition.AFTERBEGIN);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#currentSortType = sortType;
    this.#clearPointList();
    this.#renderPointList();
  };

  #renderSort = () => {
    this.#sortComponent = new ListSortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#waypointListContainer, RenderPosition.AFTERBEGIN);
  };

  #renderPointList() {
    // console.log('UPDATE');
    render(this.#waypointListComponent, this.#waypointListContainer);

    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }

    const points = this.points;
    const pointCount = points.length;

    if (pointCount === 0) {
      this.#renderNoEvents();
    } else {
      this.#renderTripInfo();
    }
    this.#renderSort();
    this.#renderWaypoints(points);
  }

  #clearPointList({resetSortType = false} = {}) {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
    this.#newPointPresenter.destroy();
    remove(this.#sortComponent);
    remove(this.#tripInfoComponent);
    remove(this.#loadingComponent);
    if (this.#emptyWaypointComponent) {
      remove(this.#emptyWaypointComponent);
    }

    if(resetSortType){
      this.#currentSortType = SortType.DAY;
    }
  }
}
