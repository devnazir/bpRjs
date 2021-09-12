import Cookies from "js-cookie";

export const Cookie = {
  set: ({ key, value, path, secure, expires }) => {
    Cookies.set(key, value, {
      path,
      secure,
      expires,
    });
  },

  get: (key) => {
    return Cookies.getJSON(key);
  },

  getAll: () => {
    return Cookies.getJSON();
  },

  remove: (key, path = "") => {
    Cookies.remove(key, { path: path });
  },
};
