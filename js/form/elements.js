const createFormElements = () => {
  const form = document.querySelector('.ad-form');
  const filters = document.querySelector('.map__filters');

  return {
    form,
    filters,
    fieldsets: form.querySelectorAll('fieldset'),
    filterSelects: filters.querySelectorAll('select'),
    filterFieldsets: filters.querySelectorAll('fieldset'),

    roomNumber: form.querySelector('#room_number'),
    capacity: form.querySelector('#capacity'),
    type: form.querySelector('#type'),
    price: form.querySelector('#price'),
    timeIn: form.querySelector('#timein'),
    timeOut: form.querySelector('#timeout'),
    address: form.querySelector('#address'),
    slider: form.querySelector('.ad-form__slider'),
  };
};

export { createFormElements };
