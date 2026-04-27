const minPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const createMinPriceRule = (priceField, typeField) => ({
  element: priceField,
  validate: (value) => Number(value) >= minPrices[typeField.value],
  message: () => `Минимальная цена ${minPrices[typeField.value]}`
});

export { createMinPriceRule, minPrices };
