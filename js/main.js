import { getAds } from './data.js';
import { disablePage, initSlider } from './form.js';
import { initMap } from './map.js';

const ads = getAds();

disablePage();
initSlider();
initMap(ads);
