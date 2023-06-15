import dayjs from 'dayjs';
import { FilterType } from './const';


const getByTypeOffers = (type, offers) => offers?.find((offer) => type === offer.type);

const getCheckedOffers = (type, pointOffers, offers) => {
  const offersByType = getByTypeOffers(type, offers);
  if (!offersByType || !offersByType.offers) {
    return;
  }
  const checkedOffers = offersByType.offers.filter((offer) =>
    pointOffers
      .some((offerId) => offerId === offer.id));
  return checkedOffers;
};

const getDestination = (id, destinations) => destinations.find((destination) => destination.id === id);


const calculateDuration = (start, end) => {
  const interval = new Date(end - start);

  return {
    days: interval.getUTCDate() - 1,
    hours: interval.getUTCHours(),
    minutes: interval.getUTCMinutes()
  };
};

const formatDuration = (interval) => {
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

const getFilterTypeByDateRange = (waypointStart, waypointEnd) => {
  const now = new Date();
  if (waypointStart > now) {
    return FilterType.FUTURE;
  } else if (waypointStart <= now && waypointEnd >= now) {
    return FilterType.PRESENT;
  }
  return FilterType.PAST;
};

const filter = {
  [FilterType.EVERYTHING]: (waypoints) => waypoints,
  [FilterType.FUTURE]: (waypoints) => waypoints.filter((waypoint) => getFilterTypeByDateRange(waypoint.dateFrom, waypoint.dateTo) === FilterType.FUTURE),
  [FilterType.PRESENT]: (waypoints) => waypoints.filter((waypoint) => getFilterTypeByDateRange(waypoint.dateFrom, waypoint.dateTo) === FilterType.PRESENT),
  [FilterType.PAST]: (waypoints) => waypoints.filter((waypoint) => getFilterTypeByDateRange(waypoint.dateFrom, waypoint.dateTo) === FilterType.PAST),
};


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
  calculateDuration,
  formatDuration,
  isEscapeKey,
  sortByDay,
  sortByPrice,
  sortByTime,
  filter,
  getOffersByType,
  isDatesEqual,
  getCheckedOffers,
  getDestination
};
