import { useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import AppHeader from '../components/ui/AppHeader';

import { MOVIES } from '../data/MoviesData';
import ScreenTemplate from './ScreenTemplate';
import DisplayItem from '../components/DisplayItem';

const MovieOverViewScreen = ({ route, navigation }) => {
  const category = route.params.category;

  const displayedMovies = MOVIES.filter((movie) => {
    return movie.categoryId === category.id;
  });

  useLayoutEffect(() => {
    navigation.setOptions({ title: category.title });
  }, [navigation, category]);

  const renderMovie = (movieItem) => {
    return <DisplayItem item={movieItem.item} />;
  };

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <AppHeader>MovieFlix</AppHeader>
        <Text style={styles.subTitle}>{category.title}</Text>
        <View style={styles.container}>
          <FlatList
            data={displayedMovies}
            keyExtractor={(item) => item.id}
            renderItem={renderMovie}
          />
        </View>
      </View>
    </ScreenTemplate>
  );
};

export default MovieOverViewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    padding: 16,
    marginHorizontal: 20,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
