import { render, RenderPosition, replace, remove } from '../framework/render.js';
import WaypointListView from '../view/waypoint-list-view.js';
import WaypointItemView from '../view/waypoint-item-view';
import EventWaypointFormView from '../view/event-waypoint-form-view.js';
import TripInfoView from '../view/trip-info-view.js';
import { isEscapeKey } from '../utils.js';
import EmptyWaypointListView from '../view/empty-waypoint-list-view.js';
import AddNewWaypointButtonView from '../view/add-new-waypoint-button-view.js';

export default class WaypointListPresenter {
  #headerContainer = null;
  #waypointListContainer = null;
  #pointsModel = null;

  #waypointListComponent = new WaypointListView();

  #listPoints = [];

  constructor ({ headerContainer, waypointListContainer, pointsModel }) {
    this.#headerContainer = headerContainer;
    this.#waypointListContainer = waypointListContainer;
    this.#pointsModel = pointsModel;
    this.filterType = '';
  }

  init() {
    this.#listPoints = [...this.#pointsModel.points];

    render(this.#waypointListComponent, this.#waypointListContainer);
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

  #renderAddFormButton (){
    const formType = 'add';
    const eventFormComponent = new EventWaypointFormView({
      formType,
      onSubmit: () => {
        removeAddForm.call(this);
        document.removeEventListener('keydown', handleEscKeyDown);
      },
      onReset: () => {
        removeAddForm.call(this);
        document.removeEventListener('keydown', handleEscKeyDown);
      },
    });

    function removeAddForm () {
      remove(eventFormComponent);
    }

    function handleEscKeyDown (evt) {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        removeAddForm.call(this);
        document.removeEventListener('keydown', handleEscKeyDown);
      }
    }

    const addWaypointButton = new AddNewWaypointButtonView({onAddClick: () => {
      this.#renderAddForm(eventFormComponent);
      document.addEventListener('keydown', handleEscKeyDown);
    }});

    render(addWaypointButton, this.#headerContainer, RenderPosition.BEFOREEND);
  }

  #renderAddForm(eventFormComponent){
    render (eventFormComponent, this.#waypointListComponent.element, RenderPosition.AFTERBEGIN);
  }


  #renderWaypoints(point, waypointIndex) {
    const formType = 'edit';

    const waypointComponent = new WaypointItemView({
      point,
      onEditClick: () => {
        replaceComponent.call(this, 'point');
        document.addEventListener('keydown', handleEscKeyDown);
      }
    });

    const eventFormComponent = new EventWaypointFormView({
      point,
      waypointIndex,
      formType,
      onSubmit: () => {
        replaceComponent.call(this, 'form');
        document.removeEventListener('keydown', handleEscKeyDown);
      },
      onReset: () => {
        replaceComponent.call(this, 'form');
        document.removeEventListener('keydown', handleEscKeyDown);
      },
    });

    function replaceComponent (componentType) {
      const replacingComponent = componentType === 'point'
        ? eventFormComponent
        : waypointComponent;
      const replaceableComponent = componentType === 'point'
        ? waypointComponent
        : eventFormComponent;
      replace(replacingComponent,replaceableComponent);
    }

    function handleEscKeyDown (evt) {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        replaceComponent.call(this, waypointComponent.element, eventFormComponent.element);
        document.removeEventListener('keydown', handleEscKeyDown);
      }
    }

    render(waypointComponent, this.#waypointListComponent.element);
  }
}
