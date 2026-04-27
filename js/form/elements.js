const createFormElements = () => {
  const form = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');

  if (!form || !mapFilters) {
    throw new Error('Form or filters not found');
  }

  return {
    form,
    fieldsets: form.querySelectorAll('fieldset'),

    filters: mapFilters,
    filterSelects: mapFilters.querySelectorAll('select'),
    filterFieldsets: mapFilters.querySelectorAll('fieldset'),

    roomNumber: form.querySelector('#room_number'),
    capacity: form.querySelector('#capacity'),
    type: form.querySelector('#type'),
    price: form.querySelector('#price'),
    timeIn: form.querySelector('#timein'),
    timeOut: form.querySelector('#timeout'),
  };
};

export { createFormElements };
