import { renderers } from './renderers.js';
import { renderAvatar } from './render-avatar.js';

const renderCard = ({ author, offer }, template, renderersList = renderers) => {
  const cardElement = template.cloneNode(true);

  renderersList.forEach((fn) => fn(cardElement, offer));
  renderAvatar(cardElement, author);

  return cardElement;
};

export { renderCard };
