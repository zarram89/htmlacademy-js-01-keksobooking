import { createCardElements } from './elements.js';
import { renderers } from './renderers.js';
import { renderAvatar } from './render-avatar.js';

const buildCard = (template) => template.cloneNode(true);

const renderCard = ({ author, offer }, template) => {
  const cardElement = buildCard(template);
  const elements = createCardElements(cardElement);

  renderers.forEach((fn) => fn(elements, offer));
  renderAvatar(elements, author);

  return cardElement;
};

export { renderCard };
