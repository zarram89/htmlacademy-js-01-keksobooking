const renderAvatar = (elements, { avatar }) => {
  if (avatar) {
    elements.avatar.src = avatar;
  } else {
    elements.avatar.remove();
  }
};

export { renderAvatar };
