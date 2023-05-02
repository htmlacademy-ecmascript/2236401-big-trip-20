import { render } from '../render.js';
import WaypointListView from '../view/waypoint-list-view.js';
import WaypointItemView from '../view/waypoint-item-view';
import EditionWaypointFormView from '../view/edition-waypoint-form-view.js';
import '../model/waypoint-model.js';
import { getRandomArrayElement } from '../utils.js';
export default class WaypointListPresenter {
  waypointListComponent = new WaypointListView();

  constructor ({ waypointListContainer, pointsModel }) {
    this.waypointListContainer = waypointListContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.listPoints = [...this.pointsModel.getPoints()];


    render(this.waypointListComponent, this.waypointListContainer);
    render(new EditionWaypointFormView(getRandomArrayElement(this.listPoints)), this.waypointListComponent.getElement());

    for (let i = 0; i < this.listPoints.length; i++) {
      render(new WaypointItemView({ point: this.listPoints[i] }), this.waypointListComponent.getElement());
    }
  }
}
