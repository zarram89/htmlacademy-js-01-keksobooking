import { createFormElements } from './elements.js';
import { disableForm, enableForm } from './state.js';
import { createValidator } from './validation.js';
import { createCapacityRule } from './rules/rooms.js';
import { createMinPriceRule, minPrices } from './rules/min-price.js';

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

  // --- handlers

  const onSubmit = (evt) => {
    if (!validator.validate()) {
      evt.preventDefault();
    }
  };

  const onTypeChange = () => {
    const min = minPrices[el.type.value];

    el.price.min = min;
    el.price.placeholder = min;

    validator.validate();
  };

  const onTimeInChange = () => {
    el.timeOut.value = el.timeIn.value;
  };

  const onTimeOutChange = () => {
    el.timeIn.value = el.timeOut.value;
  };

  const onCapacityChange = () => {
    validator.validate();
  };

  // --- events

  el.form.addEventListener('submit', onSubmit);

  el.type.addEventListener('change', onTypeChange);
  el.timeIn.addEventListener('change', onTimeInChange);
  el.timeOut.addEventListener('change', onTimeOutChange);

  el.roomNumber.addEventListener('change', onCapacityChange);
  el.capacity.addEventListener('change', onCapacityChange);

  // 👉 важный момент — синхронизация при старте
  onTypeChange();

  return {
    disable: () => disableForm(el),
    enable: () => enableForm(el),
    validate: validator.validate,
    destroy: () => {
      el.form.removeEventListener('submit', onSubmit);

      el.type.removeEventListener('change', onTypeChange);
      el.timeIn.removeEventListener('change', onTimeInChange);
      el.timeOut.removeEventListener('change', onTimeOutChange);

      el.roomNumber.removeEventListener('change', onCapacityChange);
      el.capacity.removeEventListener('change', onCapacityChange);
    }
  };
};

export { initForm };
