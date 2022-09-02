import { useContext } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { FavouriteContext } from '../store/context/favourite-context';

const EditFavourites = () => {
  const context = useContext(FavouriteContext);

  const onFavoriteAddHandler = () => {
    context.add('Nisse');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Hantera mina favoriter</Text>
      <Button title='Lägg till favorite' onPress={onFavoriteAddHandler} />
    </View>
  );
};
export default EditFavourites;

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
