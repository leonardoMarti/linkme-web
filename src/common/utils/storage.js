export const setStorage = (type, data) =>
  localStorage.setItem(type, JSON.stringify(data));

export const getStorage = (type) =>
  JSON.parse(localStorage.getItem(type));
