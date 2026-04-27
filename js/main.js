import { createAds } from './data.js';
import { renderCard } from './cards/index.js';
import { initForm } from './form/index.js';

const template = document.querySelector('#card');
if (!template) {
  throw new Error('Template #card not found');
}
const cardTemplate = template.content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');

const ads = createAds();
const [firstAd] = ads;

if (firstAd) {
  mapCanvas.append(renderCard(firstAd, cardTemplate));
}

const form = initForm();

form.enable();
