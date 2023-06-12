const WAYPOINTS_TYPES = ['Check-in', 'Sightseeing', 'Restaurant', 'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight'];

const DEFAULT_POINT_TYPE = 'taxi';
const BLANK_WAYPOINT_DEFAULT = {
  'basePrice': '',
  'dateFrom': new Date(),
  'dateTo': new Date(),
  'destination': '',
  'isFavorite': false,
  'offers': [],
  'type': DEFAULT_POINT_TYPE
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const EmptyListMessage = {
  EVERYTHING: 'Click New Event to create your first point',
  FUTURE: 'There are no future events now',
  PRESENT: 'There are no present events now',
  PAST: 'There are no past events now',
};

const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
};

const FormType = {
  ADDING: 'adding',
  EDITING: 'editing',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

export {
  WAYPOINTS_TYPES,
  BLANK_WAYPOINT_DEFAULT,
  DEFAULT_POINT_TYPE,
  FilterType,
  SortType,
  FormType,
  UserAction,
  UpdateType,
  EmptyListMessage
};
