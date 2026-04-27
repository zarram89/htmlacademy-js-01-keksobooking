const createCardElements = (container) => ({
  title: container.querySelector('.popup__title'),
  address: container.querySelector('.popup__text--address'),
  price: container.querySelector('.popup__text--price'),
  type: container.querySelector('.popup__type'),
  capacity: container.querySelector('.popup__text--capacity'),
  time: container.querySelector('.popup__text--time'),
  features: container.querySelector('.popup__features'),
  description: container.querySelector('.popup__description'),
  photos: container.querySelector('.popup__photos'),
  avatar: container.querySelector('.popup__avatar'),
});

export { createCardElements };
