const renderAvatar = (container, { avatar }) => {
  const avatarElement = container.querySelector('.popup__avatar');
  if (avatar) {
    avatarElement.src = avatar;
  } else {
    avatarElement.remove();
  }
};

export { renderAvatar };
