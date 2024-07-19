import { configureStore } from '@reduxjs/toolkit';
import { ThunkMiddleware } from 'redux-thunk';
import movieReducer from './movieSlice';
import sessionStorageMiddleware from './sessionStorageMiddleware'; // Import the middleware

const persistedMovies = localStorage.getItem('Movies');
const initialState = {
  movies: persistedMovies ? persistedMovies : undefined,
};

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
  //   preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sessionStorageMiddleware as ThunkMiddleware), // Use ThunkMiddleware here
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
