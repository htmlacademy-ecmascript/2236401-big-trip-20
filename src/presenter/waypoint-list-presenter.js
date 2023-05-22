import { render, RenderPosition, remove } from '../framework/render.js';
import WaypointListView from '../view/waypoint-list-view.js';
import EventWaypointFormView from '../view/event-waypoint-form-view.js';
import TripInfoView from '../view/trip-info-view.js';
import { isEscapeKey, updateItem } from '../utils.js';
import EmptyWaypointListView from '../view/empty-waypoint-list-view.js';
import AddNewWaypointButtonView from '../view/add-new-waypoint-button-view.js';
import PointPresenter from './point-presenter.js';

export default class WaypointListPresenter {
  #headerContainer = null;
  #waypointListContainer = null;
  #pointsModel = null;

  #waypointListComponent = new WaypointListView();

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

    // render(this.#waypointListComponent, this.#waypointListContainer);
    this.#renderAddFormButton();
    if (this.#listPoints.length) {
      render(new TripInfoView(), this.#headerContainer, RenderPosition.AFTERBEGIN);
      for (let i = 0; i < this.#listPoints.length; i++) {
        this.#renderWaypoints(this.#listPoints[i], i);
      }
    } else {
      render(new EmptyWaypointListView(this.filterType), this.#waypointListContainer);
    }
    render(this.#waypointListComponent, this.#waypointListContainer);
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#listPoints = updateItem(this.#listPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
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

  #renderWaypoints = (point, destinations, offers) => {
    const formType = 'add';
    const pointPresenter = new PointPresenter({
      waypointListContainer: this.#waypointListComponent.element,
      formType,
      onDataChange:this.#handlePointChange,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point, destinations, offers);
    this.#pointPresenters.set(point.id, pointPresenter);
  };


  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }
}
