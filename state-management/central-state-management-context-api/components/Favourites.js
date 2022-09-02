import { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { FavouriteContext } from '../store/context/favourite-context';

const Favourites = () => {
  const context = useContext(FavouriteContext);

  const onGetFavorites = () => {
    console.log(context.favouriteNames);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Mina favoriter</Text>
      <Button title='Hämta favoriter' onPress={onGetFavorites} />
    </View>
  );
};
export default Favourites;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
});
