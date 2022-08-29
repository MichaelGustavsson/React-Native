import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import AppHeader from '../components/ui/AppHeader';

import { MOVIES } from '../data/MoviesData';
import Colors from '../utilities/constants/colors';
import ScreenTemplate from './ScreenTemplate';

const MovieOverViewScreen = ({ route }) => {
  const category = route.params.category;

  const displayedMovies = MOVIES.filter((movie) => {
    return movie.categoryId === category.id;
  });

  const renderMovie = (movieItem) => {
    return (
      <View style={styles.movieContainer}>
        <Text style={styles.movieTitle}>{movieItem.item.title}</Text>
        <Image
          style={styles.movieImage}
          source={{ uri: movieItem.item.imageUrl }}
        />
        <Text>{movieItem.item.plot}</Text>
      </View>
    );
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
  movieContainer: {
    borderWidth: 2,
    borderColor: Colors.primaryText,
    marginVertical: 16,
    padding: 16,
    borderRadius: 10,
    backgroundColor: Colors.lightText,
  },
  movieImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  movieTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 10,
    color: Colors.primaryText,
  },
});
