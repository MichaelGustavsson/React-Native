import { Text, View, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

const Favourites = () => {
  const favouriteNames = useSelector((state) => state.favouriteItems.items);

  const onGetFavorites = () => {
    console.log(favouriteNames);
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
