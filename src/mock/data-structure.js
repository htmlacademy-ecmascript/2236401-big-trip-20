import {
  getRandomArrayElement,
  getRandomNumber,
  getRandomDate,
  getRandomOffersByType,
  createRandomIdFromRangeGenerator,
} from '../utils';
import {
  DESTINATIONS_DESCRIPTIONS,
  PICTURES_DESCRIPTIONS,
  DESTINATIONS_CITIES,
  WAYPOINTS_TYPES,
  Offers
} from '../const';

const idNumber = createRandomIdFromRangeGenerator(1,10);

const getRandomDestination = () => ({
  id: idNumber() ? idNumber().toString() : '',
  description: getRandomArrayElement(DESTINATIONS_DESCRIPTIONS),
  name: getRandomArrayElement(DESTINATIONS_CITIES),
  pictures: Array.from({length: getRandomNumber(1, 10)}, () => ({
    src: `https://loremflickr.com/248/152?random=${getRandomNumber(100,200)}`,
    description: getRandomArrayElement(PICTURES_DESCRIPTIONS)
  }))
});


const saveNewWaypoint = () => {
  const type = getRandomArrayElement(WAYPOINTS_TYPES);
  const date = getRandomDate();
  const { id } = getRandomDestination();

  return {
    basePrice: getRandomNumber(100, 2000),
    dateFrom: date.start,
    dateTo: date.end,
    destination: id,
    isFavorite: Math.random() > 0.5,
    offers: getRandomOffersByType(Offers, type.toLowerCase()),
    type: type
  };
};

const createMockPoints = (count) => Array.from({ length: count }, (_, index) => saveNewWaypoint(index));

export { getRandomDestination, createMockPoints, saveNewWaypoint };
//eslint-disable-next-line no-console
console.log(getRandomDestination());
//eslint-disable-next-line no-console
console.log(saveNewWaypoint());
