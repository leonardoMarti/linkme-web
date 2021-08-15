module.exports = () => {
  const isDevMode =
    process && process.env && process.env.NODE_ENV === "development";

  let BASE_URL;

  if (window.env) {
    BASE_URL = window.env.REACT_APP_ENDPOINT_BACKEND;
  }

  if (isDevMode) {
    BASE_URL = "http://localhost:3000";
  }

  return BASE_URL;
};
