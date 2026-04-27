const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const createCapacityRule = (roomField, guestField) => ({
  element: guestField,

  validate: () => {
    const allowed = roomsToGuests[roomField.value] || [];
    return allowed.includes(guestField.value);
  },

  message: () => {
    if (roomField.value === '100') {
      return 'Не для гостей';
    }
    return `Для ${roomField.value} комнат выберите подходящее количество гостей`;
  }
});

export { createCapacityRule };
