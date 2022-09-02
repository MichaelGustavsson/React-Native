import { FlatList, View, StyleSheet } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import AppHeader from '../components/ui/AppHeader';

import { CATEGORIES } from '../data/CategoriesData';
import Colors from '../utilities/constants/colors';
import ScreenTemplate from './ScreenTemplate';

const MovieCategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (category) => {
    const onCategorySelectedHandler = () => {
      navigation.navigate('Sammanfattning', { category: category.item });
    };
    return (
      <CategoryItem item={category.item} onPress={onCategorySelectedHandler} />
    );
  };

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <AppHeader>MovieFlix</AppHeader>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={renderCategoryItem}
        />
      </View>
    </ScreenTemplate>
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
