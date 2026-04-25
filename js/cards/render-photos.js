const renderPhotos = (container, { photos }) => {
  const photosContainer = container.querySelector('.popup__photos');
  if (photos && photos.length > 0) {
    const photoTemplate = photosContainer.querySelector('.popup__photo');

    photosContainer.replaceChildren();

    photos.forEach((src) => {
      const photoElement = photoTemplate.cloneNode(true);

      photoElement.src = src;

      photosContainer.appendChild(photoElement);
    });
  } else {
    photosContainer.remove();
  }
};

export { renderPhotos };
