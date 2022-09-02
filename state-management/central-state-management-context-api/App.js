import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import EditFavourites from './components/EditFavourites';
import Favourites from './components/Favourites';
import FavouriteContextProvider from './store/context/favourite-context';

export default function App() {
  return (
    <Fragment>
      <StatusBar style='auto' />
      <FavouriteContextProvider>
        <Favourites />
        <EditFavourites />
      </FavouriteContextProvider>
    </Fragment>
  );
}
