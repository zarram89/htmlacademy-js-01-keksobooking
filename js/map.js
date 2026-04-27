import { renderCard } from './cards/render-card.js';

const template = document.querySelector('#card').content.querySelector('.popup');

const TOKYO = {
  lat: 35.6895,
  lng: 139.6917,
};

const ZOOM = 10;

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const initMap = ({ ads, onLoad, onMove }) => {
  const map = L.map('map-canvas').setView(TOKYO, ZOOM);

  map.whenReady(onLoad);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; OpenStreetMap contributors',
    }
  ).addTo(map);

  // главная метка
  const mainMarker = L.marker(TOKYO, {
    draggable: true,
    icon: mainPinIcon,
  });

  mainMarker.addTo(map);

  // начальный адрес
  onMove(TOKYO);

  mainMarker.on('moveend', (evt) => {
    const coords = evt.target.getLatLng();
    onMove(coords);
  });

  // обычные метки
  ads.forEach((ad) => {
    const marker = L.marker(ad.location, { icon: pinIcon });

    marker
      .addTo(map)
      .bindPopup(renderCard(ad, template));
  });
};

export { initMap };
