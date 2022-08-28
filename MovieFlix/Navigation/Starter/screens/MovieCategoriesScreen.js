import { FlatList, View, Text, StyleSheet } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import AppHeader from '../components/ui/AppHeader';
import { CATEGORIES } from '../data/MovieCategoriesData';

const MovieCategoriesScreen = () => {
  let img = '';
  return (
    <View style={styles.screen}>
      <AppHeader>MovieFlix</AppHeader>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(category) => {
          return <CategoryItem item={category.item} />;
        }}
        numColumns={3}
      />
    </View>
  );
};

export default MovieCategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    color: '#f4f4f4',
    fontSize: 16,
  },
});
