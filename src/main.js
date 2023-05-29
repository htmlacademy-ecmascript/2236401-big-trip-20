// import { render } from './framework/render.js';
// import ListSortView from './view/list-sort-view.js';
import WaypointListPresenter from './presenter/waypoint-list-presenter.js';
import PointsModel from './model/waypoint-model.js';
import FiltersPresenter from './presenter/filters-presenter.js';

const siteHeaderElement = document.querySelector('.page-header');
const listFiltersContainer = siteHeaderElement.querySelector('.trip-controls__filters');
const tripInfoContainer = siteHeaderElement.querySelector('.trip-main');

const siteMainElement = document.querySelector('.page-main');
const tripEventsContainer = siteMainElement.querySelector('.trip-events');

const pointsModel = new PointsModel();
const waypointListPresenter = new WaypointListPresenter({ headerContainer: tripInfoContainer, waypointListContainer: tripEventsContainer, pointsModel });
const filtersPresenter = new FiltersPresenter({ listFiltersContainer, pointsModel });

// render(new ListSortView(), tripEventsContainer);

filtersPresenter.init();
waypointListPresenter.init();
