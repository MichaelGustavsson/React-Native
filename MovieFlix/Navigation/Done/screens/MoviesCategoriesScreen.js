import { FlatList, Text, View, Image, StyleSheet } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import AppHeader from '../components/ui/AppHeader';

import { CATEGORIES } from '../data/CategoriesData';
import Colors from '../utilities/constants/colors';

const MovieCategoriesScreen = () => {
  const renderCategoryItem = (category) => {
    return <CategoryItem item={category.item} />;
  };

  return (
    <View style={styles.screen}>
      <AppHeader>MovieFlix</AppHeader>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

export default MovieCategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    color: Colors.lightText,
    fontSize: 24,
    marginHorizontal: 12,
  },
});
