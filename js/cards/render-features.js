const renderFeatures = (elements, { features }) => {
  const container = elements.features;

  if (!features || features.length === 0) {
    container.remove();
    return;
  }

  const featureSet = new Set(features);
  const items = container.querySelectorAll('.popup__feature');

  items.forEach((item) => {
    const modifierClass = Array.from(item.classList)
      .find((cls) => cls.startsWith('popup__feature--'));

    if (!modifierClass) {
      item.remove();
      return;
    }

    const modifier = modifierClass.replace('popup__feature--', '');

    if (!featureSet.has(modifier)) {
      item.remove();
    }
  });
};

export { renderFeatures };
