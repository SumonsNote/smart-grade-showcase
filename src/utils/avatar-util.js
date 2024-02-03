function getAvatar(name) {
  return new URL(`../assets/avatars/${name}`, import.meta.url).href;
}

export { getAvatar };
