import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import EditFavourites from './components/EditFavourites';
import Favourites from './components/Favourites';

import { store } from './store/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Fragment>
      <StatusBar style='auto' />
      <Provider store={store}>
        <Favourites />
        <EditFavourites />
      </Provider>
    </Fragment>
  );
}
