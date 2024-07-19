// sessionStorageMiddleware.ts
import { Middleware } from 'redux';

const sessionStorageMiddleware: Middleware = (store) => (next) => (action) => {
  // Call the next middleware in the chain
  const result = next(action);

  // Save the state to sessionStorage
  const state = store.getState();
  sessionStorage.setItem('reduxState', JSON.stringify(state));

  return result;
};

export default sessionStorageMiddleware;
