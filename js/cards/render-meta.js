import { isDefined } from './utils.js';

const renderCapacity = (container, { rooms, guests }) => {
  const capacityElement = container.querySelector('.popup__text--capacity');
  if (isDefined(rooms) && isDefined(guests)) {
    capacityElement.textContent = `${rooms} комнаты для ${guests} гостей`;
  } else {
    capacityElement.remove();
  }
};

const renderTime = (container, { checkin, checkout }) => {
  const timeElement = container.querySelector('.popup__text--time');
  if (isDefined(checkin) && isDefined(checkout)) {
    timeElement.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  } else {
    timeElement.remove();
  }
};

export { renderCapacity, renderTime };

