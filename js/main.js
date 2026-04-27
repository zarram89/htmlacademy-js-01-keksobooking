import { createAds } from './data.js';
import { initForm } from './form/index.js';
import { initMap } from './map.js';

const ads = createAds();

const form = initForm();

form.disable();

initMap({
  ads,
  onLoad: form.enable,
  onMove: form.setAddress,
});
