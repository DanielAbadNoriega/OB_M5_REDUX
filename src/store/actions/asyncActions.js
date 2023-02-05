// Async Action Types
export const API_CALL_REQUEST = "API_CALL_REQUEST"; // Watcher Saga listens
export const API_CALL_SUCCESS = "API_CALL_SUCCESS"; // Dispached by Worker Saga
export const API_CALL_FAILURE = "API_CALL_FAILURE"; // Dispached by Worker Saga

export const login = (email, password) => {
  return {
    type: API_CALL_REQUEST,
    // the payload here, contains axios request configuration
    payload: {
      request: {
        method: "POST",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      },
      okAction: API_CALL_SUCCESS,
      failureAction: API_CALL_FAILURE,
    },
  };
};

/**
 * Generic HttpRequest Action dispatcher
 * @param {string} method
 * @param {string} url
 * @param {object} data
 * @returns
 */
export const httpRequest = (method, url, data) => {
  return {
    type: API_CALL_REQUEST,
    // the payload here, contains axios request configuration
    payload: {
      request: {
        method,
        url,
        data,
      },
      okAction: API_CALL_SUCCESS,
      failureAction: API_CALL_FAILURE,
    },
  };
};
