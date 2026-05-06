import { getAds } from './data.js';
import { renderCard } from './card.js';

const mapCanvas = document.querySelector('#map-canvas');
const ads = getAds();

if (ads.length > 0) {
  mapCanvas.append(renderCard(ads[0]));
}
