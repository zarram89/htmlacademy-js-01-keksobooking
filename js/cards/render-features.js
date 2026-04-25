const renderFeatures = (container, { features }) => {
  const featuresContainer = container.querySelector('.popup__features');
  if (features && features.length > 0) {
    const featuresList = featuresContainer.querySelectorAll('.popup__feature');
    const featureSet = new Set(features);
    featuresList.forEach((item) => {
      const modifier = Array.from(item.classList)
        .find((cls) => cls.startsWith('popup__feature--'))
        .replace('popup__feature--', '');

      if (!featureSet.has(modifier)) {
        item.remove();
      }
    });
  } else {
    featuresContainer.remove();
  }
};

export { renderFeatures };
