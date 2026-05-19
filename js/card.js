import { isDefined, isNotEmpty } from './util.js';

const HOUSING_TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const fillElement = (element, value, formatFn = null) => {
  if (isNotEmpty(value)) {
    element.textContent = formatFn ? formatFn(value) : value;
  } else {
    element.remove();
  }
};

const cardTemplate = document
  .querySelector('#card')
  .content
  .querySelector('.popup');

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

function renderType(container, { type }) {
  const typeElement = container.querySelector('.popup__type');
  fillElement(typeElement, HOUSING_TYPES[type]);
}

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

const renderFeatures = (container, { features }) => {
  const featuresContainer = container.querySelector('.popup__features');
  if (features && features.length > 0) {
    const featuresList = featuresContainer.querySelectorAll('.popup__feature');
    const featureSet = new Set(features);
    featuresList.forEach((item) => {
      const modifier = Array.from(item.classList)
        .find((cls) => cls.startsWith('popup__feature--'))
        .replace('popup__feature--', '');

      if (!featureSet.has(modifier)) {
        item.remove();
      }
    });
  } else {
    featuresContainer.remove();
  }
};

const renderDescription = (container, { description }) => {
  const descriptionElement = container.querySelector('.popup__description');
  fillElement(descriptionElement, description);
};

const renderAvatar = (container, { avatar }) => {
  const avatarElement = container.querySelector('.popup__avatar');
  if (avatar) {
    avatarElement.src = avatar;
  } else {
    avatarElement.remove();
  }
};

const renderPhotos = (container, { photos }) => {
  const photosContainer = container.querySelector('.popup__photos');
  if (photos && photos.length > 0) {
    const photoTemplate = photosContainer.querySelector('.popup__photo');

    photosContainer.replaceChildren();

    photos.forEach((src) => {
      const photoElement = photoTemplate.cloneNode(true);

      photoElement.src = src;

      photosContainer.appendChild(photoElement);
    });
  } else {
    photosContainer.remove();
  }
};

const renderCard = ({ author, offer }) => {
  const cardElement = cardTemplate.cloneNode(true);

  renderTitle(cardElement, offer);
  renderAddress(cardElement, offer);
  renderPrice(cardElement, offer);
  renderType(cardElement, offer);
  renderCapacity(cardElement, offer);
  renderTime(cardElement, offer);
  renderFeatures(cardElement, offer);
  renderDescription(cardElement, offer);
  renderPhotos(cardElement, offer);
  renderAvatar(cardElement, author);

  return cardElement;
};

export { renderCard };
