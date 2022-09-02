import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState: {
    items: [],
  },
  reducers: {
    addToFavourites: (state, action) => {
      state.items.push(action.payload.name);
    },
    removeFromFavourites: (state, action) => {
      state.items.splice(state.items.indexOf(action.payload.name));
    },
  },
});

export const add = favouriteSlice.actions.addToFavourites;
export const remove = favouriteSlice.actions.removeFromFavourites;
export default favouriteSlice.reducer;
