const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomFloat = (min, max, decimals = 1) => {
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  return parseFloat((Math.random() * (upper - lower) + lower).toFixed(decimals));
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomArray = (elements) => {
  const length = getRandomPositiveInteger(1, elements.length);
  const shuffled = elements.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, length);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const isDefined = (value) => value !== null && value !== undefined;
const isNotEmpty = (value) => isDefined(value) && value !== '';

export { getRandomPositiveInteger, getRandomFloat, getRandomArrayElement, getRandomArray, isDefined, isNotEmpty, debounce };
