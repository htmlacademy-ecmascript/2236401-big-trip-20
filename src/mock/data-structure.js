import {
  getRandomArrayElement,
  getRandomNumber,
  getRandomDate,
  getRandomOffersByType,
} from '../utils';
import {
  DESTINATIONS_DESCRIPTIONS,
  PICTURES_DESCRIPTIONS,
  DESTINATIONS_CITIES,
  WAYPOINTS_TYPES,
  Offers,
  MIN_COUNT_PICTURES,
  MAX_COUNT_PICTURES,
  MIN_BASE_PRICE,
  MAX_BASE_PRICE,
} from '../const';


const getRandomDestination = () => ({
  id: crypto.randomUUID(),
  description: getRandomArrayElement(DESTINATIONS_DESCRIPTIONS),
  name: getRandomArrayElement(DESTINATIONS_CITIES),
  pictures: Array.from({length: getRandomNumber(MIN_COUNT_PICTURES, MAX_COUNT_PICTURES)}, () => ({
    src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
    description: getRandomArrayElement(PICTURES_DESCRIPTIONS)
  }))
});


const saveNewWaypoint = () => {
  const type = getRandomArrayElement(WAYPOINTS_TYPES);
  const date = getRandomDate();
  const { id } = getRandomDestination();

  return {
    id: crypto.randomUUID(),
    basePrice: getRandomNumber(MIN_BASE_PRICE, MAX_BASE_PRICE),
    dateFrom: date.start,
    dateTo: date.end,
    destination: id,
    isFavorite: Math.random() > 0.5,
    offers: getRandomOffersByType(Offers, type.toLowerCase()),
    type: type
  };
};

const createMockPoints = (count) => Array.from({ length: count }, (_, index) => saveNewWaypoint(index));

export {
  getRandomDestination,
  createMockPoints,
  saveNewWaypoint,
};
//eslint-disable-next-line no-console
console.log(getRandomDestination());
//eslint-disable-next-line no-console
console.log(saveNewWaypoint());
