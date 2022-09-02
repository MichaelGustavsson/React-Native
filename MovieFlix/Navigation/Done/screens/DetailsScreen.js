import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import IconButton from '../components/ui/IconButton';
import Colors from '../utilities/constants/colors';
import ScreenTemplate from './ScreenTemplate';

import { MOVIES } from '../data/MoviesData';
import AppHeader from '../components/ui/AppHeader';

const DetailsScreen = ({ route, navigation }) => {
  const itemId = route.params.id;

  const selectedItem = MOVIES.find((item) => {
    return item.id === itemId;
  });

  const onFavouritePressedHandler = () => {
    console.log('Lagt till din favorit till favoriter...');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPressed={onFavouritePressedHandler} />;
      },
    });
  }, [navigation, onFavouritePressedHandler]);

  return (
    <ScreenTemplate>
      <AppHeader>MovieFlix</AppHeader>
      <View style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.title}>{selectedItem.title}</Text>
          <Image style={styles.image} source={{ uri: selectedItem.imageUrl }} />
          <View style={styles.infoWrapperContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>År:</Text>
              <Text style={styles.infoText}>{selectedItem.releaseYear}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Längd:</Text>
              <Text style={styles.infoText}>{selectedItem.runtime}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Regissör:</Text>
              <Text style={styles.infoText}>{selectedItem.director}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Skådespelare:</Text>
              <Text style={styles.infoText}>{selectedItem.actors}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScreenTemplate>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.lightText,
    textAlign: 'center',
  },
  infoWrapperContainer: {
    backgroundColor: Colors.primaryBackground800,
    padding: 16,
    borderRadius: 20,
  },
  infoContainer: {
    width: '100%',
    paddingHorizontal: 0,
    paddingVertical: 6,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  infoText: {
    color: Colors.lightText,
    marginHorizontal: 4,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'cover',
    marginVertical: 30,
    borderRadius: 175,
    borderWidth: 2,
    borderColor: Colors.primaryText,
  },
});
