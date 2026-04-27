const setDisabledState = (dom, isDisabled) => {
  const action = isDisabled ? 'add' : 'remove';

  dom.form.classList[action]('ad-form--disabled');
  dom.filters.classList[action]('map__filters--disabled');

  dom.fieldsets.forEach((fs) => {
    fs.disabled = isDisabled;
  });

  dom.filterSelects.forEach((el) => {
    el.disabled = isDisabled;
  });

  dom.filterFieldsets.forEach((fs) => {
    fs.disabled = isDisabled;
  });
};

const disableForm = (dom) => setDisabledState(dom, true);
const enableForm = (dom) => setDisabledState(dom, false);

export { disableForm, enableForm };
