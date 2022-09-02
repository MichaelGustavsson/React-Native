import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from './favourites-slice';

export const store = configureStore({
  reducer: {
    favouriteItems: favouriteReducer,
  },
});
