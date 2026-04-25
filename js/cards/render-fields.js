import { fillElement } from './utils.js';
import { HOUSING_TYPES } from './constants.js';

const renderTitle = (container, { title }) => {
  const titleElement = container.querySelector('.popup__title');
  fillElement(titleElement, title);
};

const renderAddress = (container, { address }) => {
  const addressElement = container.querySelector('.popup__text--address');
  fillElement(addressElement, address);
};

const renderPrice = (container, { price }) => {
  const priceElement = container.querySelector('.popup__text--price');
  fillElement(priceElement, price, (val) => `${val} ₽/ночь`);
};

const renderType = (container, { type }) => {
  const typeElement = container.querySelector('.popup__type');
  fillElement(typeElement, HOUSING_TYPES[type]);
};

const renderDescription = (container, { description }) => {
  const descriptionElement = container.querySelector('.popup__description');
  fillElement(descriptionElement, description);
};

export { renderTitle, renderAddress, renderPrice, renderType, renderDescription };
