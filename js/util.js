const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomFloat = (min, max, decimals = 1) => {
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  return parseFloat((Math.random() * (upper - lower) + lower).toFixed(decimals));
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomArray = (elements) => {
  const length = getRandomInteger(1, elements.length);
  const shuffled = elements.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, length);
};

export {getRandomInteger, getRandomFloat, getRandomArray, getRandomArrayElement};
