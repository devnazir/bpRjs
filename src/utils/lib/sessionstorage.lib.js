export const _sessionStorage = {
  get: (key) => JSON.parse(sessionStorage.getItem(key)),
  set: (key, value) => sessionStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => sessionStorage.removeItem(key),
  clear: () => sessionStorage.clear(),
};
