const isDefined = (value) => value !== null && value !== undefined;
const isNotEmpty = (value) => isDefined(value) && value !== '';

const fillElement = (element, value, formatFn = null) => {
  if (isNotEmpty(value)) {
    element.textContent = formatFn ? formatFn(value) : value;
  } else {
    element.remove();
  }
};

export { isDefined, fillElement };
