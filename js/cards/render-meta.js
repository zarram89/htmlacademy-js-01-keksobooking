import { isDefined } from './utils.js';

const renderCapacity = (elements, { rooms, guests }) => {
  if (isDefined(rooms) && isDefined(guests)) {
    elements.capacity.textContent = `${rooms} комнаты для ${guests} гостей`;
  } else {
    elements.capacity.remove();
  }
};

const renderTime = (elements, { checkin, checkout }) => {
  if (isDefined(checkin) && isDefined(checkout)) {
    elements.time.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  } else {
    elements.time.remove();
  }
};

export { renderCapacity, renderTime };
