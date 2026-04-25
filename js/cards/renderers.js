import {
  renderTitle,
  renderAddress,
  renderPrice,
  renderType,
  renderDescription,
} from './render-fields.js';
import {
  renderCapacity,
  renderTime,
} from './render-meta.js';
import { renderFeatures } from './render-features.js';
import { renderPhotos } from './render-photos.js';

const renderers = [
  renderTitle,
  renderAddress,
  renderPrice,
  renderType,
  renderCapacity,
  renderTime,
  renderFeatures,
  renderDescription,
  renderPhotos,
];

export { renderers };
