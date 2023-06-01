import { render, RenderPosition, remove } from '../framework/render.js';
import WaypointListView from '../view/waypoint-list-view.js';
import EventWaypointFormView from '../view/event-waypoint-form-view.js';
import TripInfoView from '../view/trip-info-view.js';
import ListSortView from '../view/list-sort-view.js';
import {
  isEscapeKey,
  updateItem,
  sortByDay,
  sortByPrice,
  sortByTime,
} from '../utils.js';
import { SortType } from '../const.js';
import EmptyWaypointListView from '../view/empty-waypoint-list-view.js';
import AddNewWaypointButtonView from '../view/add-new-waypoint-button-view.js';
import PointPresenter from './point-presenter.js';

export default class WaypointListPresenter {
  #headerContainer = null;
  #waypointListContainer = null;
  #pointsModel = null;

  #filtersModel = null;
  #filterType = null;

  #sortComponent = null;
  #currentSortType = SortType.DAY;
  #sourcedListPoints = [];

  #waypointListComponent = new WaypointListView();
  #emptyWaypointComponent = new EmptyWaypointListView();

  #listPoints = [];
  #pointPresenters = new Map();

  constructor ({ headerContainer, waypointListContainer, pointsModel }) {
    this.#headerContainer = headerContainer;
    this.#waypointListContainer = waypointListContainer;
    this.#pointsModel = pointsModel;
    this.filterType = '';
  }


  init() {
    this.#listPoints = [...this.#pointsModel.points];
    this.#sourcedListPoints = [...this.#pointsModel.points];

    this.#renderAddFormButton();
    this.#renderTrip();
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#listPoints = updateItem(this.#listPoints, updatedPoint);
    this.#sourcedListPoints = updateItem(this.#sourcedListPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderWaypointsEvents();
    this.#renderSort();
  };

  #sortPoints(sortType) {
    switch (sortType) {
      case SortType.DAY:
        this.#listPoints.sort(sortByDay);
        break;
      case SortType.TIME:
        this.#listPoints.sort(sortByTime);
        break;
      case SortType.PRICE:
        this.#listPoints.sort(sortByPrice);
        break;
      default:
        this.#listPoints = [...this.#sourcedListPoints];
    }

    this.#currentSortType = sortType;
  }

  #renderSort = () => {
    this.#sortComponent = new ListSortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#waypointListContainer, RenderPosition.AFTERBEGIN);
  };

  #renderAddFormButton () {
    const formType = 'add';
    const eventFormComponent = new EventWaypointFormView({
      formType,
      onSubmit: submitButtonClickHandler,
      onReset: resetButtonClickHandler
    });

    function resetButtonClickHandler() {
      removeAddForm();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    function submitButtonClickHandler() {
      removeAddForm();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    function removeAddForm() {
      remove(eventFormComponent);
    }

    function escKeyDownHandler (evt) {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        removeAddForm(this);
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    }

    const addWaypointButton = new AddNewWaypointButtonView({ onAddClickHandler: () => {
      this.#renderAddForm(eventFormComponent);
      document.addEventListener('keydown', escKeyDownHandler);
      //eslint-disable-next-line no-console
      console.log(1);
    }});

    render(addWaypointButton, this.#headerContainer, RenderPosition.BEFOREEND);
  }

  #renderAddForm = (eventFormComponent) => {
    render (eventFormComponent, this.#waypointListComponent.element, RenderPosition.AFTERBEGIN);
  };

  #renderWaypoints = (point, destination, offers) => {
    const formType = 'add';
    const pointPresenter = new PointPresenter({
      waypointListContainer: this.#waypointListComponent.element,
      formType,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point, destination, offers);
    this.#pointPresenters.set(point?.id, pointPresenter);
  };


  #clearPointList({resetSortType = false} = {}) {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
    remove(this.#sortComponent);
    if(this.#emptyWaypointComponent){
      remove(this.#emptyWaypointComponent);
    }
    if(resetSortType){
      this.#currentSortType = SortType.DAY;
    }
  }

  #renderWaypointsEvents() {
    this.#listPoints.forEach((waypoint) => this.#renderWaypoints(waypoint, this.destinations, this.offers));
  }

  #renderNoEvents() {
    render(this.#emptyWaypointComponent(this.filterType), this.#waypointListContainer);
  }

  #renderPointsList() {
    if (this.#listPoints.length) {
      this.#renderWaypointsEvents(this.#listPoints);
    } else {
      this.#renderNoEvents();
      return;
    }
    render(this.#waypointListComponent, this.#waypointListContainer);
  }

  #renderTripInfo() {
    if (this.#listPoints.length) {
      render(new TripInfoView(), this.#headerContainer, RenderPosition.AFTERBEGIN);
    }
  }

  #renderTrip() {
    render(this.#waypointListComponent, this.#waypointListContainer);
    this.#renderTripInfo();

    this.#renderSort();
    this.#listPoints.sort(sortByDay);
    this.#renderPointsList();
  }
}
