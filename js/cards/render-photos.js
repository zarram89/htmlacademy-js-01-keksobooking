const renderPhotos = (elements, { photos }) => {
  const container = elements.photos;

  if (!photos || photos.length === 0) {
    container.remove();
    return;
  }

  const template = container.querySelector('.popup__photo');

  container.replaceChildren();

  const fragment = document.createDocumentFragment();

  photos.forEach((src) => {
    const img = template.cloneNode(true);
    img.src = src;
    fragment.append(img);
  });

  container.appendChild(fragment);
};

export { renderPhotos };
