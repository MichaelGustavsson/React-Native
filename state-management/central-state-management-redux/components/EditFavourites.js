import { Text, View, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../store/redux/favourites-slice';

const EditFavourites = () => {
  const dispatch = useDispatch();
  const favouriteNames = useSelector((state) => state.favouriteItems.items);

  const onFavoriteAddHandler = () => {
    dispatch(add({ name: 'Oscar' }));
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
