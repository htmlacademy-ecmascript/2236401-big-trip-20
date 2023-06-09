import WaypointListPresenter from './presenter/waypoint-list-presenter.js';
// import PointsModel from './model/waypoint-model.js';
import MockService from './service/mock-service.js';
import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';
import FiltersPresenter from './presenter/filters-presenter.js';

const siteHeaderElement = document.querySelector('.page-header');
const listFiltersContainer = siteHeaderElement.querySelector('.trip-controls__filters');
const tripInfoContainer = siteHeaderElement.querySelector('.trip-main');

const siteMainElement = document.querySelector('.page-main');
const tripEventsContainer = siteMainElement.querySelector('.trip-events');

// const pointsModel = new PointsModel();
const mockService = new MockService();
const pointsModel = new PointsModel(mockService);
const offersModel = new OffersModel(mockService);
const destinationsModel = new DestinationsModel(mockService);

const waypointListPresenter = new WaypointListPresenter({
  headerContainer: tripInfoContainer,
  waypointListContainer: tripEventsContainer,
  destinationsModel,
  offersModel,
  pointsModel
});
const filtersPresenter = new FiltersPresenter({ listFiltersContainer, pointsModel });


filtersPresenter.init();
waypointListPresenter.init();
