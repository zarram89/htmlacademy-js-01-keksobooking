const initSlider = ({ slider, input, onUpdate }) => {
  if (!slider) { return; }

  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100000,
    },
    start: Number(input.value) || 1000,
    step: 1,
    connect: 'lower',
  });

  slider.noUiSlider.on('update', () => {
    input.value = slider.noUiSlider.get();

    if (onUpdate) {
      onUpdate();
    }
  });

  input.addEventListener('change', () => {
    slider.noUiSlider.set(input.value);
  });
};

export { initSlider };
