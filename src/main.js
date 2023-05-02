import { render } from './render.js';
import ListFiltersView from './view/list-filters-view.js';
import ListSortView from './view/list-sort-view.js';
import WaypointListPresenter from './presenter/waypoint-list-presenter.js';
import PointsModel from './model/waypoint-model.js';

const siteHeaderElement = document.querySelector('.page-header');
const listFiltersContainer = siteHeaderElement.querySelector('.trip-controls__filters');

const siteMainElement = document.querySelector('.page-main');
const tripEventsContainer = siteMainElement.querySelector('.trip-events');

const pointsModel = new PointsModel();
const waypointListPresenter = new WaypointListPresenter({waypointListContainer: tripEventsContainer, pointsModel});

render(new ListFiltersView(), listFiltersContainer);
render(new ListSortView(), tripEventsContainer);

waypointListPresenter.init();
import './mock/data-structure.js';
import './utils.js';
