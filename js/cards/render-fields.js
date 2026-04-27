import { fillElement } from './utils.js';
import { HOUSING_TYPES } from './constants.js';

const renderTitle = (elements, { title }) => {
  fillElement(elements.title, title);
};

const renderAddress = (elements, { address }) => {
  fillElement(elements.address, address);
};

const renderPrice = (elements, { price }) => {
  fillElement(elements.price, price, (val) => `${val} ₽/ночь`);
};

const renderType = (elements, { type }) => {
  fillElement(elements.type, HOUSING_TYPES[type]);
};

const renderDescription = (elements, { description }) => {
  fillElement(elements.description, description);
};

export {
  renderTitle,
  renderAddress,
  renderPrice,
  renderType,
  renderDescription,
};
