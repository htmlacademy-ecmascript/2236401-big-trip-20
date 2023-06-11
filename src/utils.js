import dayjs from 'dayjs';
import { FilterType } from './const';

// Функции для поиска случайного числа из диапазона

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomNumber = (min, max) => getRandomInteger(min, max);
const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];


//Функция для генерации дополнительных предложений

const getRandomOffersByType = (offers, type) => {
  const index = offers.map((offer) => offer.type).indexOf(type);
  const offersIDs = [];

  if (index !== -1) {
    const offersByType = offers[index].offers;
    if (offersByType) {
      for (let i = 0; i < offersByType.length; i++) {
        offersIDs.push(offersByType[i].id.toString());
      }
      return offersIDs;
    }
  }
  return offersIDs;
};


//Функция для генерации случайных дат

const getRandomDate = () => {
  const minCount = 1;
  const maxCountDays = 15;
  const maxCountHours = 23;
  const maxCountMinutes = 59;

  const startDate = dayjs()
    .add(getRandomNumber(minCount, maxCountDays), 'day')
    .add(getRandomNumber(minCount, maxCountHours), 'hour')
    .add(getRandomNumber(minCount, maxCountMinutes), 'minute');

  const endDate = startDate.clone()
    .add(getRandomInteger(0, maxCountDays), 'day')
    .add(getRandomInteger(0, maxCountHours), 'hour')
    .add(getRandomInteger(0, maxCountMinutes), 'minute');

  return {
    start: startDate.toDate(),
    end: endDate.toDate()
  };
};

const countDuration = (start, end) => {
  const interval = new Date(end - start);

  return {
    days: interval.getUTCDate() - 1,
    hours: interval.getUTCHours(),
    minutes: interval.getUTCMinutes()
  };
};

const constructionDuration = (interval) => {
  const duration = [];
  if (interval.days !== 0) {
    duration[0] = String(interval.days).padStart(2, '0');
    duration[0] += 'D';
  }
  if (interval.hours !== 0) {
    duration[1] = String(interval.hours).padStart(2, '0');
    duration[1] += 'H';
  }
  if (interval.minutes !== 0) {
    duration[2] = String(interval.minutes).padStart(2, '0');
    duration[2] += 'M';
  }

  return duration.join('');
};

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const checkWaypointStatus = (waypointStart, waypointEnd) => {
  const now = new Date();
  if (waypointStart > now) {
    return 'future';
  } else if (waypointStart <= now && waypointEnd >= now) {
    return 'present';
  } else {
    return 'past';
  }
};

const filter = {
  [FilterType.EVERYTHING]: (waypoints) => waypoints,
  [FilterType.FUTURE]: (waypoints) => waypoints.filter((waypoint) => checkWaypointStatus(waypoint.dateFrom, waypoint.dateTo) === 'future'),
  [FilterType.PRESENT]: (waypoints) => waypoints.filter((waypoint) => checkWaypointStatus(waypoint.dateFrom, waypoint.dateTo) === 'present'),
  [FilterType.PAST]: (waypoints) => waypoints.filter((waypoint) => checkWaypointStatus(waypoint.dateFrom, waypoint.dateTo) === 'past'),
};

const createFilter = (waypoints) => Object.entries(filter).map(
  ([filterName, filterWaypoints]) => ({
    name: filterName,
    isDisabled:!(filterWaypoints(waypoints).length > 0)
  }),
);

// сортировка точек маршрута

const sortByTime = (pointA, pointB) => {
  const durationA = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
  const durationB = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom));

  return durationB - durationA;
};

const sortByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;

const sortByDay = (pointA, pointB) => dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));

const getOffersByType = (offers, offerType) => {
  const offersByType = offers.find((offer) => offer.type === offerType);
  return offersByType ? offersByType.offers : [];
};

const isDatesEqual = (dateA, dateB) => dayjs(dateA).isSame(dateB);

export {
  getRandomArrayElement,
  getRandomNumber,
  getRandomDate,
  getRandomOffersByType,
  createRandomIdFromRangeGenerator,
  countDuration,
  constructionDuration,
  isEscapeKey,
  createFilter,
  sortByDay,
  sortByPrice,
  sortByTime,
  filter,
  getOffersByType,
  isDatesEqual
};
