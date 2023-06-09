import {
  getRandomArrayElement,
  getRandomNumber,
  getRandomDate,
} from '../utils';
import {
  DESTINATIONS_DESCRIPTIONS,
  PICTURES_DESCRIPTIONS,
  DESTINATIONS_CITIES,
  MIN_COUNT_PICTURES,
  MAX_COUNT_PICTURES,
  MIN_BASE_PRICE,
  MAX_BASE_PRICE,
} from '../const';


const generateDestination = () => {
  const city = getRandomArrayElement(DESTINATIONS_CITIES);
  const description = getRandomArrayElement(PICTURES_DESCRIPTIONS);

  return {
    id: crypto.randomUUID(),
    description: getRandomArrayElement(DESTINATIONS_DESCRIPTIONS),
    name: city,
    pictures: Array.from({length: getRandomNumber(MIN_COUNT_PICTURES, MAX_COUNT_PICTURES)}, () => ({
      src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
      description: `${city} ${description}`
    }))
  };
};

const generateOffer = (type) => ({
  id: crypto.randomUUID(),
  title: `Offer ${type}`,
  price: getRandomNumber(10, 300)
});

const generatePoint = (type, destinationId, offerId) => {
  const date = getRandomDate();
  return {
    id: crypto.randomUUID(),
    basePrice: getRandomNumber(MIN_BASE_PRICE, MAX_BASE_PRICE),
    dateFrom: date.start,
    dateTo: date.end,
    destination: destinationId,
    isFavorite: Math.random() > 0.5,
    offers: offerId,
    type
  };
};

export {
  generateDestination,
  generateOffer,
  generatePoint

};
//eslint-disable-next-line no-console
console.log(generateDestination());
//eslint-disable-next-line no-console
console.log(generateOffer());
//eslint-disable-next-line no-console
console.log(generatePoint());
