import { createFormElements } from './elements.js';
import { disableForm, enableForm } from './state.js';
import { createValidator } from './validation.js';
import { createCapacityRule } from './rules/capacity.js';

const initForm = () => {
  const elements = createFormElements();

  const config = {
    classTo: 'ad-form__element',
    errorClass: 'ad-form__element--invalid',
    successClass: 'ad-form__element--valid',
    errorTextParent: 'ad-form__element',
    errorTextTag: 'span',
    errorTextClass: 'ad-form__error'
  };

  const rules = [
    createCapacityRule(elements.roomNumber, elements.capacity)
  ];

  const validator = createValidator(elements.form, config, rules);

  const onSubmit = (evt) => {
    if (!validator.validate()) {
      evt.preventDefault();
    }
  };

  elements.roomNumber.addEventListener('change', () => {
    validator.validate();
  });

  elements.capacity.addEventListener('change', () => {
    validator.validate();
  });

  elements.form.addEventListener('submit', onSubmit);

  return {
    disable: () => disableForm(elements),
    enable: () => enableForm(elements),
    validate: validator.validate,
    destroy: () => elements.form.removeEventListener('submit', onSubmit)
  };
};

export { initForm };
