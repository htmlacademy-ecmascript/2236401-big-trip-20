import WaypointListPresenter from './presenter/waypoint-list-presenter.js';
import MockService from './service/mock-service.js';
import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';
import FiltersModel from './model/filters-model.js';
import FiltersPresenter from './presenter/filters-presenter.js';
import AddNewWaypointButtonView from './view/add-new-waypoint-button-view.js';
import { render, RenderPosition } from './framework/render.js';

const siteHeaderElement = document.querySelector('.page-header');
const listFiltersContainer = siteHeaderElement.querySelector('.trip-controls__filters');
const tripInfoContainer = siteHeaderElement.querySelector('.trip-main');

const siteMainElement = document.querySelector('.page-main');
const tripEventsContainer = siteMainElement.querySelector('.trip-events');

const mockService = new MockService();
const pointsModel = new PointsModel(mockService);
const offersModel = new OffersModel(mockService);
const destinationsModel = new DestinationsModel(mockService);
const filtersModel = new FiltersModel();

const filtersPresenter = new FiltersPresenter({ listFiltersContainer, filtersModel, pointsModel });

const waypointListPresenter = new WaypointListPresenter({
  headerContainer: tripInfoContainer,
  filtersModel,
  waypointListContainer: tripEventsContainer,
  destinationsModel,
  offersModel,
  pointsModel,
  onNewPointDestroy: handleNewPointFormClose
});

const addNewWaypointComponent = new AddNewWaypointButtonView({ onAddClickHandler: handleAddNewWaypoint });

function handleAddNewWaypoint() {
  waypointListPresenter.createWaypoint();
  addNewWaypointComponent.element.disabled = true;
}
function handleNewPointFormClose() {
  addNewWaypointComponent.element.disabled = false;
}

render(addNewWaypointComponent, tripInfoContainer, RenderPosition.BEFOREEND);

filtersPresenter.init();
waypointListPresenter.init();
