import { createAds } from './data.js';
import { renderCard } from './cards/index.js';

const template = document.querySelector('#card');
if (!template) {
  throw new Error('Template #card not found');
}
const cardTemplate = template.content.querySelector('.popup');

const mapCanvas = document.querySelector('#map-canvas');
const ads = createAds();

if (ads.length > 0) {
  mapCanvas.append(renderCard(ads[0], cardTemplate));
}
