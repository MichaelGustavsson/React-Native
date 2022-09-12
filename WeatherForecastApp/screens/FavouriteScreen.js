import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import { listFavourites } from '../utilities/http';

const FavouriteScreen = ({ navigation }) => {
  const [favourites, setFavourites] = useState([]);
  const getFavourites = async () => {
    const list = await listFavourites();
    setFavourites(list);
  };

  useEffect(() => {
    getFavourites();
  }, []);

  const onGotoDetailsHandler = (id) => {
    navigation.navigate('Details', { cityId: id });
  };

  const renderFavourite = (itemData) => {
    return (
      <View style={styles.screen}>
        <View style={styles.item}>
          <Pressable onPress={() => onGotoDetailsHandler(itemData.item.id)}>
            <Text style={[styles.itemText, styles.textColor]}>
              {itemData.item.city}
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Min favorit städer</Text>
      <FlatList
        data={favourites}
        renderItem={renderFavourite}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#383099',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 24,
    color: '#ffffff',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#140e53',
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 4,
  },
  itemText: {
    fontSize: 24,
  },
  textColor: {
    color: '#ffffff',
  },
});
