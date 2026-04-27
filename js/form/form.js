import { createFormElements } from './elements.js';
import { disableForm, enableForm } from './state.js';
import { createValidator } from './validation.js';
import { createCapacityRule } from './rules/rooms.js';
import { createMinPriceRule, minPrices } from './rules/min-price.js';
import { initSlider } from './slider.js';

const initForm = () => {
  const el = createFormElements();

  const config = {
    classTo: 'ad-form__element',
    errorClass: 'ad-form__element--invalid',
    successClass: 'ad-form__element--valid',
    errorTextParent: 'ad-form__element',
    errorTextTag: 'span',
    errorTextClass: 'ad-form__error'
  };

  const rules = [
    createCapacityRule(el.roomNumber, el.capacity),
    createMinPriceRule(el.price, el.type),
  ];

  const validator = createValidator(el.form, config, rules);

  // submit
  const onSubmit = (evt) => {
    if (!validator.validate()) {
      evt.preventDefault();
    }
  };

  el.form.addEventListener('submit', onSubmit);

  // тип жилья → цена
  const onTypeChange = () => {
    const min = minPrices[el.type.value];

    el.price.min = min;
    el.price.placeholder = min;

    validator.validate();
  };

  // время
  const onTimeInChange = () => {
    el.timeOut.value = el.timeIn.value;
  };

  const onTimeOutChange = () => {
    el.timeIn.value = el.timeOut.value;
  };

  el.type.addEventListener('change', onTypeChange);
  el.timeIn.addEventListener('change', onTimeInChange);
  el.timeOut.addEventListener('change', onTimeOutChange);

  // комнаты/гости
  el.roomNumber.addEventListener('change', () => validator.validate());
  el.capacity.addEventListener('change', () => validator.validate());

  // адрес
  const setAddress = ({ lat, lng }) => {
    el.address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  };

  // слайдер
  initSlider({
    slider: el.slider,
    input: el.price,
    onUpdate: () => validator.validate()
  });

  // начальная инициализация
  onTypeChange();

  return {
    disable: () => disableForm(el),
    enable: () => enableForm(el),
    setAddress,
  };
};

export { initForm };
