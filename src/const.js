const MIN_ID_NUMBER = 1;
const MAX_ID_NUMBER = 30;
const MIN_COUNT_PICTURES = 1;
const MAX_COUNT_PICTURES = 10;
const MIN_SRC_NUMBER = 100;
const MAX_SRC_NUMBER = 200;
const MIN_BASE_PRICE = 100;
const MAX_BASE_PRICE = 3000;

const POINTS_COUNT = 5;

const DESTINATIONS_CITIES = ['Amsterdam', 'Alicante', 'Minsk', 'Tashkent', 'Chamonix', 'Geneva', 'Seoul', 'Sihanoukville', 'New York'];

const WAYPOINTS_TYPES = ['Check-in', 'Sightseeing', 'Restaurant', 'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight'];

const DESTINATIONS_DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'Fusce tristique felis at fermentum pharetra.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.'
];

const PICTURES_DESCRIPTIONS = [
  'Aliquam erat volutpat.',
  'Cras aliquet varius magna.',
  'Phasellus eros mauris.',
  'Fusce tristique felis.',
  'Nullam nunc ex.'
];

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
};

export {
  DESTINATIONS_CITIES,
  WAYPOINTS_TYPES,
  DESTINATIONS_DESCRIPTIONS,
  PICTURES_DESCRIPTIONS,
  MIN_ID_NUMBER,
  MAX_ID_NUMBER,
  MIN_COUNT_PICTURES,
  MAX_COUNT_PICTURES,
  MIN_SRC_NUMBER,
  MAX_SRC_NUMBER,
  MIN_BASE_PRICE,
  MAX_BASE_PRICE,
  POINTS_COUNT,
  BLANK_WAYPOINT_DEFAULT,
  DEFAULT_POINT_TYPE,
  FilterType,
  SortType,
  FormType,
  UserAction,
  UpdateType,
  EmptyListMessage
};
