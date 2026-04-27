const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const createCapacityRule = (roomField, guestField) => ({
  element: guestField,
  validate: () => roomsToGuests[roomField.value].includes(guestField.value),
  message: () => {
    if (roomField.value === '100') {
      return 'Не для гостей';
    }
    return 'Неверное количество гостей';
  }
});

export { createCapacityRule };
