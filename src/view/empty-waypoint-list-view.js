import AbstractView from '../framework/view/abstract-view.js';
import { FilterType, EmptyListMessage } from '../const.js';

const createWaypointListEmptyTemplate = (filterType) => {
  let messageText = '';
  switch (filterType){
    case FilterType.PAST:
      messageText = EmptyListMessage.PAST;
      break;
    case FilterType.PRESENT:
      messageText = EmptyListMessage.PRESENT;
      break;
    case FilterType.FUTURE:
      messageText = EmptyListMessage.FUTURE;
      break;
    default:
      messageText = EmptyListMessage.EVERYTHING;
      break;
  }

  return `<p class="trip-events__msg">${messageText}</p>`;
};

export default class ListEmptyView extends AbstractView {
  #filterType = null;

  constructor({filterType}){
    super();
    this.#filterType = filterType;
  }

  get template(){
    return createWaypointListEmptyTemplate(this.#filterType);
  }
}
