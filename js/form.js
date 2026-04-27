const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('select');
const mapFiltersFieldsets = mapFilters.querySelectorAll('fieldset');

const toggleFormState = (isDisabled) => {
  const action = isDisabled ? 'add' : 'remove';

  adForm.classList[action]('ad-form--disabled');
  mapFilters.classList[action]('map__filters--disabled');

  adFormFieldsets.forEach((fieldset) => {
    fieldset.disabled = isDisabled;
  });

  mapFiltersSelects.forEach((select) => {
    select.disabled = isDisabled;
  });

  mapFiltersFieldsets.forEach((fieldset) => {
    fieldset.disabled = isDisabled;
  });
};

const disablePage = () => toggleFormState(true);
const enablePage = () => toggleFormState(false);

export { disablePage, enablePage };
