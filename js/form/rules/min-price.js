const minPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const createMinPriceRule = (priceField, typeField) => ({
  element: priceField,

  validate: (value) => {
    const min = minPrices[typeField.value];
    return Number(value) >= min;
  },

  message: () => `Минимальная цена ${minPrices[typeField.value]}`
});

export { createMinPriceRule, minPrices };
